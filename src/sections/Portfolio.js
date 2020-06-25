import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {Box, Grid, Container} from '@material-ui/core';


import ProjectCard from '../components/ProjectCard'

//debugging
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

}));

function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="xxx">
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </div>
  );
}

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">



    {/* Grid full of containers */}
    <Grid spacing={2} justify="center" container>

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
      </Grid>

      <Grid item>
      <ProjectCard />
      </Grid>


      <Grid item>
      <ProjectCard />
      </Grid>

    </Grid>



    </Container>
  );
}
