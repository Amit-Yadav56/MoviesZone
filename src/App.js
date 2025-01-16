import "./App.css";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  Movies,
  NavBar,
  Profile,
  Actors,
  Errorpage,
  MovieInfo
} from "./components/index";
import useStyles from "./components/styles";
// import useAlan from "./components/Alan";
import { useRef } from "react";

function App() {
  const classes = useStyles();  
  const alanBtnContainer = useRef();
  // useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Routes>``
            <Route path="/" element={<Movies />} />
            <Route path="/approved" element={<Movies />} />
            <Route path="/profile/:id" element={<Profile />} />

            <Route exact path='/movie/:id' element={<MovieInfo />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
      </main>
      {/* <div ref={alanBtnContainer} /> */}
    </div>
  );
}

export default App;
