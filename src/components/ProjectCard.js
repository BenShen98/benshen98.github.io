import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { Card, CardHeader, CardMedia, CardContent, CardActions } from '@material-ui/core';

import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';

import category2icon from '../theme/category2icon'

import ProgressChart from './ProgressChart';

import Markdown from 'markdown-to-jsx';

import Fab from "@material-ui/core/Fab";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 273,
  },
  media: {
    height: "200px",
    margin: theme.spacing(1),
  },
  clickableMedia: {
    cursor: "pointer",
    "&:hover::after":{
      display: "block",
      position: "relative",

      color: "#ffffff",
      content: "'\\A \\A \\A Click to view Preview'",
      whiteSpace: "pre",
      fontSize: "large",

      backgroundColor: "#000000cc",
      textAlign: "center",
      height: "100%",
      width: "100%",
    },
  },

  expand: {
    transform: 'rotate(0deg)',
    // marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));




export default function ProjectCard({projectData, setPreviewContext, setUserPrompt}) {

  //  handel input
  const categoryIcon = category2icon(projectData.category || "")
  const classes = useStyles();

  function handelSourceCodeClick (e){
    e.preventDefault()

    if (typeof projectData.sourceCode != "string" || projectData.sourceCode.length <= 0){
      setUserPrompt ({info: `The Source Code for ${projectData.title} is not publicly available`})
      return
    }

    window.open(
      projectData.sourceCode,
      '_blank'
    )

  };

  function handelPreviewClick(e){
    e.preventDefault()

    if (typeof projectData.preview == "undefined"){
      setUserPrompt ({info: `The Preview for ${projectData.title} is not currently available`})
      return
    }

    setPreviewContext(projectData)

  };



  return (
    <Card className={classes.root}>

      <CardHeader
        // category
        avatar={
          <Avatar alt="" aria-label="recipe" style={{backgroundColor: categoryIcon.backgroundColor}}>
            {categoryIcon.icon}
          </Avatar>
        }


        action={
          <IconButton aria-label="Source Code"
            onClick={handelSourceCodeClick} href={projectData.sourceCode}
          >
            <GitHubIcon />
          </IconButton>
        }
        title={projectData.title}
        subheader={projectData.date}
      />

      <ProgressChart data={projectData.codeComposition} unit="bytes" />

      <CardMedia
        className={clsx(classes.media,{
          [classes.clickableMedia]: typeof projectData.preview != "undefined"
        })}
        image={projectData.imgSrc}
        onClick={handelPreviewClick}
      />


      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography> */}
        <Markdown
          children={projectData.summary}
        />

      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
