import React from 'react';
import Navbar from './components/Navbar'; // Use relative path
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./index.css";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;