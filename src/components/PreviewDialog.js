import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Fab from "@material-ui/core/Fab";
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({

  preview: {
    padding: theme.spacing(2)
  },

  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

  fabButton: {
    position: "absolute",
    zIndex: 2147483647,
    // top: -30,
    top: 0,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function PreviewDialog(props) {


  const { previewContext, setPreviewContext, fullWidth, maxWidth, setUserPrompt } = props;
  const classes = useStyles();

  const [firstOpen, setFirstOpen] = useState(true);

  // early exit
  if (typeof previewContext == 'undefined')
    return (<></>)

  // callback on source code click
  function handelSourceCodeClick (e){
    e.preventDefault()

    if ( typeof previewContext.sourceCode != "string" || previewContext.sourceCode.length <= 0){
      setUserPrompt ({info: `The Source Code for ${previewContext.title} is not publicly available`})
      return
    }

    window.open(
      previewContext.sourceCode,
      '_blank'
    )

  };

  // first time luncher
  function intro(){
    if (firstOpen){
      setUserPrompt({success: "You can checkout the source code by click the GitHub icon."})
      setFirstOpen(false)
    }
  };


  return (

    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={Boolean(previewContext)}
      onEntered={intro}
      onClose={() => {setPreviewContext(undefined)}}
      TransitionComponent={Transition}
    >
      <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={handelSourceCodeClick}>
        <GitHubIcon />
      </Fab>

      <DialogContent dividers={true}>
        {previewContext.preview}
      </DialogContent>

    </Dialog>
  )
}
