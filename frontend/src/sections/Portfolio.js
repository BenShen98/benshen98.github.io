import React, {useState, useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {Box, Grid, Container} from '@material-ui/core';

import {HashContext} from 'contexts/HashContext'

import ProjectCard from 'components/ProjectCard'

//debugging
import { Paper } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';

import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({

}));

export default function Portfolio(props) {
  const classes = useStyles();
  const {setHashStateProj} = useContext(HashContext)

  return (
    <Container maxWidth={props.maxWidth} id='portfolio'>

    {/* Grid full of containers */}
    <Grid spacing={2} justify="center" container>



      {props.dataProjects.map(function(project, i){
        return (
          <Grid item key={i}>
            <ProjectCard
            {...props}
            projectData={project}
            setHashStateProj={setHashStateProj}
            />
          </Grid>
        )
      })}
    </Grid>

    </Container>
  );
}
