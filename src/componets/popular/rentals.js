import React from "react";
import Etios from '../../assest/etios.svg';
import Dzire from '../../assest/dzire.svg';
import xylo from '../../assest/xylo.svg';
import Innova from '../../assest/Innova.svg';
import traveller from '../../assest/traveller.svg';
import Minibus from '../../assest/minibus.svg';
import { useState } from 'react';

const Rentals = () =>{
  const [handleOnClick] = useState('');
  const handelOnClick = () => {
    window.location.href = '/booking';
  }
    return (
        <div className='grid grid-row gap-10 item-center px-5 mt-5'>
        <div class='rentals' data-content id='rentals'>

          <div class='rental-car'>
            <div class='ren-top'><h2>Toyota Etios</h2></div>
            <img src={Etios} alt='Etios' class='image' />
            <div class='ren-bottom'>
              <h3>Starts at ₹1800</h3>
              <button onClick={handelOnClick} class='book-now'><h3>Book Now</h3></button>
            </div>
          </div>

          <div class='rental-car'>
            <div class='ren-top'><h2>Swift Dzire</h2></div>
            <img src={Dzire} alt='Dzire' class='image' />
            <div class='ren-bottom'>
              <h3>Starts at ₹1800</h3>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

          <div class='rental-car'>
            <div class='ren-top'><h2>Mahindra Xylo</h2></div>
            <img src={xylo} alt='Xylo' class='image xylo' />
            <div class='ren-bottom'>
              <h3>Starts at ₹2500</h3>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

          <div class='rental-car'>
            <div class='ren-top'><h2>Toyota Innova</h2></div>
            <img src={Innova} alt='Innova' class='image' />
            <div class='ren-bottom'>
              <h3>Starts at ₹3000</h3>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

          <div class='rental-car'>
            <div class='ren-top'><h2>Tempo Traveller</h2></div>
            <img src={traveller} alt='traveller' class='image' />
            <div class='ren-bottom'>
              <h3>Starts at ₹3700</h3>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

          <div class='rental-car'>
            <div class='ren-top'><h2>Mini Coach</h2></div>
            <img src={Minibus} alt='Minibus' class='image' />
            <div class='ren-bottom'>
              <h3>Starts at ₹4000</h3>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

        </div>
      </div>
    );
    }

    export default Rentals;