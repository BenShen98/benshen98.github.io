import React, {useState} from 'react';

import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {Box, Grid, Container, Popper} from '@material-ui/core';
import {Button, ButtonGroup}  from '@material-ui/core';
import {BottomNavigation, BottomNavigationAction}  from '@material-ui/core';
import {Link}  from '@material-ui/core';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import LinkIcon from '@material-ui/icons/Link';
// import LinkIcon from '@material-ui/icons';

import category2icon from '../theme/category2icon'

import { positions } from '@material-ui/system';

import coverSummaryGen from '../data/cover_summary'

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
    marginBottom: theme.spacing(3),

    "& > *":{
      marginTop: theme.spacing(2) //margin for buttonGroup
    },
  },

  mainSummary: {
    margin: theme.spacing(1),
    // maxHeight: "50%",
    textAlign: "left",

    "& button":{
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },

    "& ul": {marginTop: theme.spacing(1)},

    "& li": {marginBottom: theme.spacing(1)},
  },

  mainSummaryPopover:{
    padding: theme.spacing(1)
  },

  mainSummaryContent:{
    overflow: "auto"
  },

  bottomScroll: {
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

}));


export default function Cover() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">

      <Box className={classes.main} >

        {/* Intro (Welcome and Links) */}
        <MainIntro/>

        {/* SUMMARY */}
        <MainSummary/>

      </Box>

      {/* Scroll Down Icon */}
      <Grid container className={classes.bottomScroll}>
        <IconButton aria-label='scroll-down' >
          <ExpandMoreIcon />
        </IconButton>
      </Grid>

    </Container>
  );
}

// SUB SECTIONS

function MainIntro(){
  const classes = useStyles();

  const preventDefault = (e) => e.preventDefault()


  return (
    <Box className={classes.mainIntro}>
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

    </Box>
  );
}

function MainSummary(){
  const classes = useStyles();

  const [sectionId, setSectionId] = useState(0)
  const [hoverId, setHoverId] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)

  const summaryData = coverSummaryGen()

  return(
    <Paper className={classes.mainSummary} >

      {/* Selection UI */}
      <BottomNavigation
        value={sectionId}
        showLabels
        onChange={ (_,id) => (setSectionId(id)) }
      >
        {summaryData.map( function(d, i){
          var {icon} = category2icon(d.category);
          return (
            <BottomNavigationAction
              key={i}
              label={d.category}
              icon={icon}
              onMouseOver={(e) => {setAnchorEl(e.currentTarget); setHoverId(i);}}
              onMouseOut={(e) => setAnchorEl(null)}
            />
          )
        })}
      </BottomNavigation>

      {/* icon popper (conditional return) */}
      {(summaryData[hoverId].img) ?
        (<Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="top"
        >
          <Paper className={classes.mainSummaryPopover}>
            {summaryData[hoverId].img}
          </Paper>
        </Popper>)
      : <></>}

      {/* Content */}
      <Box mx={3} className={classes.mainSummaryContent}>
        {summaryData[sectionId].content}
      </Box>
    </Paper>
  );
}