import React from "react";
import ooty from '../../assest/ooty.svg';
import mudumalai from '../../assest/mudumalai.svg';
import coonoor from '../../assest/coonoor.svg';
import pykara from '../../assest/pykara.svg';
import avalanche from '../../assest/avalanche.svg';
import ootyandcoonoor from '../../assest/ootyandcoonoor.svg';
import ootyandpykara from '../../assest/ootyandpykara.svg';
import ootyandavalanche from '../../assest/ootyandavalanche.svg';
import { useState } from 'react';

const Tour = () => {
  const [handleOnClick] = useState('');
  const handelOnClick = () => {
    window.location.href = '/booking';
  }
    return(

        <div className='grid grid-row gap-10 item-center mt-10 px-5'>
        <div class='tour' data-content id='tour'>

        <div class='tour-car'>
            <div class='tour-top'><h2>Ooty Sight Seeing</h2></div>
            <img src={ooty} alt='ooty' class='tour-image' />
            <div class='tour-bottom'>
              <h2>1 Day Tour</h2>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>


          <div class='tour-car'>
            <div class='tour-top'><h2>Mudhumalai Sight Seeing</h2></div>
            <img src={mudumalai} alt='mudumalai' class='tour-image' />
            <div class='tour-bottom'>
              <h2>1 Day Tour</h2>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

          <div class='tour-car'>
            <div class='tour-top'><h2>Coonoor Sight Seeing</h2></div>
            <img src={coonoor} alt='coonoor' class='tour-image' />
            <div class='tour-bottom'>
              <h2>1 Day Tour</h2>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

          <div class='tour-car'>
            <div class='tour-top'><h2>Pykara Sight Seeing</h2></div>
            <img src={pykara} alt='pykara' class='tour-image' />
            <div class='tour-bottom'>
              <h2>1 Day Tour</h2>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

          <div class='tour-car'>
            <div class='tour-top'><h2>Avalanche Sight Seeing</h2></div>
            <img src={avalanche} alt='avalanche' class='tour-image' />
            <div class='tour-bottom'>
              <h2>1 Day Tour</h2>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

          <div class='tour-car'>
            <div class='tour-top'><h2>Ooty & Coonoor</h2></div>
            <img src={ootyandcoonoor} alt='ooty and coonoor' class='tour-image' />
            <div class='tour-bottom'>
              <h2>2 Days Tour</h2>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

          <div class='tour-car'>
            <div class='tour-top'><h2>Ooty & Coonoor</h2></div>
            <img src={ootyandpykara} alt='ooty and pykara' class='tour-image' />
            <div class='tour-bottom'>
              <h2>2 Days Tour</h2>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

          <div class='tour-car'>
            <div class='tour-top'><h2>Ooty & Coonoor</h2></div>
            <img src={ootyandavalanche} alt='ooty and avalance' class='tour-image' />
            <div class='tour-bottom'>
              <h2>2 Days Tour</h2>
              <button class='book-now' onClick={handelOnClick}><h3>Book Now</h3></button>
            </div>
          </div>

        </div>
      </div>

    );
}


export default Tour;