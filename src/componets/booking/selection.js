import React, { useState, useEffect} from "react";
import ImageGallery from "./imagegal.js";

function Selection() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [date, setDate] = useState('');
  const [tourdate, settourDate] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [tourLocation, settourLocation] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [showDivision1, setShowDivision1] = useState(true); // Set to true for default visibility
  const [showDivision2, setShowDivision2] = useState(false);
  const [estimatedAmount, setEstimatedAmount] = useState("");

  const handlePickupLocationChange = (e) => {
    const selectedPickupLocation = e.target.value;
    setPickupLocation(selectedPickupLocation);
  };

  const handleDropLocationChange = (e) => {
    const selectedDropLocation = e.target.value;
    setDropLocation(selectedDropLocation);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  };

  const handleVehicleChange = (e) => {
    const selectedVehicle = e.target.value;
    setVehicle(selectedVehicle);
  };

  const tourhandleDateChange = (e) => {
    const selectedtourDate = e.target.value;
    settourDate(selectedtourDate);
  };

  const tourhandleLocationChange = (e) => {
    const selectedtourLocation = e.target.value;
    settourLocation(selectedtourLocation);
  };

  const bookNow = () => {
    // Construct the message with the booking details
    const message = `Booking Details: 
      Pickup Location: ${pickupLocation}
      Drop Location: ${dropLocation}
      Vehicle: ${vehicle}
      Date: ${date}
      Estimated Amount: ₹${estimatedAmount}`;

    const phone = '+919342563416'; // Replace with the actual phone number
    const encodedMessage = encodeURIComponent(message);


    // Construct the WhatsApp URL with the encoded message
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noreferrer');
  };

  const tourbookNow = () => {
    // Construct the message with the booking details

    // Package: ${tourpackage}

    const message = `Booking Details: 
      Pickup Location: ${tourLocation}
      Vehicle: ${seatingVehicle}
      Date: ${tourdate}`;

    const phone = '+919342563416'; // Replace with the actual phone number
    const encodedMessage = encodeURIComponent(message);


    // Construct the WhatsApp URL with the encoded message
    const tourwhatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(tourwhatsappUrl, '_blank', 'noreferrer');
  };


  useEffect(() => {
    const calculateEstimatedAmount = () => {

      const pickupValue = pickupLocation;
      const dropValue = dropLocation;
      const vehicleValue = vehicle;
  
      let amount = 'Not Available';
      // Calculations for Metupalayam to Ooty
  
      if (pickupValue === "Metupalayam" && dropValue === "Ooty" && vehicleValue === "Etios") {
        amount = 2200;
      } else if (pickupValue === "Metupalayam" && dropValue === "Ooty" && vehicleValue === "Dzire") {
        amount = 2000;
      } else if (pickupValue === "Metupalayam" && dropValue === "Ooty" && vehicleValue === "Xylo") {
        amount = 2500;
      } else if (pickupValue === "Metupalayam" && dropValue === "Ooty" && vehicleValue === "Innova") {
        amount = 3000;
      } else if (pickupValue === "Metupalayam" && dropValue === "Ooty" && vehicleValue === "Traveller") {
        amount = 5000;
      } else if (pickupValue === "Metupalayam" && dropValue === "Ooty" && vehicleValue === "Coach") {
        amount = 5500;
      }
  
      else if (dropValue === "Metupalayam" && pickupValue === "Ooty" && vehicleValue === "Etios") {
        amount = 2200;
      } else if (dropValue === "Metupalayam" && pickupValue === "Ooty" && vehicleValue === "Dzire") {
        amount = 2000;
      } else if (dropValue === "Metupalayam" && pickupValue === "Ooty" && vehicleValue === "Xylo") {
        amount = 2500;
      } else if (dropValue === "Metupalayam" && pickupValue === "Ooty" && vehicleValue === "Innova") {
        amount = 3000;
      } else if (dropValue === "Metupalayam" && pickupValue === "Ooty" && vehicleValue === "Traveller") {
        amount = 5000;
      } else if (dropValue === "Metupalayam" && pickupValue === "Ooty" && vehicleValue === "Coach") {
        amount = 5500;
      }
  
      // Calculations for Coimbatore to Ooty
  
      else if (pickupValue === "Coimbatore" && dropValue === "Ooty" && vehicleValue === "Etios") {
        amount = 3000;
      } else if (pickupValue === "Coimbatore" && dropValue === "Ooty" && vehicleValue === "Dzire") {
        amount = 2800;
      } else if (pickupValue === "Coimbatore" && dropValue === "Ooty" && vehicleValue === "Xylo") {
        amount = 4000;
      } else if (pickupValue === "Coimbatore" && dropValue === "Ooty" && vehicleValue === "Innova") {
        amount = 4500;
      } else if (pickupValue === "Coimbatore" && dropValue === "Ooty" && vehicleValue === "Traveller") {
        amount = 6000;
      } else if (pickupValue === "Coimbatore" && dropValue === "Ooty" && vehicleValue === "Coach") {
        amount = 6800;
      }
  
      else if (dropValue === "Coimbatore" && pickupValue === "Ooty" && vehicleValue === "Etios") {
        amount = 3000;
      } else if (dropValue === "Coimbatore" && pickupValue === "Ooty" && vehicleValue === "Dzire") {
        amount = 2800;
      } else if (dropValue === "Coimbatore" && pickupValue === "Ooty" && vehicleValue === "Xylo") {
        amount = 4000;
      } else if (dropValue === "Coimbatore" && pickupValue === "Ooty" && vehicleValue === "Innova") {
        amount = 4500;
      } else if (dropValue === "Coimbatore" && pickupValue === "Ooty" && vehicleValue === "Traveller") {
        amount = 6000;
      } else if (dropValue === "Coimbatore" && pickupValue === "Ooty" && vehicleValue === "Coach") {
        amount = 6800;
      }
  
  
      // Calculations for Mysore to Ooty
  
      else if (pickupValue === "Mysore" && dropValue === "Ooty" && vehicleValue === "Etios") {
        amount = 4500;
      } else if (pickupValue === "Mysore" && dropValue === "Ooty" && vehicleValue === "Dzire") {
        amount = 4500;
      } else if (pickupValue === "Mysore" && dropValue === "Ooty" && vehicleValue === "Xylo") {
        amount = 6500;
      } else if (pickupValue === "Mysore" && dropValue === "Ooty" && vehicleValue === "Innova") {
        amount = 7000;
      } else if (pickupValue === "Mysore" && dropValue === "Ooty" && vehicleValue === "Traveller") {
        amount = 14500;
      } else if (pickupValue === "Mysore" && dropValue === "Ooty" && vehicleValue === "Coach") {
        amount = 17000;
      }
  
      else if (dropValue === "Mysore" && pickupValue === "Ooty" && vehicleValue === "Etios") {
        amount = 4500;
      } else if (dropValue === "Mysore" && pickupValue === "Ooty" && vehicleValue === "Dzire") {
        amount = 4500;
      } else if (dropValue === "Mysore" && pickupValue === "Ooty" && vehicleValue === "Xylo") {
        amount = 6500;
      } else if (dropValue === "Mysore" && pickupValue === "Ooty" && vehicleValue === "Innova") {
        amount = 7000;
      } else if (dropValue === "Mysore" && pickupValue === "Ooty" && vehicleValue === "Traveller") {
        amount = 14500;
      } else if (dropValue === "Mysore" && pickupValue === "Ooty" && vehicleValue === "Coach") {
        amount = 17000;
      }
  
      // Calculations for Bangalore to Ooty
  
      else if (pickupValue === "Bangalore" && dropValue === "Ooty" && vehicleValue === "Etios") {
        amount = 8500;
      } else if (pickupValue === "Bangalore" && dropValue === "Ooty" && vehicleValue === "Dzire") {
        amount = 8000;
      } else if (pickupValue === "Bangalore" && dropValue === "Ooty" && vehicleValue === "Xylo") {
        amount = 11000;
      } else if (pickupValue === "Bangalore" && dropValue === "Ooty" && vehicleValue === "Innova") {
        amount = 12000;
      } else if (pickupValue === "Bangalore" && dropValue === "Ooty" && vehicleValue === "Traveller") {
        amount = 22500;
      } else if (pickupValue === "Bangalore" && dropValue === "Ooty" && vehicleValue === "Coach") {
        amount = 25000;
      }
      else if (dropValue === "Bangalore" && pickupValue === "Ooty" && vehicleValue === "Etios") {
        amount = 8500;
      } else if (dropValue === "Bangalore" && pickupValue === "Ooty" && vehicleValue === "Dzire") {
        amount = 8000;
      } else if (dropValue === "Bangalore" && pickupValue === "Ooty" && vehicleValue === "Xylo") {
        amount = 11000;
      } else if (dropValue === "Bangalore" && pickupValue === "Ooty" && vehicleValue === "Innova") {
        amount = 12000;
      } else if (dropValue === "Bangalore" && pickupValue === "Ooty" && vehicleValue === "Traveller") {
        amount = 22500;
      } else if (dropValue === "Bangalore" && pickupValue === "Ooty" && vehicleValue === "Coach") {
        amount = 25000;
      }
  
      // Calculations for Ooty to Coorg
  
      else if (pickupValue === "Ooty" && dropValue === "Coorg" && vehicleValue === "Etios") {
        amount = 8500;
      } else if (pickupValue === "Ooty" && dropValue === "Coorg" && vehicleValue === "Dzire") {
        amount = 8500;
      } else if (pickupValue === "Ooty" && dropValue === "Coorg" && vehicleValue === "Xylo") {
        amount = 10000;
      } else if (pickupValue === "Ooty" && dropValue === "Coorg" && vehicleValue === "Innova") {
        amount = 12000;
      } else if (pickupValue === "Ooty" && dropValue === "Coorg" && vehicleValue === "Traveller") {
        amount = 21000;
      } else if (pickupValue === "Ooty" && dropValue === "Coorg" && vehicleValue === "Coach") {
        amount = 24000;
      }
      else if (dropValue === "Ooty" && pickupValue === "Coorg" && vehicleValue === "Etios") {
        amount = 8500;
      } else if (dropValue === "Ooty" && pickupValue === "Coorg" && vehicleValue === "Dzire") {
        amount = 8500;
      } else if (dropValue === "Ooty" && pickupValue === "Coorg" && vehicleValue === "Xylo") {
        amount = 10000;
      } else if (dropValue === "Ooty" && pickupValue === "Coorg" && vehicleValue === "Innova") {
        amount = 12000;
      } else if (dropValue === "Ooty" && pickupValue === "Coorg" && vehicleValue === "Traveller") {
        amount = 21000;
      } else if (dropValue === "Ooty" && pickupValue === "Coorg" && vehicleValue === "Coach") {
        amount = 24000;
      }
  
      // Calculations for Ooty to Wayanad
  
      else if (pickupValue === "Ooty" && dropValue === "Wayanad" && vehicleValue === "Etios") {
        amount = 5000;
      } else if (pickupValue === "Ooty" && dropValue === "Wayanad" && vehicleValue === "Dzire") {
        amount = 4500;
      } else if (pickupValue === "Ooty" && dropValue === "Wayanad" && vehicleValue === "Xylo") {
        amount = 5500;
      } else if (pickupValue === "Ooty" && dropValue === "Wayanad" && vehicleValue === "Innova") {
        amount = 6500;
      } else if (pickupValue === "Ooty" && dropValue === "Wayanad" && vehicleValue === "Traveller") {
        amount = 22000;
      } else if (pickupValue === "Ooty" && dropValue === "Wayanad" && vehicleValue === "Coach") {
        amount = 23000;
      }
      else if (dropValue === "Ooty" && pickupValue === "Wayanad" && vehicleValue === "Etios") {
        amount = 5000;
      } else if (dropValue === "Ooty" && pickupValue === "Wayanad" && vehicleValue === "Dzire") {
        amount = 4500;
      } else if (dropValue === "Ooty" && pickupValue === "Wayanad" && vehicleValue === "Xylo") {
        amount = 5500;
      } else if (dropValue === "Ooty" && pickupValue === "Wayanad" && vehicleValue === "Innova") {
        amount = 6500;
      } else if (dropValue === "Ooty" && pickupValue === "Wayanad" && vehicleValue === "Traveller") {
        amount = 22000;
      } else if (dropValue === "Ooty" && pickupValue === "Wayanad" && vehicleValue === "Coach") {
        amount = 23000;
      }
  
  
      // Calculations for Ooty to Calicut
  
      else if (pickupValue === "Ooty" && dropValue === "Calicut" && vehicleValue === "Etios") {
        amount = 6500;
      } else if (pickupValue === "Ooty" && dropValue === "Calicut" && vehicleValue === "Dzire") {
        amount = 6000;
      } else if (pickupValue === "Ooty" && dropValue === "Calicut" && vehicleValue === "Xylo") {
        amount = 8000;
      } else if (pickupValue === "Ooty" && dropValue === "Calicut" && vehicleValue === "Innova") {
        amount = 9000;
      } else if (pickupValue === "Ooty" && dropValue === "Calicut" && vehicleValue === "Traveller") {
        amount = 22000;
      } else if (pickupValue === "Ooty" && dropValue === "Calicut" && vehicleValue === "Coach") {
        amount = 23000;
      }
      else if (dropValue === "Ooty" && pickupValue === "Calicut" && vehicleValue === "Etios") {
        amount = 6500;
      } else if (dropValue === "Ooty" && pickupValue === "Calicut" && vehicleValue === "Dzire") {
        amount = 6000;
      } else if (dropValue === "Ooty" && pickupValue === "Calicut" && vehicleValue === "Xylo") {
        amount = 8000;
      } else if (dropValue === "Ooty" && pickupValue === "Calicut" && vehicleValue === "Innova") {
        amount = 9000;
      } else if (dropValue === "Ooty" && pickupValue === "Calicut" && vehicleValue === "Traveller") {
        amount = 22000;
      } else if (dropValue === "Ooty" && pickupValue === "Calicut" && vehicleValue === "Coach") {
        amount = 23000;
      }
  
      // Calculations for Ooty to Cochin
  
      else if (pickupValue === "Ooty" && dropValue === "Cochin" && vehicleValue === "Etios") {
        amount = 9000;
      } else if (pickupValue === "Ooty" && dropValue === "Cochin" && vehicleValue === "Dzire") {
        amount = 9000;
      } else if (pickupValue === "Ooty" && dropValue === "Cochin" && vehicleValue === "Xylo") {
        amount = 10000;
      } else if (pickupValue === "Ooty" && dropValue === "Cochin" && vehicleValue === "Innova") {
        amount = 12000;
      } else if (pickupValue === "Ooty" && dropValue === "Cochin" && vehicleValue === "Traveller") {
        amount = 21000;
      } else if (pickupValue === "Ooty" && dropValue === "Cochin" && vehicleValue === "Coach") {
        amount = 23000;
      }
  
      else if (dropValue === "Ooty" && pickupValue === "Cochin" && vehicleValue === "Etios") {
        amount = 9000;
      } else if (dropValue === "Ooty" && pickupValue === "Cochin" && vehicleValue === "Dzire") {
        amount = 9000;
      } else if (dropValue === "Ooty" && pickupValue === "Cochin" && vehicleValue === "Xylo") {
        amount = 10000;
      } else if (dropValue === "Ooty" && pickupValue === "Cochin" && vehicleValue === "Innova") {
        amount = 12000;
      } else if (dropValue === "Ooty" && pickupValue === "Cochin" && vehicleValue === "Traveller") {
        amount = 21000;
      } else if (dropValue === "Ooty" && pickupValue === "Cochin" && vehicleValue === "Coach") {
        amount = 23000;
      }
  
      setEstimatedAmount(amount);
    };
    calculateEstimatedAmount();
}, [pickupLocation, dropLocation, vehicle]);

  // const calculateTourestimatedamount = () => {

  //   const tourValue = tourLocation;
  //   const tourvehicleValue = tourvehicle;

  //   let amount = 0;

  //   if (tourValue === "Ooty" && tourvehicleValue === "Etios") {
  //     amount = 2000;
  //   }
  //   else if (tourValue === "Ooty" && tourvehicleValue === "Dzire") {
  //     amount = 1800;
  //   }
  //   else if (tourValue === "Ooty" && tourvehicleValue === "Xylo") {
  //     amount = 2500;
  //   }
  //   else if (tourValue === "Ooty" && tourvehicleValue === "Innova") {
  //     amount = 3000;
  //   }
  //   else if (tourValue === "Ooty" && tourvehicleValue === "Traveller") {
  //     amount = 3500;
  //   }
  //   else if (tourValue === "Ooty" && tourvehicleValue === "Coach") {
  //     amount = 4000;
  //   }

  //   else if (tourValue === "Mudhumalai" && tourvehicleValue === "Etios") {
  //     amount = 2500;
  //   }
  //   else if (tourValue === "Mudhumalai" && tourvehicleValue === "Dzire") {
  //     amount = 2500;
  //   }
  //   else if (tourValue === "Mudhumalai" && tourvehicleValue === "Xylo") {
  //     amount = 3000;
  //   }
  //   else if (tourValue === "Mudhumalai" && tourvehicleValue === "Innova") {
  //     amount = 3500;
  //   }
  //   else if (tourValue === "Mudhumalai" && tourvehicleValue === "Traveller") {
  //     amount = 4500;
  //   }
  //   else if (tourValue === "Mudhumalai" && tourvehicleValue === "Coach") {
  //     amount = 5000;
  //   }

  //   else if (tourValue === "Coonoor" && tourvehicleValue === "Etios") {
  //     amount = 2200;
  //   }
  //   else if (tourValue === "Coonoor" && tourvehicleValue === "Dzire") {
  //     amount = 2000;
  //   }
  //   else if (tourValue === "Coonoor" && tourvehicleValue === "Xylo") {
  //     amount = 2800;
  //   }
  //   else if (tourValue === "Coonoor" && tourvehicleValue === "Innova") {
  //     amount = 3300;
  //   }
  //   else if (tourValue === "Coonoor" && tourvehicleValue === "Traveller") {
  //     amount = 4000;
  //   }
  //   else if (tourValue === "Coonoor" && tourvehicleValue === "Coach") {
  //     amount = 4500;
  //   }

  //   else if (tourValue === "Pykara" && tourvehicleValue === "Etios") {
  //     amount = 1800;
  //   }
  //   else if (tourValue === "Pykara" && tourvehicleValue === "Dzire") {
  //     amount = 1800;
  //   }
  //   else if (tourValue === "Pykara" && tourvehicleValue === "Xylo") {
  //     amount = 2500;
  //   }
  //   else if (tourValue === "Pykara" && tourvehicleValue === "Innova") {
  //     amount = 3000;
  //   }
  //   else if (tourValue === "Pykara" && tourvehicleValue === "Traveller") {
  //     amount = 3700;
  //   }
  //   else if (tourValue === "Pykara" && tourvehicleValue === "Coach") {
  //     amount = 4000;
  //   }


  //   else if (tourValue === "Avalanche" && tourvehicleValue === "Etios") {
  //     amount = 2200;
  //   }
  //   else if (tourValue === "Avalanche" && tourvehicleValue === "Dzire") {
  //     amount = 2000;
  //   }
  //   else if (tourValue === "Avalanche" && tourvehicleValue === "Xylo") {
  //     amount = 3000;
  //   }
  //   else if (tourValue === "Avalanche" && tourvehicleValue === "Innova") {
  //     amount = 3500;
  //   }
  //   else if (tourValue === "Avalanche" && tourvehicleValue === "Traveller") {
  //     amount = 4000;
  //   }
  //   else if (tourValue === "Avalanche" && tourvehicleValue === "Coach") {
  //     amount = 4800;
  //   }

  //   else if (tourValue === "OotyandCoonoor" && tourvehicleValue === "Etios") {
  //     amount = 2500;
  //   }
  //   else if (tourValue === "OotyandCoonoor" && tourvehicleValue === "Dzire") {
  //     amount = 2500;
  //   }
  //   else if (tourValue === "OotyandCoonoor" && tourvehicleValue === "Xylo") {
  //     amount = 3500;
  //   }
  //   else if (tourValue === "OotyandCoonoor" && tourvehicleValue === "Innova") {
  //     amount = 4000;
  //   }
  //   else if (tourValue === "OotyandCoonoor" && tourvehicleValue === "Traveller") {
  //     amount = 4500;
  //   }
  //   else if (tourValue === "OotyandCoonoor" && tourvehicleValue === "Coach") {
  //     amount = 5000;
  //   }


  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Etios") {
  //     amount = 2500;
  //   }
  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Dzire") {
  //     amount = 2500;
  //   }
  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Xylo") {
  //     amount = 3500;
  //   }
  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Innova") {
  //     amount = 4000;
  //   }
  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Traveller") {
  //     amount = 4500;
  //   }
  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Coach") {
  //     amount = 5000;
  //   }

  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Etios") {
  //     amount = 2500;
  //   }
  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Dzire") {
  //     amount = 2500;
  //   }
  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Xylo") {
  //     amount = 3500;
  //   }
  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Innova") {
  //     amount = 4000;
  //   }
  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Traveller") {
  //     amount = 4500;
  //   }
  //   else if (tourValue === "OotyandPykara" && tourvehicleValue === "Coach") {
  //     amount = 5000;
  //   }

  //   else if (tourValue === "PykaraandMudumalai" && tourvehicleValue === "Etios") {
  //     amount = 3200;
  //   }
  //   else if (tourValue === "PykaraandMudumalai" && tourvehicleValue === "Dzire") {
  //     amount = 3000;
  //   }
  //   else if (tourValue === "PykaraandMudumalai" && tourvehicleValue === "Xylo") {
  //     amount = 3500;
  //   }
  //   else if (tourValue === "PykaraandMudumalai" && tourvehicleValue === "Innova") {
  //     amount = 4000;
  //   }
  //   else if (tourValue === "PykaraandMudumalai" && tourvehicleValue === "Traveller") {
  //     amount = 5500;
  //   }
  //   else if (tourValue === "PykaraandMudumalai" && tourvehicleValue === "Coach") {
  //     amount = 6000;
  //   }

  //   setTourestimatedamount(amount);

  // };

  const handleCheckbox1Change = () => {
    if (!showDivision1) {
      setShowDivision1(true);
      setShowDivision2(false);
    }
  };

  const handleCheckbox2Change = () => {

    if (!showDivision2) {
      setShowDivision2(true);
      setShowDivision1(false);
    }
  };

  const [currentSection16, setCurrentSection16] = useState(1);
  useEffect(() => {
    const interval16 = setInterval(() => {
      // Move to the next section (or back to the first one if at the end)
      setCurrentSection16((prevSection) => (prevSection % 6) + 1);
    }, 3000);

    return () => clearInterval(interval16); // Cleanup interval on component unmount
  }, []);

  const getSectionStyle16 = (sectionNumber) => {
    const transformValue = `translateX(${(sectionNumber - 1) * -16.66}%)`;
    return {
      transform: transformValue,
      transition: 'transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    };
  };

  const [currentSection, setCurrentSection] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next section (or back to the first one if at the end)
      setCurrentSection((prevSection) => (prevSection % 6) + 1);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const getSectionStyle = (sectionNumber) => {
    const transformValue = `translateX(${(sectionNumber - 1) * -12.5}%)`;
    return {
      transform: transformValue,
      transition: 'transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    };
  };

  const [seatingVehicle, setSeatingVehicle] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("4+1");

  // Function to handle vehicle change
  const tourshandleVehicleChange = (event) => {
    const selectedVehicle = event.target.value;
    setSeatingVehicle(selectedVehicle);

    switch (selectedVehicle) {
      case 'Etios':
        setSeatingCapacity("4+1");
        break;
      case 'Dzire':
        setSeatingCapacity("4+1");
        break;
      case 'Xylo':
        setSeatingCapacity("7+1");
        break;
      case 'Innova':
        setSeatingCapacity("8+1");
        break;
      case 'Traveller':
        setSeatingCapacity("14+1");
        break;
      case 'Coach':
        setSeatingCapacity("22+1");
        break;
      default:
        setSeatingCapacity("4+1");
    }
  };

  return (

    <div>
      <div className="p-4 mt-[-2rem]  w-full flex-column lg:flex ">

        <div style={{ display: showDivision1 ? "block" : "none" }} className='booking-container'>
          <div className='booking-carousal'>
            <div className='bookingslider' style={getSectionStyle16(currentSection16)}>
              <section>
                <div className='car-card'>
                  <h2>Toyota Etios </h2>
                  <img src={ImageGallery.Etios} alt="Etios" className='car-image' />
                  <h3>Seating Capacity  4 + 1</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Swift Dzire </h2>
                  <img src={ImageGallery.Dzire} alt="Dzire" className='car-image' />
                  <h3>Seating Capacity  4 + 1</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Mahindra Xylo </h2>
                  <img src={ImageGallery.xylo} alt="Xylo" className='car-image' />
                  <h3>Seating Capacity  7 + 1</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Toyota Innova </h2>
                  <img src={ImageGallery.Innova} alt="Innova" className='car-image' />
                  <h3>Seating Capacity  8 + 1</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Tempo Traveller</h2>
                  <img src={ImageGallery.traveller} alt="Traveller" className='car-image' />
                  <h3>Seating Capacity  14 + 1</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Mini Coach </h2>
                  <img src={ImageGallery.Minibus} alt="Minibus" className='car-image' />
                  <h3>Seating Capacity  22 + 1</h3>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div style={{ display: showDivision2 ? "block" : "none" }} className='booking-container'>
          <div className='booking-carousal'>
            <div className='bookingslider-tour' style={getSectionStyle(currentSection)}>
              <section>
                <div className='car-card'>
                  <h2>Ooty Sight Seeing</h2>
                  <img src={ImageGallery.Ooty} alt="Ooty Sight Seeing" className='tour-image' />
                  <h3>1 Day Tour</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Mudhumalai Sight Seeing</h2>
                  <img src={ImageGallery.Mudhumalai} alt="Mudhumalai Sight Seeing" className='tour-image' />
                  <h3>1 Day Tour</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Coonoor Sight Seeing</h2>
                  <img src={ImageGallery.Coonoor} alt="Coonoor Sight Seeing" className='tour-image' />
                  <h3>1 Day Tour</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Pykara Sight Seeing</h2>
                  <img src={ImageGallery.Pykara} alt="Pykara Sight Seeing" className='tour-image' />
                  <h3>1 Day Tour</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Avalanche Sight Seeing</h2>
                  <img src={ImageGallery.Avalanche} alt="Avalanche Sight Seeing" className='tour-image' />
                  <h3>1 Day Tour</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Ooty & Coonoor</h2>
                  <img src={ImageGallery.OotyandCoonoor} alt="Ooty & Coonoor" className='tour-image' />
                  <h3>2 Days Tour</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Ooty & Pykara</h2>
                  <img src={ImageGallery.OotyandPykara} alt="Ooty & Pykara" className='tour-image' />
                  <h3>2 Days Tour</h3>
                </div>
              </section>
              <section>
                <div className='car-card'>
                  <h2>Ooty & Avalanche</h2>
                  <img src={ImageGallery.OotyandAvalanche} alt="Ooty & Avalanche" className='tour-image' />
                  <h3>2 Days Tour</h3>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="flex-column">

          <label className="flex-row items-center space-x-2 p-4 ">
            <input
              type="checkbox"
              checked={showDivision1}
              onChange={handleCheckbox1Change}
              className="appearance-none w-5 h-5 border border-gray-300 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-md md:text-lg sel-text">Rental</span>
          </label>

          <label className="flex-row items-center space-x-2 p-4">
            <input
              type="checkbox"
              checked={showDivision2}
              onChange={handleCheckbox2Change}
              className="appearance-none w-5 h-5 border border-gray-300 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none"
            />
            <span className="text-md md:text-lg sel-text">Tour Package</span>
          </label>

          <div style={{ display: showDivision1 ? "block" : "none" }}>
            <div className='sel-rel-box rounded-xl mt-[2rem]'>
              <div class='sel-ren-pick'>
                <p>Pick-up</p>
                <select
                  className='xl:text-2xl focus:outline-none focus:border-blue-500 bg-transparent lg:p-0 md:pr-[12rem]'
                  onChange={handlePickupLocationChange}
                  value={pickupLocation}
                >
                  <option value="" disabled selected>
                    Select your city
                  </option>
                  <option value="Ooty">Ooty</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Metupalayam">Metupalayam</option>
                  <option value="Mysore">Mysore</option>
                  <option value='Bangalore'>Bangalore</option>
                  {/* Add more location options as needed */}
                </select>
              </div>

              <div class='sel-ren-drop'>
                <p>Drop-Off</p>
                <select
                  className='xl:text-2xl focus:outline-none focus:border-blue-500 bg-transparent lg:p-0 md:pr-[12rem]'
                  onChange={handleDropLocationChange}
                  value={dropLocation}
                >
                  <option value="" disabled selected>
                    Select your city
                  </option>
                  {/* Add more location options as needed */}
                  <option value="Ooty">Ooty</option>
                  <option value="Coorg">Coorg</option>
                  <option value="Wayanad">Wayanad</option>
                  <option value="Calicut">Calicut</option>
                  <option value='Cochin'>Cochin</option>
                  {/* Add more location options as needed */}
                </select>
              </div>

              <div class='sel-ren-drop'>
                <p>Date</p>
                {/* Date picker button */}
                <input
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                  className="focus:outline-none focus:border-blue-500 bg-transparent"
                />
              </div>

              <div class='sel-ren-down md:flex'>

                <div class='sel-ren-date'>
                  <p>Select Vehicle</p>
                  <select className='xl:text-2xl focus:outline-none focus:border-blue-500 bg-transparent'
                    onChange={handleVehicleChange}
                    value={vehicle}
                  >
                    <option className='bg-white rounded-sm' value="" disabled selected>
                      Select Your Car
                    </option>
                    <option value='Etios'>Toyota Etios</option>
                    <option value='Dzire'>Swift Dzire</option>
                    <option value='Xylo'>Mahindra Xylo</option>
                    <option value='Innova'>Toyota Innova</option>
                    <option value='Traveller'>Tempo Traveller</option>
                    <option value='Coach'>Mini Coach</option>
                    {/* Add more location options as needed */}
                  </select>
                </div>

                <div class='sel-ren-est'>
                  <p>Tariff</p>
                  <h2 class=' xl:text-2xl est'>{`₹${estimatedAmount}`}</h2>
                </div>

                <button
                  onClick={bookNow}
                  className="bg-white px-4 py-2 rounded-md mt-[2rem] md:mt-0">
                  Book Now
                </button>

              </div>


            </div>
          </div>

          <div style={{ display: showDivision2 ? "block" : "none" }}>
            <div className='sel-tour-box rounded-xl mt-[1rem]'>

              <div class='sel-ren-pick'>
                <p>Tour Package</p>
                <select className='xl:text-2xl focus:outline-none focus:border-blue-500 bg-transparent'
                  onChange={tourhandleLocationChange}
                  value={tourLocation}
                >
                  <option className='bg-white rounded-sm' value="" disabled selected>
                    Select Your Package
                  </option>
                  <option value='Ooty'>Ooty Sight Seeing</option>
                  <option value='Mudhumalai'>Mudhumalai Sight Seeing</option>
                  <option value='Coonoor'>Coonoor Sight Seeing</option>
                  <option value='Pykara'>Pykara Sight Seeing</option>
                  <option value='Avalanche'>Avalanche Sight Seeing</option>
                  <option value='OotyandCoonoor'>Ooty and Coonoor</option>
                  <option value='OotyandPykara'>Ooty and Pykara</option>
                  <option value='OotyandAvalanche'>Ooty and Avalanche</option>
                  {/* Add more location options as needed */}
                </select>
              </div>

              <div class='sel-ren-pick'>
                <p>Vehicle</p>
                <select className='xl:text-2xl focus:outline-none focus:border-blue-500 bg-transparent'
                  onChange={tourshandleVehicleChange}
                  value={seatingVehicle}
                >
                  <option className='bg-white rounded-sm' value="" disabled selected>
                    Select Your Car
                  </option>
                  <option value='Etios'>Toyota Etios</option>
                  <option value='Dzire'>Swift Dzire</option>
                  <option value='Xylo'>Mahindra Xylo</option>
                  <option value='Innova'>Toyota Innova</option>
                  <option value='Traveller'>Tempo Traveller</option>
                  <option value='Coach'>Mini Coach</option>
                  {/* Add more location options as needed */}
                </select>
              </div>

              <div class='sel-ren-pick'>
                <p>Seating Capacity</p>
                <h3 className="">{seatingCapacity}</h3>
              </div>

              <div class='sel-ren-pick'>
                <p>Date</p>
                {/* Date picker button */}
                <input
                  type="date"
                  value={tourdate}
                  onChange={tourhandleDateChange}
                  className="focus:outline-none focus:border-blue-500 bg-transparent"
                />
              </div>

              <div class='sel-ren-down md:flex'>
                {/* <div class='sel-ren-est'>
                  <p>Tariff</p>
                  <h2 class='est'>{`₹${estimatedAmount}`}</h2>
                </div> */}
                <div className="md:px-10">
                  <button
                    onClick={tourbookNow}
                    className="bg-white px-4 py-2 rounded-md mt-[2rem] md:mt-0">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Selection;
