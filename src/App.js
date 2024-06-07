import "./App.css";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import useStyles from "./components/styles";
import { NavBar } from "./components";


function App() {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar}>

        </div>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
}


export default App;
