import React from 'react';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import PaletteIcon from '@material-ui/icons/Palette';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';

export default function category2icon(type){
    var notmatch = {
      icon: <></>,
    }

    var lut = {
      "academic": {
        icon: <SchoolIcon />
      },

      "placement": {
        icon: <WorkIcon />
      },

      "extracurricular": {
        icon: <PaletteIcon />
      },

      "management": {
        icon: <AccessibleForwardIcon />
      }
    }


    return {
      ...notmatch,            // default case
      ...lut[type.toLowerCase()]
    }   // overlay defined data

}