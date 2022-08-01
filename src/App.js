import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
//import "./App.css";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/projects/:id" elements={<projectid/>} /> */}
      </Routes>
    </div>
  );
};

export default App;
