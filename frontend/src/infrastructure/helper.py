#!/usr/bin/python3

import requests
import json
import logging
import yaml

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

class ProjectConfig:
  def __init__(self, path):
    meta = readYaml(path)

    # input vars
    self.configs = self.__loadConfigs(meta['config'])
    self.projects = self.__loadProjects(meta['projects'])

    # output vars
    self.outputheaders = {} # set
    # self.outputcontents = []


  def __loadConfigs(self, configs):
    # default
    default = {
      'hidePrivate': True,
      'codeComposationOtherColor': '#000000'
    }

    for name, val in configs.items():
      # linting
      if name not in default:
        logging.error(f"config {name} not exist")
        continue

      if not isinstance(val, type(default[name])):
        logging.error(f"config {name} has wrong type, expecting {type(default[name])}, get {type(val)} ")

      # apply
      default[name] = val

    return default

  def __loadProjects(self, projects):
    category_list = ['Academic', 'Placement', 'Extracurricular']

    # linting
    for project_name, contents in projects.items():
      # id
      contents['id'] = project_name

      # title
      if 'title' not in contents:
        contents['title'] = project_name

      # category
      if contents.get('category', '') not in category_list:
        logging.error(f"{project_name} does not contains correct category field")

      # summary
      if not isinstance(contents.get('summary', None), str):
        logging.error(f"{project_name} does not contains correct summary field")

      # imgSrc
      if not (isinstance(contents.get('imgSrc', None), str) and len(contents['imgSrc'].split('/'))>1):
        logging.error(f"{project_name} does not contains correct imgSrc field")

      # footerIcons
      if not isinstance(contents.get('footerIcons', None), list):
        logging.error(f"{project_name} does not contains correct footerIcons field (should be list)")

      # previewSrc
      if not isinstance(contents.get('previewSrc', None), str):
        logging.warning(f"{project_name} does not contain a preview")

      # Src EXIST lint


    return projects

  def translateLangeuages(self, languages):
    codeComposition=[]
    totalSize = int(languages['totalSize'])

    for edge in languages['edges']:
      size, node = int(edge['size']), edge['node']
      totalSize -= size
      codeComposition.append({'color': node['color'], 'name': node['name'], 'value': size})

    if totalSize > 0:
      codeComposition.append({'color': self.configs['codeComposationOtherColor'], 'name': 'other', 'value': totalSize})
    elif totalSize < 0:
      logging.error("total langeuage size is not correct")

    return codeComposition

  def generatejs(self, github):
    contents = "// This file is generated from meta yaml file\n\n"

    # query graph ql
    for project_name, project in self.projects.items():
      gql_data = github.readRepo(project_name)

      # date
      # TODO: user dateFomat
      project['date'] = gql_data['createdAt']

      # sourceCode
      if not (self.configs['hidePrivate'] and gql_data['isPrivate']):
        project['sourceCode'] = gql_data['url']

      # codeComposition
      project['codeComposition'] = self.translateLangeuages(gql_data['languages'])

    # genearted output



    # write output
    contents += '\n'.join(self.outputheaders)

    contents += f"export default {json.dumps(list(self.projects.values()), indent=2)}\n"


    return contents







def readJson(path):
  with open(path) as fd:
    return json.load(fd)

def readYaml(path):
  with open(path) as fd:
    return yaml.load(fd, Loader=yaml.SafeLoader)

# if __name__ == "__main__":
#     logging.basicConfig(format=LOGGINGFORMAT, level=logging.INFO)

#     headers = readJson('.secrets/github_oauth.json')
#     github = Github(headers)
#     # x = github.readRepo('raft')
#     x = github.readAllViwerRepo()
#     print(json.dumps(x, indent=4))
