import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [modeText , setModeText] = useState('Light');
  
  const darkClick = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#232323';
      setModeText('Dark');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setModeText('Light');
    }
  };
  
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} changeMode={darkClick} modeText={modeText}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter The Text To Analyze" mode={mode}/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;