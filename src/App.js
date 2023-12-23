import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './componets/navbar/navbar.js';
import About from './componets/about/about.js';
import Home from './componets/home/home.js';
import Load from './componets/load.js';
import { useState,useEffect } from 'react';
import Booking from "./componets/booking/booking.js";
import HeroBook from "./componets/booking/booknow.js"
import Footer from "./componets/footer/footer.js";
function App(){
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const dataFetch = () => {
        setTimeout(() => {
          setIsLoading(false); // Update isLoading state to false after 8 seconds
        }, 3000);
      };
    
      dataFetch(); // Call the dataFetch function to start the loading process
    }, []);
    
  return(
    isLoading ? <Load /> :
    <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<HeroBook />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </Router>
      
  );
}

export default App;