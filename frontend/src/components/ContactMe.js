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
  const {hashStatePath, setHashStatePath} = useContext(HashContext)
  const {openUrl} = useContext(UserContext)

  // formData && its call back function
  const [formData, setFormData] = useState({sendCV: true})
  const updateFormData = (name, value) => setFormData({...formData, [name]: value})
  const updateCheckBox = (e) => setFormData({...formData, [e.target.name]: e.target.checked})
  const updateInput = (e) => setFormData({...formData, [e.target.name]: e.target.value})
  const onFormSubmit = (e) => {
    e.preventDefault()

    // compose form payload
    const payload = JSON.stringify({
      formData
    })

    // send data to backend
    var xhr = new XMLHttpRequest()
    xhr.open("POST", process.env.REACT_APP_CONTACT_ME_FORM_URL, true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(payload)

    // TODO: different action based on server response
    onExit();
    openUrl(require('data/ben_shen_cv.pdf'));

  }

  const open = ['/cv', '/ad'].indexOf(hashStatePath) > -1

  const onExit = () => setHashStatePath(undefined)

  return(
    <Dialog
      open={open}
      onClose={onExit}
    >
      <DialogTitle id="max-width-dialog-title">Learn More about Me</DialogTitle>

      <form className={classes.form} action='/' method='POST' onSubmit={onFormSubmit}>
        <DialogContent>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  name="sendCV"
                  checked={Boolean(formData.sendCV)}
                  onChange={updateCheckBox}
                />
              }

              label="Send me a copy of CV"

            />

          </FormGroup>


          { Boolean(formData.sendCV) &&
            <>
              <TextField
                name="sendCVEmail"
                value={formData.sendCVEmail || ''}
                onChange={updateInput}

                className={classes.email}
                autoFocus
                margin="dense"
                required={true}
                label="Email Address"
                type="email"
                />
              <TextField
                name="sendCVName"
                value={formData.sendCVName || ''}
                onChange={updateInput}

                className={classes.name}
                margin="dense"
                required={true}
                label="Name"
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
            </>
          }
        </DialogContent>

        <DialogActions>
          <Button
            color="primary"
            type="submit"
          >
            View CV
          </Button>
        </DialogActions>
      </form>

    </Dialog>
  )
}