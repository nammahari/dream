import React from "react";
import { useState } from 'react';
const BookNow = () => {
    const [pickupLocation, setPickupLocation] = useState('');
  const [date, setDate] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [vehicle, setVehicle] = useState('');

  const handlePickupLocationChange = (e) => {
    const selectedPickupLocation = e.target.value;
    setPickupLocation(selectedPickupLocation);
  };

  const handleDropLocationChange = (e) => {
    const selectedDropLocation = e.target.value;
    setDropLocation(selectedDropLocation);
  };

  const handleVehicleChange = (e) => {
    const selectedVehicle = e.target.value;
    setVehicle(selectedVehicle);
  };
  
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  };


    const book = () => {
        // Construct the message with the booking details
        const message = `Booking Details: 
          Pickup Location: ${pickupLocation}
          Drop Location: ${dropLocation}
          Date: ${date}
          Vehicle: ${vehicle}`;
    
        const phone = '+919342563416'; // Replace with the actual phone number
        const encodedMessage = encodeURIComponent(message);
    
      
        // Construct the WhatsApp URL with the encoded message
        const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank', 'noreferrer');
      };
      const whatsappUrl = ``;
      // const [showDiv1, setShowDiv1] = useState(true);
      // const [showDiv2, setShowDiv2] = useState(false);
    return(
        <div>
                   <div className="hidden 2xl:flex lg:flex xl:flex justify-center w-full mb-[10rem]">
        <div className="flex justify-center w-[90vw] bg-[#FCC120] rounded-xl absolute mt-[-7rem] p-[5rem] md:p-[2rem] md:mt-[-3rem] lg:mt-[-3rem] lg:p-[4rem] lg:px-1 md:h-[17vh]">
          <div className='items-center'>
            <p className='absolute top-0 left-0 ml-10 mt-4 font-[Poppins] font-[#1A202C] font-weight-600 lg:text-sm 2xl:text-xl md:text-[10px]'><i class="fa-solid fa-car-on font-[#1A202C] px-2"></i>Pick Up</p>
            <p className='absolute top-0 Right-0 mr-[14rem] mt-4 font-[Poppins] font-[#1A202C] font-weight-600 lg:text-sm 2xl:text-xl md:text-[10px]'><i class="fa-solid fa-car font-[#1A202C] px-2"></i>Drop</p>
            <div className='grid grid-cols-2 gap-20 absolute left-0 ml-[3rem] lg:text-xs 2xl:text-xl 2xl:mt-2 md:text-[10px] md:gap-10 md:mb-1'>
              <div className='left-0 mt-[-1rem]'>
                <div className="font-bold font-['Poppins'] mt-1">Location</div>
                <div className='mt-2 ml-[-0.3rem]'><div className='absolute left-0 ml-4 lg:ml-0'>
      {/* Dropdown button */}
      <select className='focus:outline-none focus:border-blue-500 bg-transparent lg:p-0 md:pr-[12rem]' onChange={handlePickupLocationChange}
                value={pickupLocation}>
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
    </div></div>
              </div>
              <div className='left-0 mt-[-1rem] '>
                <div className="font-bold font-['Poppins'] mt-1">Date</div>
                <div className='mt-2 ml-[-0.3rem]'><div>
      {/* Date picker button */}
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="focus:outline-none focus:border-blue-500 bg-transparent"
      />
    </div></div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-20 absolute right-0 mr-[17.9rem] xl:mr-[21.5rem] xl:text:base xl:mr-[24rem] lg:text-xs lg:mr-[12.5rem] 2xl:mr-[26.8rem] 2xl:text-xl 2xl:mt-2 md:text-[10px] md:gap-10 md:mb-1 md:mr-[7.2rem]'>
              <div className='left-0 mt-[-1rem]'>
                <div className="font-bold font-['Poppins'] mt-1">Location</div>
                <div className='mt-2 ml-[-0.3rem]'><div>
      {/* Dropdown button */}
      <select className='focus:outline-none focus:border-blue-500 bg-transparent' value={dropLocation} onChange={handleDropLocationChange}>
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
    </div></div>
              </div>
              <div className='left-0 mt-[-1rem] '>
                <div className="font-bold font-['Poppins'] mt-1">Vehicle</div>
                <div className='mt-2 ml-[-0.3rem]'> <div>
      {/* Dropdown button */}
      <select className='focus:outline-none focus:border-blue-500 bg-transparent' value={vehicle} onChange={handleVehicleChange}>
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
    </div></div>
              </div>
            </div>
            <div className="absolute right-0 mr-20 xl:mr-[5rem] lg:mr-[1rem] 2xl:mt-[5rem] 2xl:top-0">
              <a className="px-10 bg-white py-4 rounded-md cursor-pointer font-['Poppins'] font-weight-600 font-[16px] font-bold tracking-tight" onClick={book}>Book</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex 2xl:hidden lg:hidden xl:hidden justify-center w-full mb-[10rem]">
        <div className="flex justify-center w-[90vw] h-[85vh] md:w-[50vw] h-[55vh] bg-[#FCC120] rounded-xl absolute mt-[-8rem] p-5">
          <div className='items-center'>
            <p className='absolute left-0 font-[Poppins] font-[#1A202C] ml-5 font-bold md:text-sm font-[24px]'>Pick-Up</p>
            <div className='grid grid-row-2 gap-10 '>

              <div>
                <div className='mt-10 ml-[-0.3rem]'> <div className='absolute left-0 ml-4 lg:ml-0'>
      {/* Dropdown button */}
      <select className='focus:outline-none focus:border-blue-500 bg-transparent lg:p-0 md:pr-[12rem]' value={pickupLocation} onChange={handlePickupLocationChange}>
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
    </div></div>
              </div>

              <div className='absolute left-5 mt-[5rem] space-between'>
                <div className="font-bold font-['Poppins'] mt-1">Date</div>
                <div className='mt-4'><div>
      {/* Date picker button */}
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="focus:outline-none focus:border-blue-500 bg-transparent"
      />
    </div></div>
              </div>

              <div>
                <p className='absolute left-0 font-[Poppins] font-[#1A202C] ml-5 mt-[7rem] font-bold md:text-sm'>Drop</p>
                <div className='mt-[9rem] ml-[-5.5rem] md:ml-[-7.5rem]'><div className='absolute left-0 ml-4 lg:ml-0'>
      {/* Dropdown button */}
      <select className='focus:outline-none focus:border-blue-500 bg-transparent lg:p-0 md:pr-[12rem]' value={dropLocation} onChange={handleDropLocationChange}>
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
    </div></div>
              </div>

              <div className='absolute left-5 mt-[17rem] '>
                <div className="font-bold font-['Poppins'] mt-1">Vehicle</div>
                <div className='mt-2'> <div>
      {/* Dropdown button */}
      <select className='focus:outline-none focus:border-blue-500 bg-transparent' value={vehicle} onChange={handleVehicleChange}>
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
    </div></div>
              </div>

              <div className=' relative w-full bg-amber-400 rounded-bl-[20px] rounded-br-[20px] mt-[6rem]'>
                <a className="bg-white text-black pb-2 pt-2 pl-4 pr-4 rounded-md cursor-pointer font-['Poppins']  font-[20px] font-medium tracking-tight" onClick={book}>Book Now</a>
              </div>
            </div>

          </div>
        </div>
      </div>
        </div>
    );}

    export default BookNow;