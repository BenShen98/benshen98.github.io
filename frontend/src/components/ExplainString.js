import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {HashContext} from 'contexts/HashContext'
import {UserContext} from 'contexts/UserContext'

const useStyles = makeStyles((theme) => ({
  root: {},
  explainable: {
    // color: "#556cd6",
    borderBottom: "1px dashed",
    textDecoration:"none",
    cursor: "pointer",
    "& sup": {
      fontSize: "0.875rem",
      marginRight: "4px",
      lineHeight: "0"
    }
  },
  urlable: {

  },
  projable: {

  }
}))

export default function ExplainString({children,sameWindow,proj, ...prop}) {
  const classes = useStyles()
  const {setHashStateProj} = useContext(HashContext)

  const {openUrl} = useContext(UserContext)

  const {href, title} = prop
  const _children = children || title

  function handelClick (e){
    e.preventDefault();

    if (typeof proj == 'string'){
      setHashStateProj(proj)
    }

    if(typeof href === 'string'){
      openUrl(href)
    }

  };

  return (
    <a
      className={clsx({
        [classes.explainable]: (Boolean(href) || Boolean(title) || Boolean(proj)),
        [classes.urlable]: Boolean(href),
        [classes.projable]: Boolean(proj)
        })}
      onClick={handelClick}
      {...prop}
    >
    {_children}
    {/* <sup>!</sup> */}
    </a>
  )
}
