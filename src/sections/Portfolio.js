import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

//debugging
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  placeholder: {
    display: 'flex',
    flexWrap: 'wrap',
    width: "100%",
    height: theme.spacing(10),
    "background-color": "#C0C0C0"
  },
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
    <Box>
      <Paper className={classes.placeholder}/>



    </Box>
  );
}
