import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {UserContext} from 'contexts/UserContext'


const useStyles = makeStyles((theme) => ({
  main: props => ({
    height: props.height || '35px',
    width: props.width || '35px',

    "&:not(:hover)":{
      "& *":{
        fill: '#808080'
      },
    },

  })
}))

export default function AbstractIcon(props){
  const classes = useStyles(props)
  const {openUrl} = useContext(UserContext)

  const onClick = (e) => {e.preventDefault(); openUrl(e.currentTarget.href);}

  return(
    <a className={classes.main} href={props.href} title={props.title} onClick={onClick} >
        {props.svg}
    </a>
  )


}

AbstractIcon.propTypes = {
  // svg: PropTypes.elementType.isRequired,
  // svgHover: PropTypes.elementType,

}