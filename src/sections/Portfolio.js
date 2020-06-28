import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {Box, Grid, Container} from '@material-ui/core';


import ProjectCard from '../components/ProjectCard'
import PreviewDialog from '../components/PreviewDialog'

//debugging
import { Paper } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';

import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({

}));

const maxWidth='lg'
var xxxx=`
Raft
======

Component Structure
-------------------

### Instance Initiation and Flow of Message
`

var projectData = {
  category: "Academic",
  title: "FooBoxxxxxxxxxxxxxxxxxxxxxo",
  date: "Sept 2016",
  summary: "fooboooxxx",

  sourceCode: "https://google.com",
  preview: <Markdown children={xxxx} />,
  // codeComposition:[
  //   { color: '#0000ff', name: 'Group A', value: 400},
  //   { color: '#ff9999', name: 'Group B', value: 300},
  //   { color: '#66ccff', name: 'Group C', value: 300},
  //   { color: '#009933', name: 'Group D', value: 200},
  // ]

}

export default function Portfolio(props) {

  const [previewContext, setPreviewContext] = useState(undefined)
  const classes = useStyles();


  return (
    <Container maxWidth={maxWidth}>



    {/* Grid full of containers */}
    <Grid spacing={2} justify="center" container>

      <Grid item>
      <ProjectCard
        {...props}
        projectData={projectData}
        setPreviewContext={setPreviewContext}
      />
      </Grid>

      {/* <Grid item>
      <ProjectCard />
      </Grid>


      <Grid item>
      <ProjectCard />
      </Grid>


      <Grid item>
      <ProjectCard />
      </Grid>

      <Grid item>
      <ProjectCard />
      </Grid>


      <Grid item>
      <ProjectCard />
      </Grid> */}

    </Grid>

    <PreviewDialog
      {...props}
      previewContext={previewContext}
      setPreviewContext={setPreviewContext}
      fullWidth={true}
      maxWidth={maxWidth}
    />

    </Container>
  );
}
