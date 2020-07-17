import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  main: props => ({
    height: props.height || '50px',
    backgroundImage: `url(${props.svg})`,
    "&:hover":{
      backgroundImage: `url(${props.svgHover || props.svg})`
    }
  })
}))

export default function abstractIcon(props){
  const classes = useStyles(props)
  return(
    <span class={classes.main}/>
  )


}

abstractIcon.PropTypes = {
  svg: PropTypes.string.isRequired,
  svgHover: PropTypes.string,
}