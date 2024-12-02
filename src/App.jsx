import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./index.css";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Services from "./components/Services/Services";

// component importings

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default App;
