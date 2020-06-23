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
    height: "100%",
  },
}));

export default function Cover() {
  const classes = useStyles();

  return (
    <Box height="100vh" > {/* height is style (reason for box exist) */}
      <Paper className={classes.placeholder}/>
    </Box>
  );
}
