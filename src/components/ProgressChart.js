import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Popper, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "& > span": {
      display: "flex",
      height: theme.spacing(1),
      backgroundColor: "#e1e4e8",
      borderRadius: "8px",
      overflow: "hidden"
    },
  },

  popup: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper
  }


}));

export default function ProgressChart(props){

  // get variables
  const data=props.data
  const unit=props.unit || "bytes"
  const classes = useStyles();

  // progress calculation
  const acc = data.reduce((acc, d) => acc+d.value , 0)

  // key display
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  const open = Boolean(anchorEl)

  return (
    <div>
      {/* progress chart */}
      <div className={classes.root} >
        <span>{
          data.map( (d, i) => (
            <span
              style={{width: `${(d.value/acc*100).toFixed(1)}%`, backgroundColor: d.color }}
              onMouseOver={(e) => {setAnchorEl(e.currentTarget); setIndex(i)}}
              onMouseOut={(e) => setAnchorEl(null)}
              key={i}
            ></span>
          ))

        }</span>
      </div>

      {/* keys */}
      <Popper  open={open} anchorEl={anchorEl}>
        <div className={classes.popup}>
          {data[index]["name"]}: {data[index]["value"]} {unit}
        </div>
      </Popper>


    </div>
  )
}