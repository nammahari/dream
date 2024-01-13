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
      <div>
        <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<HeroBook />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
      <button onClick={() => window.open('tel:+917867995980')} title="Contact Sale"
        class="fixed z-50 bottom-10 right-8 bg-black w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:drop-shadow-2xl hover:animate-bounce duration-300"><svg xmlns="http://www.w3.org/2000/svg" width='16' height="16" viewBox="0 0 512 512"><path fill="#FCC120" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></button>
      </div>
  );
}

export default App;