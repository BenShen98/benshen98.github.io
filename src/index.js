import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import theme from './theme';

// own components
import CoverSection from './sections/Cover';
import Portfolio from './sections/Portfolio';
import UserPromptBar from './components/UserPromptBar'



export default function App(){
  const [userPrompt, setUserPrompt] = useState({info:""}) // {severity: message}

  return(
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />

      {/* Cover Page */}
      <CoverSection setUserPrompt={setUserPrompt} />

      {/* Projects */}
      <Portfolio setUserPrompt={setUserPrompt} />

      {/* Banner */}
      <UserPromptBar
        duration={5000}
        userPrompt={userPrompt}
        setUserPrompt={setUserPrompt}
      />



    </ThemeProvider>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);
