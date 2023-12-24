import React, { useState, useEffect } from "react";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Rentals() {
    const [pickup, setPickup] = useState('Coimbatore');
    const [drop, setDrop] = useState('Ooty');
    const [date, setDate] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Set default date as today
        if (!date) {
            const today = new Date().toISOString().split('T')[0];
            setDate(today);
        }
    }, []);

    const carData = [
        { name: 'Etios', seats: '4 + 1', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703172170/dreamdestiny/etios_owi25u.svg' },
        { name: 'Swift Dzire', seats: '4 + 1', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703172173/dreamdestiny/dzire_rpofbh.svg' },
        { name: 'Xylo', seats: '7 + 1', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703172203/dreamdestiny/xylo_wyicav.svg' },
        { name: 'Innova', seats: '8 + 1', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703172181/dreamdestiny/Innova_o5x44r.svg' },
        { name: 'Traveller', seats: '14 + 1', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703172199/dreamdestiny/traveller_mp5b5x.svg' },
        { name: 'Coach', seats: '22 + 1', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703172188/dreamdestiny/minibus_hmop3z.svg' },
    ];

    const locations = ['Ooty', 'Mettupalayam', 'Coimbatore', 'Mysore', 'Bangalore'];
    const today = new Date().toISOString().split('T')[0];
    const calculatePrice = () => {
        const selectedCar = carData[currentSlide];

        if (pickup === 'Coimbatore' && drop === 'Ooty' && selectedCar.name === 'Etios') {
            return 3000;
        } else if (pickup === 'Coimbatore' && drop === 'Ooty' && selectedCar.name === 'Swift Dzire') {
            return 2800;
        } else if (pickup === 'Coimbatore' && drop === 'Ooty' && selectedCar.name === 'Xylo') {
            return 4000;
        } else if (pickup === 'Coimbatore' && drop === 'Ooty' && selectedCar.name === 'Innova') {
            return 4500;
        } else if (pickup === 'Coimbatore' && drop === 'Ooty' && selectedCar.name === 'Traveller') {
            return 6000;
        } else if (pickup === 'Coimbatore' && drop === 'Ooty' && selectedCar.name === 'Coach') {
            return 6800;
        }else if (drop === 'Coimbatore' && pickup === 'Ooty' && selectedCar.name === 'Etios') {
            return 3000;
        } else if (drop === 'Coimbatore' && pickup === 'Ooty' && selectedCar.name === 'Swift Dzire') {
            return 2800;
        } else if (drop === 'Coimbatore' && pickup === 'Ooty' && selectedCar.name === 'Xylo') {
            return 4000;
        } else if (drop === 'Coimbatore' && pickup === 'Ooty' && selectedCar.name === 'Innova') {
            return 4500;
        } else if (drop === 'Coimbatore' && pickup === 'Ooty' && selectedCar.name === 'Traveller') {
            return 6000;
        } else if (drop === 'Coimbatore' && pickup === 'Ooty' && selectedCar.name === 'Coach') {
            return 6800;
        } else if (pickup === 'Mysore' && drop === 'Ooty' && selectedCar.name === 'Etios') {
            return 4500;
        } else if (pickup === 'Mysore' && drop === 'Ooty' && selectedCar.name === 'Swift Dzire') {
            return 4500;
        } else if (pickup === 'Mysore' && drop === 'Ooty' && selectedCar.name === 'Xylo') {
            return 6500;
        } else if (pickup === 'Mysore' && drop === 'Ooty' && selectedCar.name === 'Innova') {
            return 7000;
        } else if (pickup === 'Mysore' && drop === 'Ooty' && selectedCar.name === 'Traveller') {
            return 14500;
        } else if (pickup === 'Mysore' && drop === 'Ooty' && selectedCar.name === 'Coach') {
            return 17000;
        }else if (drop === 'Mysore' && pickup === 'Ooty' && selectedCar.name === 'Etios') {
            return 4500;
        } else if (drop === 'Mysore' && pickup === 'Ooty' && selectedCar.name === 'Swift Dzire') {
            return 4500;
        } else if (drop === 'Mysore' && pickup === 'Ooty' && selectedCar.name === 'Xylo') {
            return 6500;
        } else if (drop === 'Mysore' && pickup === 'Ooty' && selectedCar.name === 'Innova') {
            return 7000;
        } else if (drop === 'Mysore' && pickup === 'Ooty' && selectedCar.name === 'Traveller') {
            return 14500;
        } else if (drop === 'Mysore' && pickup === 'Ooty' && selectedCar.name === 'Coach') {
            return 17000;
        } else if (pickup === "Mettupalayam" && drop === "Ooty" && selectedCar.name === "Etios") {
            return 2200;
        } else if (pickup === "Mettupalayam" && drop === "Ooty" && selectedCar.name === "Swift Dzire") {
            return 2000;
        } else if (pickup === "Mettupalayam" && drop === "Ooty" && selectedCar.name === "Xylo") {
            return 2500;
        } else if (pickup === "Mettupalayam" && drop === "Ooty" && selectedCar.name === "Innova") {
            return 3000;
        } else if (pickup === "Mettupalayam" && drop === "Ooty" && selectedCar.name === "Traveller") {
            return 5000;
        } else if (pickup === "Mettupalayam" && drop === "Ooty" && selectedCar.name === "Coach") {
            return 5500;
        }else if (drop === "Mettupalayam" && pickup === "Ooty" && selectedCar.name === "Etios") {
            return 2200;
        } else if (drop === "Mettupalayam" && pickup === "Ooty" && selectedCar.name === "Swift Dzire") {
            return 2000;
        } else if (drop === "Mettupalayam" && pickup === "Ooty" && selectedCar.name === "Xylo") {
            return 2500;
        } else if (drop === "Mettupalayam" && pickup === "Ooty" && selectedCar.name === "Innova") {
            return 3000;
        } else if (drop === "Mettupalayam" && pickup === "Ooty" && selectedCar.name === "Traveller") {
            return 5000;
        } else if (drop === "Mettupalayam" && pickup === "Ooty" && selectedCar.name === "Coach") {
            return 5500;
        } else if (pickup === "Bangalore" && drop === "Ooty" && selectedCar.name === "Etios") {
            return 8500;
        } else if (pickup === "Bangalore" && drop === "Ooty" && selectedCar.name === "Swift Dzire") {
            return 8000;
        } else if (pickup === "Bangalore" && drop === "Ooty" && selectedCar.name === "Xylo") {
            return 11000;
        } else if (pickup === "Bangalore" && drop === "Ooty" && selectedCar.name === "Innova") {
            return 12000;
        } else if (pickup === "Bangalore" && drop === "Ooty" && selectedCar.name === "Traveller") {
            return 22500;
        } else if (pickup === "Bangalore" && drop === "Ooty" && selectedCar.name === "Coach") {
            return 25000;
        } else if (drop=== "Bangalore" && pickup === "Ooty" && selectedCar.name === "Etios") {
            return 8500;
        } else if (drop === "Bangalore" && pickup === "Ooty" && selectedCar.name === "Swift Dzire") {
            return 8000;
        } else if (drop === "Bangalore" && pickup === "Ooty" && selectedCar.name === "Xylo") {
            return 11000;
        } else if (drop === "Bangalore" && pickup === "Ooty" && selectedCar.name === "Innova") {
            return 12000;
        } else if (drop === "Bangalore" && pickup === "Ooty" && selectedCar.name === "Traveller") {
            return 22500;
        } else if (drop === "Bangalore" && pickup === "Ooty" && selectedCar.name === "Coach") {
            return 25000;
        } else if (pickup === "Ooty" && drop === "Coorg" && selectedCar.name === "Etios") {
            return 8500;
        } else if (pickup === "Ooty" && drop === "Coorg" && selectedCar.name === "Swift Dzire") {
            return 8500;
        } else if (pickup === "Ooty" && drop === "Coorg" && selectedCar.name === "Xylo") {
            return 10000;
        } else if (pickup === "Ooty" && drop === "Coorg" && selectedCar.name === "Innova") {
            return 12000;
        } else if (pickup === "Ooty" && drop === "Coorg" && selectedCar.name === "Traveller") {
            return 21000;
        } else if (pickup === "Ooty" && drop === "Coorg" && selectedCar.name === "Coach") {
            return 24000;
        } else if (pickup === "Ooty" && drop === "Wayanad" && selectedCar.name === "Etios") {
            return 5000;
        } else if (pickup === "Ooty" && drop === "Wayanad" && selectedCar.name === "Swift Dzire") {
            return 4500;
        } else if (pickup === "Ooty" && drop === "Wayanad" && selectedCar.name === "Xylo") {
            return 5500;
        } else if (pickup === "Ooty" && drop === "Wayanad" && selectedCar.name === "Innova") {
            return 6500;
        } else if (pickup === "Ooty" && drop === "Wayanad" && selectedCar.name === "Traveller") {
            return 22000;
        } else if (pickup === "Ooty" && drop === "Wayanad" && selectedCar.name === "Coach") {
            return 23000;
        } else if (pickup === "Ooty" && drop === "Calicut" && selectedCar.name === "Etios") {
            return 6500;
        } else if (pickup === "Ooty" && drop === "Calicut" && selectedCar.name === "Swift Dzire") {
            return 6000;
        } else if (pickup === "Ooty" && drop === "Calicut" && selectedCar.name === "Xylo") {
            return 8000;
        } else if (pickup === "Ooty" && drop === "Calicut" && selectedCar.name === "Innova") {
            return 9000;
        } else if (pickup === "Ooty" && drop === "Calicut" && selectedCar.name === "Traveller") {
            return 22000;
        } else if (pickup === "Ooty" && drop === "Calicut" && selectedCar.name === "Coach") {
            return 23000;
        } else if (pickup === "Ooty" && drop === "Cochin" && selectedCar.name === "Etios") {
            return 9000;
        } else if (pickup === "Ooty" && drop === "Cochin" && selectedCar.name === "Swift Dzire") {
            return 9000;
        } else if (pickup === "Ooty" && drop === "Cochin" && selectedCar.name === "Xylo") {
            return 10000;
        } else if (pickup === "Ooty" && drop === "Cochin" && selectedCar.name === "Innova") {
            return 12000;
        } else if (pickup === "Ooty" && drop === "Cochin" && selectedCar.name === "Traveller") {
            return 21000;
        } else if (pickup === "Ooty" && drop === "Cochin" && selectedCar.name === "Coach") {
            return 23000;
        } else {
            return 'Not Available'
        }
    };
    const getDropLocationOptions = () => {
        if (pickup === 'Ooty') {
            return ['', 'Coorg', 'Wayanad', 'Cochin', 'Calicut','Mettupalayam', 'Coimbatore', 'Mysore', 'Bangalore'];
        } else if (['Mettupalayam', 'Coimbatore', 'Mysore', 'Bangalore'].includes(pickup)) {
            return ['', 'Ooty'];
        } else {
            return locations.filter((location) => location !== pickup);
        }
    };

    const constructWhatsAppLink = () => {
        const selectedCar = carData[currentSlide];
        const price = calculatePrice();

        // Validation check
        if (!pickup) {
            alert('Please fill the Pickup Location.');
            return;
        }else if (!drop) {
            alert("I can't Drop you at nowhere, Please Fill the Drop Location 🥹")
            return;
        }else if (!date){
            alert("I am familiar with Astrology but not as far to predict the date, Please Fill the Date to proceed 🤝")
            return;
        }
        const message = `Booking Details:\nCar: ${selectedCar.name}\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${date} \nPrice: ${price}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/+919342563416?text=${encodedMessage}`;

        window.open(whatsappLink, '_blank');
    };
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className + 'text-4xl cursor-pointer absolute right-0 mr-5 bottom-0 transform -translate-y-1/2'}
                style={{ ...style, zIndex: 1 }}
                onClick={onClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="35" width="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </div>
        );
    };

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className + 'text-4xl cursor-pointer absolute left-0 ml-5 bottom-0 transform -translate-y-1/2'}
                style={{ ...style, zIndex: 1 }}
                onClick={onClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => setCurrentSlide(next),
    };
    return (
        <div className="p-10 lg:p-20 xl:p-32">
            <div className="grid grid-rows-2 gap-10 md:grid-cols-2 md:gap-10 lg:gap-24 xl:gap-32 relative z-0">
                <div className="rounded-lg overflow-hidden bg-[#5A5A5A] mb-[4rem]">
                    <Slider {...settings}>
                        {carData.map((car, index) => (
                            <div key={index} className="grid grid-rows-3 justify-items-center p-5">
                                <div className="flex justify-center"><h3 className="font-display text-white text-2xl font-bold">{car.name}</h3></div>
                                <div className="flex justify-center"><img src={car.image} className="w-fit h-60 lg:h-80 xl:h-96 py-5"></img></div>
                                <div className="flex justify-center"><p><p className="font-display text-white text-sm lg:text-md xl:text-md font-bold">Seating Capacity {car.seats}</p></p></div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="bg-[#FCC120] rounded-lg">
                    <div className="flex flex-col gap-5 lg:gap-8 xl:gap-12 p-[2rem]">
                        <div>
                            <label className="font-display font-medium">Pickup Location:</label>
                            <select
                                value={pickup}
                                onChange={(e) => {
                                    setPickup(e.target.value);
                                    // Ensure drop location is different after changing pickup location
                                    calculatePrice();
                                    setDrop(getDropLocationOptions()[0]);
                                }}
                                className="bg-transparent w-full py-2 leading-tight focus:outline-none"
                            >
                                {locations.map((location, index) => (
                                    <option key={index} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="font-display font-medium">Drop Location:</label>
                            <select
                                value={drop}
                                onChange={(e) => { setDrop(e.target.value); calculatePrice(); }}
                                className="bg-transparent w-full py-2 leading-tight focus:outline-none"
                            >
                                {getDropLocationOptions().map((location, index) => (
                                    <option key={index} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="font-display font-medium">Date:</label>
                            <input
                                type="date"
                                value={date}
                                min={today}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-transparent w-full py-2 leading-tight focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="font-display font-medium">{carData[currentSlide].name}</p>
                            <p className="font-display font-medium">{`${carData[currentSlide].seats} Seater`}</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <label className="font-display font-medium">Price:</label>
                                <p className="font-display">Rs {calculatePrice()}</p>
                            </div>
                            <div>
                                <button
                                    onClick={constructWhatsAppLink}
                                    className="bg-[#5A5A5A] text-white w-30 h-10 font-display py-2 px-4 rounded-full mt-3 focus:outline-none"
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

export default Rentals;