import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));



// severity can be success, info, warning, error
export default function UserPromptBar({duration, userPrompt, setUserPrompt}) {

  const severity = Object.keys(userPrompt)[0] // there will be only one item in the list
  const message = userPrompt[severity]

  // [id, setId = ]

  if (typeof message != 'string' || message.length <= 0)
   return(<></>)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setUserPrompt({}); //unset all attribute
  };

  return (
      <Snackbar open={Boolean(message)} autoHideDuration={duration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
  );
}