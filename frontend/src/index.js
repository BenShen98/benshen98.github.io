import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import theme from 'theme';

import {HashContextProvider} from 'contexts/HashContext'
import {UserContextProvider} from 'contexts/UserContext'

import dataProjects from 'data/projects_data'

// own components
import CoverSection from 'sections/Cover';
import Portfolio from 'sections/Portfolio';
import UserPromptBar from 'components/UserPromptBar'
import PreviewDialog from 'components/PreviewDialog'
import ContactMe from 'components/ContactMe'



const projectPageMaxWidth='lg'
const lutProjectName = dataProjects.reduce((acc, o, i)=>{acc[o.id]=i; return acc}, {})

export default function App(){
  const [userPrompt, setUserPrompt] = useState({info:""}) // {severity: message}


  return(
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <HashContextProvider>
          {/* Cover Page */}
          <CoverSection
            setUserPrompt={setUserPrompt}
            dataProjects={dataProjects}
            lutProjectName={lutProjectName}
          />

          {/* Contact me dialog */}
          <ContactMe/>

          {/* Projects */}
          <Portfolio
            setUserPrompt={setUserPrompt}
            maxWidth={projectPageMaxWidth}
            dataProjects={dataProjects}
          />

          {/* Project preview popper */}
          <PreviewDialog
            setUserPrompt={setUserPrompt}
            fullWidth={true}
            maxWidth={projectPageMaxWidth}
            dataProjects={dataProjects}
            lutProjectName={lutProjectName}
          />

          {/* Bottom Banner */}
          <UserPromptBar
            duration={5000}
            userPrompt={userPrompt}
            setUserPrompt={setUserPrompt}
          />
        </HashContextProvider>

      </ThemeProvider>
    </UserContextProvider>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);
