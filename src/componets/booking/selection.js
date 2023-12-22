import React, { useState } from "react";
import Rentals from "./rentals";
import Tour from "./tour";

function Selection() {
  const [showRentals, setShowRentals] = useState(true);

  const handleCheckboxChange = () => {
    setShowRentals((prevShowRentals) => !prevShowRentals);
  };

  return (
    <div> 
      <div className="flex justify-center">
      <div className="flex-column">

<label className="flex-row items-center space-x-2 p-4 ">
  <input
    type="checkbox"
    checked={showRentals}
    onChange={handleCheckboxChange}
    className="appearance-none w-5 h-5 border border-gray-300 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none"
  />
  <span className="text-md md:text-lg sel-text">Rental</span>
</label>

<label className="flex-row items-center space-x-2 p-4">
  <input
    type="checkbox"
    checked={!showRentals}
    onChange={handleCheckboxChange}
    className="appearance-none w-5 h-5 border border-gray-300 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none"
  />
  <span className="text-md md:text-lg sel-text">Tour Package</span>
</label>

</div>
      </div>

      {showRentals ? <Rentals /> : <Tour />}
    </div>
  );
}

export default Selection;
