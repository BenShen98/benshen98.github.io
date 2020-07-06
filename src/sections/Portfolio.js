import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {Box, Grid, Container} from '@material-ui/core';


import ProjectCard from '../components/ProjectCard'
import PreviewDialog from '../components/PreviewDialog'

import projectDatas from '../data/projects_data'

//debugging
import { Paper } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';

import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({

}));

const maxWidth='lg'

export default function Portfolio(props) {

  const [previewContext, setPreviewContext] = useState(undefined)
  const classes = useStyles();


  return (
    <Container maxWidth={maxWidth}>

    {/* Grid full of containers */}
    <Grid spacing={2} justify="center" container>



      {projectDatas.map(function(project, i){
        return (
          <Grid item key={i}>
            <ProjectCard
            {...props}
            projectData={project}
            setPreviewContext={setPreviewContext}
            />
          </Grid>
        )
      })}
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
