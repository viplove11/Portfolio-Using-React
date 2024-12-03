import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./index.css";
import "./App.css";

// component importings
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";



const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
