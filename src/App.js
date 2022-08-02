import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
//import "./App.css";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate replace to="/portfolio" />} />
        {/* <Route path="/projects/:id" elements={<projectid/>} /> */}
      </Routes>
    </div>
  );
};

export default App;
