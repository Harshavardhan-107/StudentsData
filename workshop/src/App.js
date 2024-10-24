// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navsec from "./landingpage/Navsec";
import Baner from "./landingpage/Baner";
import Footer from "./landingpage/Footer";
import About from "./landingpage/About";
import Studentsdata from "./DynamicData/Studentsdata";
import Contact from "./landingpage/Contact";
import Addstudent from "./DynamicData/Addstudent";
import './App.css';

function App() {
  return (
    <Router>
      <Navsec />
      <Baner />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<Studentsdata />} />
          <Route path="/addstudent" element={<Addstudent />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
