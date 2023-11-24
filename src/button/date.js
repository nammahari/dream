// DateButton.js
import React from 'react';

const DateButton = () => {
  return (
    <div>
      {/* Date picker button */}
      <input
        type="date"
        className="focus:outline-none focus:border-blue-500 bg-transparent"
      />
    </div>
  );
};

export default DateButton;
