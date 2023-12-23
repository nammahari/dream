import React from 'react'
import Selection from './selection.js';

const booking = () => {
  return (
    <div>
        <div className='flex flex-col justify-center'>
          <div className='flex justify-center'><h1 className='p-10 font-display font-bold text-2xl lg:text-2xl xl:text-2xl'>Bookings</h1></div>
          <div>
              <div><Selection /></div>
          </div>
        </div> 
    </div>
  )
}

export default booking
