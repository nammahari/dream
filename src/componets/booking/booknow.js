import React, { useState, useEffect } from "react";

function HeroBook() {
    const [pickup, setPickup] = useState('Coimbatore');
    const [drop, setDrop] = useState('Ooty');
    const [date, setDate] = useState('');
    const [vehicle, setVehicle] = useState('Etios');
    useEffect(() => {
        // Set default date as today
        if (!date) {
            const today = new Date().toISOString().split('T')[0];
            setDate(today);
        }
    }, []);

    const locations = ['Ooty', 'Mettupalayam', 'Coimbatore', 'Mysore', 'Bangalore'];
    const cars = ['Etios', 'Swift Dzire', 'Xylo', 'Innova', 'Traveller', 'Coach'];
    const today = new Date().toISOString().split('T')[0];

    const getDropLocationOptions = () => {
        if (pickup === 'Ooty') {
            return ['','Mettupalayam', 'Coimbatore', 'Mysore', 'Bangalore','Coorg', 'Wayanad', 'Cochin', 'Calicut'];
        } else if (['Mettupalayam', 'Coimbatore', 'Mysore', 'Bangalore'].includes(pickup)) {
            return ['','Ooty'];
        } else {
            return locations.filter((location) => location !== pickup);
        }
    };

    const constructWhatsAppLink = () => {
        // Validation check
        if (!pickup) {
            alert('Please fill the Pickup Location.');
            return;
        } else if (!drop) {
            alert("I can't Drop you at nowhere, Please Fill the Drop Location 🥹")
            return;
        } else if (!date) {
            alert("I am familiar with Astrology but not as far to predict the date, Please Fill the Date to proceed 🤝")
            return;
        }
        const message = `Booking Details:\nCar: ${vehicle}\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${date} \n`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/+919342563416?text=${encodedMessage}`;

        window.open(whatsappLink, '_blank');
    };

    return (
        <div>
            <div className="relative z-10">
                <div className="bg-[#FCC120] rounded-lg">
                    <div className="flex flex-col gap-5 md:flex md:flex-row md:gap-8 lg:gap-8 xl:gap-12 p-[2rem]">
                        <div>
                            <label className="font-display font-medium md:text-[12px] lg:text-[16px] xl:text-[20px]">Pickup Location</label>
                            <select
                                value={pickup}
                                onChange={(e) => {
                                    setPickup(e.target.value);
                                    // Ensure drop location is different after changing pickup location
                                    setDrop(getDropLocationOptions()[0]);
                                }}
                                className="bg-transparent font-display md:text-[10px] lg:text-[14px] xl:text-[18px] w-full lg:w-fit md:w-fit xl:w-fit py-2 leading-tight focus:outline-none"
                            >
                                {locations.map((location, index) => (
                                    <option key={index} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="font-display font-medium md:text-[12px] lg:text-[16px] xl:text-[20px]">Date</label>
                            <input
                                type="date"
                                value={date}
                                min={today}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-transparent font-display md:text-[10px] lg:text-[14px] xl:text-[18px] w-full py-2 leading-tight focus:outline-none"
                            />
                        </div>
                        <hr className="py-2"></hr>
                        <div>
                            <label className="font-display font-medium md:text-[12px] lg:text-[16px] xl:text-[20px]">Drop Location</label>
                            <select
                                value={drop}
                                onChange={(e) => { setDrop(e.target.value); }}
                                className="bg-transparent font-display md:text-[10px] lg:text-[14px] xl:text-[18px] w-full lg:w-fit md:w-fit xl:w-fit py-2 leading-tight focus:outline-none"
                            >
                                {getDropLocationOptions().map((location, index) => (
                                    <option key={index} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="font-display font-medium md:text-[12px] lg:text-[16px] xl:text-[20px]">Vehicle</label>
                            <select
                                value={vehicle}
                                onChange={(e) => {
                                    setVehicle(e.target.value);
                                    // Ensure drop location is different after changing pickup location
                                }}
                                className="bg-transparent font-display md:text-[10px] lg:text-[14px] xl:text-[18px] w-full py-2 leading-tight focus:outline-none"
                            >
                                {cars.map((car, index) => (
                                    <option key={index} value={car}>
                                        {car}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <button
                                    onClick={constructWhatsAppLink}
                                    className="bg-white text-[#1A202C] md:text-[10px] lg:text-[14px] xl:text-[18px] font-semibold w-28 lg:w-28 xl:w-36 xl:h-14 md:w-20 h-10 font-display py-2 px-4 md:px-2 rounded mt-3 focus:outline-none"
                                >
                                    Book Now
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default HeroBook;