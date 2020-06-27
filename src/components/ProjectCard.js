import React from 'react';
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



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

const data = [
  { color: '#0000ff', name: 'Group A', value: 400 , unit: "bytes"},
  { color: '#ff9999', name: 'Group B', value: 300 , unit: "bytes"},
  { color: '#66ccff', name: 'Group C', value: 300 , unit: "bytes"},
  { color: '#009933', name: 'Group D', value: 200 , unit: "bytes"},
];



export default function ProjectCard(props) {

  //  handel input
  const project = props.project
  const icon = category2icon(project.category || "")


  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>

      <CardHeader
        avatar={
          <Avatar alt="" aria-label="recipe" style={{backgroundColor: icon.backgroundColor}}>
            {icon.icon}
          </Avatar>
        }
        action={
          <IconButton aria-label="Source Code">
            <GitHubIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <ProgressChart data={data} unit="bytes" />

      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />


      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
        </CardContent>
      </Collapse>

    </Card>
  );
}