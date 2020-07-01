#!/usr/bin/python3
import logging
import json
# import parsearg

LOGGINGFORMAT='%(levelname)s: %(filename)s:%(lineno)d :%(message)s'

from helper import Github,ProjectConfig, readJson, readYaml


if __name__ == '__main__':
  logging.basicConfig(format=LOGGINGFORMAT, level=logging.INFO)

  # INIT
  projectConfig = ProjectConfig('data/projects_config.yaml')
  github = Github(readJson('.secrets/github_oauth.json'))

  # GEN OUTPUT
  outputs = projectConfig.generatejs(github)

  # EXPORT
  with open('data/projects_data.js', 'w') as fd:
    fd.seek(0)

    fd.write(outputs)

    fd.truncate()