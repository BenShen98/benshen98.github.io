import React, {useState} from 'react';

import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {Box, Grid, Container} from '@material-ui/core';
import {Button, ButtonGroup}  from '@material-ui/core';
import {BottomNavigation, BottomNavigationAction}  from '@material-ui/core';
import {Link}  from '@material-ui/core';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import LinkIcon from '@material-ui/icons/Link';
// import LinkIcon from '@material-ui/icons';



import { positions } from '@material-ui/system';

import summaryData from '../data/cover_summary'

//debugging
import { Paper } from '@material-ui/core';


const topMargin = "48px"
const scrollIconHeight = "56px"
const buttonMargin = "16px"

const useStyles = makeStyles((theme) => ({

  main:{
    height: `calc(100vh - ${scrollIconHeight} - ${topMargin} - ${buttonMargin})`,
    marginTop: topMargin,
    textAlign: "center",
  },

  mainIntro: {
    "& > *":{
      marginTop: theme.spacing(2) //margin for buttonGroup
    }
  },

  mainSummary: {
    "& button":{
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  },

  centerScrolling: {
    justifyContent: "center",
    marginBottom: buttonMargin,
    "& svg": {
      height: scrollIconHeight,
      width: scrollIconHeight
    }

  },

  ad:{
    textAlign: "left",
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

  test:{
    margin: theme.spacing(1),
    // width: "100%",
    height: theme.spacing(40),
    "background-color": "#C0C0C0",
    textAlign: "left",
  }

}));


export default function Cover() {
  const classes = useStyles();

  return (
    <> {/* height is style (reason for box exist) */}

      <Grid container className={classes.main} >

        {/* Intro (Welcome and Links) */}
        <Grid item xs={12} className={classes.mainIntro}>
          <MainIntro/>
        </Grid>

        {/* SUMMARY */}
        <Grid item xs={12} className={classes.mainSummary}>
          <MainSummary/>
        </Grid>

      </Grid>

      {/* Scroll Down Icon */}
      <Grid container className={classes.centerScrolling}>
        <IconButton aria-label='scroll-down' >
          <ExpandMoreIcon />
        </IconButton>
      </Grid>

    </>
  );
}

// SUB SECTIONS

function MainIntro(){
  const classes = useStyles();

  const preventDefault = (e) => e.preventDefault()


  return (
    <>
      <Link href="" className={classes.ad} onClick={preventDefault}>
        <b>Looking for Full-Time Position</b> Imperial College Preliminary Year Student who Understand Project Management
      </Link>


      <Typography variant="h1">
        Ben Shen's Reactive Portfolio
      </Typography>

      <ButtonGroup>
        <Button startIcon={<AttachFileIcon />}>Curriculum </Button>
        <Button startIcon={<GitHubIcon />}>GitHub</Button>
        <Button startIcon={<LinkedInIcon />}>LinkedIn</Button>
      </ButtonGroup>

    </>
  );
}

function MainSummary(){
  const classes = useStyles();

  const [sectionId, setSectionId] = useState(0)

  return(
    <>
      <BottomNavigation
        value={sectionId}
        showLabels
        onChange={ (_,id) => (setSectionId(id)) }
      >
        {summaryData.map((d) => (
          <BottomNavigationAction label={d.label} icon={d.icon} />
        ))}
      </BottomNavigation>


      <Paper className={classes.test}>
        {summaryData[sectionId].content}
      </Paper>
    </>
  );
}