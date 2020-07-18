import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Dialog, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import {HashContext} from 'contexts/HashContext'

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
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { UserContext } from 'contexts/UserContext';


const useStyles = makeStyles((theme) => ({

  main: {
    '& .MuiDialogActions-root': {
      marginRight: theme.spacing(1),
      '& button':{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      }
    }
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function PreviewDialog(props) {
  const { lutProjectName, dataProjects, fullWidth, maxWidth, setUserPrompt } = props;
  const classes = useStyles();
  const loadingPreviewData = <CircularProgress/>


  // retrieve hashStateProj and previewContext
  const {hashStateProj, setHashStateProj} = useContext(HashContext)
  const {openUrl} = useContext(UserContext)
  const previewContext = dataProjects[lutProjectName[hashStateProj]]

  // local state
  const [previewData, setPreviewData] = useState(loadingPreviewData)
  const [firstOpen, setFirstOpen] = useState(true);

  // callbacks on close
  const closePreview = () => {setHashStateProj(undefined); setPreviewData(loadingPreviewData)}

  // lazy load previewData
  useEffect(()=>{
    if (previewContext){
      if (typeof previewContext.previewSrc === "string"){
        import('data/'+previewContext.previewSrc)
        .then(data=>setPreviewData(data.default))
        .catch(()=>setUserPrompt({error: "Server Error, unable to retrieve preview data"}))
      }else{
        setUserPrompt ({info: `The Preview for ${previewContext.title} is not currently available`})
        closePreview()
      }
    }
  }, [previewContext])

  // first time luncher
  function intro(){
    if (firstOpen){
      setUserPrompt({success: "You can checkout the source code by click the GitHub icon."})
      setFirstOpen(false)
    }
  };

  // dynamic action data
  const dialogActions = function(){
    var actions = []

    // safety check
    if (!Boolean(previewContext)) return actions;

    // report
    if (typeof previewContext.reportSrc == "string" && previewContext.reportSrc.length > 0){
      actions.push({
        startIcon: <PictureAsPdfIcon/>,
        children: "Report",
        href: require('data/'+previewContext.reportSrc)
      })
    }

    // github
    if (typeof previewContext.sourceCode == "string" && previewContext.sourceCode.length > 0){
      actions.push({
        startIcon: <GitHubIcon />,
        children: "Github",
        href: previewContext.sourceCode
      })
    }

    return actions
  }()

  console.log(previewData)
  return (
    <Dialog
      className={classes.main}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={Boolean(previewContext)}
      onEntered={intro}
      onClose={closePreview}
      TransitionComponent={Transition}
      scroll='paper'
    >

      <DialogContent dividers={true}>
        {previewData}
      </DialogContent>

      <DialogActions>
        {dialogActions.map((action, i)=>
          <Button
            color="primary" variant="outlined"
            onClick={(e)=>{e.preventDefault(); openUrl(e.currentTarget.href);}}
            key={i}
            {...action}
          />
        )}
      </DialogActions>

    </Dialog>
  )
}
