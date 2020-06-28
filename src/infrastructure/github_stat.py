#!/usr/bin/python3

import requests
import json
import logging

LOGGINGFORMAT='%(levelname)s: %(filename)s:%(lineno)d :%(message)s'


class Github:
    def __init__(self, headers={}):
        self.endpoint = "https://api.github.com/graphql"
        self.headers = headers

        self.repo_data = '''{
          createdAt, updatedAt, name, url, isPrivate,
          languages( first: 100, orderBy: { field: SIZE, direction: DESC } ) {
            totalCount,
            totalSize
            edges {
              size
              node {
                color
                name
              }
            }
          }
        }'''

    def request(self, query, variable=None):
        data = {"query": query}
        if variable:
            data["variables"] = variable

        result = requests.post(self.endpoint, json=data, headers=self.headers)
        return result

    def readRepo(self, reponame, username='benshen98'):
      logging.info(f"Reading repo {username}/{reponame}")
      dataobj = self.request('{repository(name: "%s", owner: "%s") %s }' % (reponame, username, self.repo_data ))


      data = self.parseResponse(dataobj)['repository']

      self.lintLanguages(data)

      # return data
      return data

    def readAllViwerRepo(self):
      logging.info(f"Reading all repo under view")
      dataobj = self.request('''{
        viewer{
          repositories(last: 100, ownerAffiliations: OWNER, isFork: false, orderBy: { field: UPDATED_AT, direction: DESC }){
            totalCount,
            nodes %s
          }
        }
      }''' % self.repo_data )

      data = self.parseResponse(dataobj)['viewer']['repositories']
      self.lintRepoLength(data)

      repos = data['nodes']
      for repo in repos:
        self.lintLanguages(repo)

      return repos


    def parseResponse(self, dataobj):
      if dataobj.status_code != 200:
        logging.error(f"Non 200 return code: {dataobj.text}")
        raise "Error"

      data = json.loads(dataobj.text)
      if "errors" in data:
        logging.error(f"Error in Graphql: {data['errors']} ")

      return data['data']


  # LINTTING

    def lintRepoLength(self, reposData):
      passed = True

      if (reposData['totalCount'] != len(reposData['nodes'])):
        logging.warning(f"Expected repo count {reposData['totalCount']} and list size {len(reposData['nodes'])} does not match")
        passed = False

      return passed

    def lintLanguages(self, repoData):
      passed = True
      if not ('languages' in repoData):
        print(repoData)
        logging.error(f'{repoData["name"]} does not contain languages field')
        return False

      languagesData = repoData['languages']

      if (languagesData['totalCount'] != len(languagesData['edges'])):
        logging.warning(f"Expected languages count {languagesData['totalCount']} and list size {len(languagesData['edges'])} does not match")
        passed = False

      if (languagesData['totalSize'] <=0 ):
        logging.warning(f'{repoData["name"]} contains no code ({languagesData["totalSize"]} byte)')
        passed = False

      return passed

def readJson(path):
    with open(path) as fd:
        return json.load(fd)


if __name__ == "__main__":
    logging.basicConfig(format=LOGGINGFORMAT, level=logging.INFO)

    headers = readJson('.secrets/github_oauth.json')
    github = Github(headers)
    # x = github.readRepo('raft')
    x = github.readAllViwerRepo()
    print(json.dumps(x, indent=4))
