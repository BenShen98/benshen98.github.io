import React, {useState, useContext} from 'react';

import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {Box, Grid, Container, Popper} from '@material-ui/core';
import {Button, ButtonGroup}  from '@material-ui/core';
import {Link}  from '@material-ui/core';

import {HashContext} from 'contexts/HashContext'
import {UserContext} from 'contexts/UserContext'

import AttachFileIcon from '@material-ui/icons/AttachFile';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const linkedInUrl = "https://www.linkedin.com/in/benshen98"
const githubUrl = "https://github.com/BenShen98"

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    textAlign: "center",

    // INTRO
    '& #coverMainIntro':{
      marginBottom: theme.spacing(3),

      "& > *":{
        marginTop: theme.spacing(2) //space out intro
      },
    },
  },

  ad:{
    textAlign: "left",
    cursor: "pointer",
    "&::before": {
      color: "#46a049",
      border: "1px solid #46a049",
      content: "'Ad'",
      padding: "1px 5px",
      fontSize: "0.875rem",
      marginRight: "6px",
      borderRadius: "3px",
    }
  },

}));


export default function Cover() {
  const classes = useStyles();

  return (
    <Container className={classes.main} maxWidth="md" id='cover'>

    {/* Intro (Welcome and Links) */}
    <CoverMainIntro/>

    </Container>
  );
}

// SUB SECTIONS

function CoverMainIntro(){
  const classes = useStyles();
  const {openUrl} = useContext(UserContext)

  const { setHashStatePath} = useContext(HashContext)

  return (
    <Box id='coverMainIntro'>
      <Link className={classes.ad} onClick={() => setHashStatePath('/ad')}>
        <b>Looking for Full-Time Position</b> Imperial College Penultimate Year Student who Understand Project Management
      </Link>


      <Typography variant="h1">
        Ben Shen's Reactive Portfolio
      </Typography>

      <ButtonGroup>
        <Button startIcon={<AttachFileIcon/>} onClick={() => openUrl(require('data/ben_shen_cv.pdf'))} >Resume</Button>
        <Button startIcon={<GitHubIcon/>} onClick={() => openUrl(githubUrl)} >GitHub</Button>
        <Button startIcon={<LinkedInIcon/>} onClick={() => openUrl(linkedInUrl)} >LinkedIn</Button>
      </ButtonGroup>

    </Box>
  );
}
