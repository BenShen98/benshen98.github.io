import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {HashContext} from 'contexts/HashContext'
import { UserContext } from 'contexts/UserContext';

import { Dialog, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  form: {


    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  email: {
    width: '30ch',
  },

  name: {
    width: '20ch',
  },

  textarea:{
    maxWidth: '60ch',
  }

}));


export default function ContactMe(props){
  const classes = useStyles()
  const {hashStatePath, setHashStatePath, requestFactory} = useContext(HashContext)

  // formData && its call back function
  const [formData, setFormData] = useState({})
  const updateFormData = (name, value) => setFormData({...formData, [name]: value})
  const updateCheckBox = (e) => setFormData({...formData, [e.target.name]: e.target.checked})
  const updateInput = (e) => setFormData({...formData, [e.target.name]: e.target.value})
  const onFormSubmit = (e) => {
    e.preventDefault()

    // send data to backend
    requestFactory('contact', formData);
    onExit();

  }

  const open = ['/cv', '/ad'].indexOf(hashStatePath) > -1

  const onExit = () => setHashStatePath(undefined)

  return(
    <Dialog
      open={open}
      onClose={onExit}
    >
      <DialogTitle id="max-width-dialog-title">Get In Touch</DialogTitle>

      <form className={classes.form} action='/' method='POST' onSubmit={onFormSubmit}>
        <DialogContent style={{paddingTop: 0}}>

              <TextField
                name="sendCVEmail"
                value={formData.sendCVEmail || ''}
                onChange={updateInput}

                className={classes.email}
                autoFocus
                margin="dense"
                required={true}
                label="Your Email Address"
                type="email"
                />
              <TextField
                name="sendCVName"
                value={formData.sendCVName || ''}
                onChange={updateInput}

                className={classes.name}
                margin="dense"
                required={true}
                label="Your Name"
                type="string"
              />
              <TextField
                name="message"
                value={formData.message || ''}
                onChange={updateInput}

                fullWidth={true}

                className={classes.textarea}
                margin="dense"
                name="message"
                label="Message (optional)"
                multiline={true}
                />
        </DialogContent>

        <DialogActions>
          <Button
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </DialogActions>
      </form>

    </Dialog>
  )
}