import React from 'react';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Tutorial from './components/pages/Tutorial';
import Aboutus from './components/pages/Aboutus';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Header from './components/Header';
import Banner from './components/Banner';
import Languages from './components/Languages';
import Copyright from './components/Copyright';





const App = () => {
    return (
        <div className='App'>  
          
          <Router>
          <Header/>
        <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/tutorial" element={<Tutorial/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/contact" element={<Contact/>} />
        
       
        </Routes>
    </Router>
         <Banner/>
         <Languages/>
         <Copyright/>
      </div>
        
    );
};

export default App; 





