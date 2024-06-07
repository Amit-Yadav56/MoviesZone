import React, { useRef } from 'react'
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import useStyles from './styles';
import { NavBar } from './index';

import useAlan from './Alan';



const App = () => {

  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlan();

  return (

    <div className={classes.root}>
      <CssBaseline />
      <NavBar />

      <div ref={alanBtnContainer} />
    </div>

  )
}

export default App
