import React from 'react'
import Selection from './selection.js';
import Footer from '../footer/footer.js';

const booking = () => {
  return (
    <div>
        <div id='booking-main' className='flex-column'>
          <h1 className=''>Bookings</h1>
          <div className='lg:flex'>
              <div className='p-10'><Selection /></div>
          </div>

          <div className="mt-[5rem]"><Footer /></div>
        </div> 
    </div>
  )
}

export default booking
