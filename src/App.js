import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
//import "./App.css";
import Home from "./routes/Home";
import Work from "./routes/Work";
import Projects from "./routes/Projects";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/portfolio" element={<Home />} />
        <Route path="/portfolio/work" element={<Work />} />
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
