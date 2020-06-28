import React from 'react';

import Markdown from 'markdown-to-jsx';

var academicContent=`
## DatePicker

The DatePicker works by supplying a date to bias towards,
as well as a default timezone.
`

export default[
    {
      category: "Academic",
      // icon: <SchoolIcon />,
      content: <Markdown
        children={academicContent}
      />
    },

    {
      category: "Placement",
    },

    {
      category: "Extracurricular",
    },

    {
      category: "Management",
    }
]