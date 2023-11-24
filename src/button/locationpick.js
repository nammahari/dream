// LocationDropdown.js
import React from 'react';

const LocationPickUp = () => {
  return (
    <div className='absolute left-0 ml-4 lg:ml-0'>
      {/* Dropdown button */}
      <select className='focus:outline-none focus:border-blue-500 bg-transparent lg:p-0 md:pr-[12rem]'>
        <option className='bg-white rounded-sm'value="" disabled selected>
          Select your city
        </option>
        <option value="Ooty">Ooty</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Metupalayam">Metupalayam</option>
        <option value="Coonoor">Coonoor</option>
        <option value='Pkkara'>Pkkara</option>
        <option value='Mudumalai'>Mudumalai</option>
        <option value='Avalanche'>Avalanche</option>
        {/* Add more location options as needed */}
      </select>
    </div>
  );
};

export default LocationPickUp;
