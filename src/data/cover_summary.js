import React from 'react';

import Markdown from 'markdown-to-jsx';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import PaletteIcon from '@material-ui/icons/Palette';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';

var academicContent=`
## DatePicker

The DatePicker works by supplying a date to bias towards,
as well as a default timezone.
`

export default[
    {
      label: "Academic",
      icon: <SchoolIcon />,
      content: <Markdown
        children={academicContent}
      />
    },

    {
      label: "Placement",
      icon: <WorkIcon />,
    },

    {
      label: "Extracurricular",
      icon: <PaletteIcon />
    },

    {
      label: "Management",
      icon: <AccessibleForwardIcon />
    }
]