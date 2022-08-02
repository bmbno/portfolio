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
    <div className="h-screen bg-neutral-900">
      <NavBar />
      <Routes>
        <Route exact path="/portfolio" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route
          path="/portfolio/*"
          element={<Navigate replace to="/portfolio" />}
        />
        {/* <Route path="/projects/:id" elements={<projectid/>} /> */}
      </Routes>
    </div>
  );
};

export default App;
