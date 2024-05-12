import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Styles from "../../css/Projects.module.css";
import WebSite from "./WebSite";
import Systems from "./Systems";
import Mobile from "./Mobile";
import Other from "./Other";

function Projects() {
  return (
  <div id="projects">
    <BrowserRouter>
      <ul className={Styles.LayoutRouter}>
        <li><Link to="/">WebSite</Link></li>
        <li><Link to="/systems">Systems</Link></li>
        <li><Link to="/mobile">Mobile App</Link></li>
        <li><Link to="/other">Other Projects</Link></li>
      </ul>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<WebSite />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
    </div> 
  );
}

export default Projects;