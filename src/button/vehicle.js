// LocationDropdown.js
import React from 'react';

const VehicleButton = () => {
  return (
    <div>
      {/* Dropdown button */}
      <select className='focus:outline-none focus:border-blue-500 bg-transparent'>
        <option className='bg-white rounded-sm'value="" disabled selected>
          Select Your Car
        </option>
       <option value='Etios'>Toyota Etios</option>
       <option value='Swift Dzire'>Swift Dzire</option>
       <option value='Xylo'>Mahindra Xylo</option>
       <option value='Innova'>Toyota Innova</option>
       <option value='Traveller'>Tempo Traveller</option>
       <option value='Coach'>mini coach</option>

        {/* Add more location options as needed */}
      </select>
    </div>
  );
};


export default VehicleButton;
