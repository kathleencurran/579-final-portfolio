import "./App.css";
import Homepage from "./pages/Homepage";
import Huddle from "./pages/Huddle";
import Navbar from "./components/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "2rem",
    color: "black",
    marginBottom: "10rem",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <main>
      <div>
        <Navbar className={classes.root} />
        <Routes>
          <Route path="/about-me" element={<About />} />
          <Route
            path="/579-final-portfolio//#/projects"
            element={<Projects />}
          />
          <Route path="/projects/huddle" element={<Huddle />} />
          <Route path="/home" element={<Homepage />} />
          <Route exact path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;
