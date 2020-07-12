import React, {useState, useContext} from 'react';

import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {Box, Grid, Container, Popper} from '@material-ui/core';
import {Button, ButtonGroup}  from '@material-ui/core';
import {BottomNavigation, BottomNavigationAction}  from '@material-ui/core';
import {Link}  from '@material-ui/core';

import {HashContext} from './../contexts/HashContext'

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

import {HashContextConsumer} from '../contexts/HashContext'

const coverTopMargin = "48px"
const coverScrollHeight = "56px"
const bottomMargin = "16px"

const coverMainSummaryButtonHeight='56px'

const useStyles = makeStyles((theme) => ({

  coverTopMargin:{
    height: coverTopMargin
  },

  coverMain:{
    height: `calc(100vh - ${coverScrollHeight} - ${coverTopMargin} - ${bottomMargin})`,
    textAlign: "center",

    // INTRO
    '& #coverMainIntro':{
      marginBottom: theme.spacing(3),

      "& > *":{
        marginTop: theme.spacing(2) //space out intro
      },
    },

    // SUMMARY
    '& #coverMainSummary':{
      margin: theme.spacing(1),
      height: "60%",
      textAlign: "left",
    },

    "& #coverMainSummaryButton":{
      height: coverMainSummaryButtonHeight,
    },

    '& #coverMainSummaryPopper':{
      padding: theme.spacing(1)
    },

    '& #coverMainSummaryContent':{
      overflow: "auto",
      height: `calc(100% - ${coverMainSummaryButtonHeight})`,

      "& ul": {marginTop: theme.spacing(1)},
      "& li": {marginBottom: theme.spacing(1)},
    },

  },

  coverScroll: {
    justifyContent: "center",
    marginBottom: bottomMargin,
    "& svg": {
      height: coverScrollHeight,
      width: coverScrollHeight
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
    <Container maxWidth="md" id='cover'>

      <Box className={classes.coverTopMargin}/>

      <Box className={classes.coverMain} id='coverMain'>

        {/* Intro (Welcome and Links) */}
        <CoverMainIntro/>

        {/* SUMMARY */}
        <CoverMainSummary/>

      </Box>

      {/* Scroll Down Icon */}
      <Grid container className={classes.coverScroll} id='coverScroll'>
        <IconButton aria-label='scroll-down' onClick={()=>document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})}>
          <ExpandMoreIcon />
        </IconButton>
      </Grid>

    </Container>
  );
}

// SUB SECTIONS

function CoverMainIntro(){
  const classes = useStyles();

  const preventDefault = (e) => e.preventDefault()


  return (
    <Box id='coverMainIntro'>
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

const summaryData = coverSummaryGen()
const lutSummaryName = summaryData.reduce((acc, o, i)=>{acc[o.category]=i; return acc}, {})

function CoverMainSummary(){
  const classes = useStyles();
  const {hashStateSummary, setHashStateSummary} = useContext(HashContext)

  const displayCategory = hashStateSummary in lutSummaryName ? hashStateSummary : summaryData[0].category

  const [hoverId, setHoverId] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)

  return(
    <Paper className={classes.mainSummary} id='coverMainSummary'>

      {/* Selection UI */}
      <BottomNavigation
        value={displayCategory}
        showLabels
        onChange={ (_, value) => (setHashStateSummary(value)) }
        id='coverMainSummaryButton'
      >
        {summaryData.map( function(d, i){
          var {icon} = category2icon(d.category);
          return (
            <BottomNavigationAction
              key={i}
              label={d.category}
              value={d.category}
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
          <Paper className={classes.mainSummaryPopover} id='coverMainSummaryPopper'>
            {summaryData[hoverId].img}
          </Paper>
        </Popper>)
      : <></>}

      {/* Content */}
      <Box mx={3} className={classes.mainSummaryContent} id='coverMainSummaryContent'>
        {summaryData[lutSummaryName[displayCategory]].content}
      </Box>
    </Paper>
  );
}