import React, { useState,useEffect } from "react";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Tour() {
    const [vehicle, setVehicle] = useState('');
    const [date, setDate] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Set default date as today
        if (!date) {
            const today = new Date().toISOString().split('T')[0];
            setDate(today);
        }
    }, []);

    const tourData = [
        { name: 'Ooty Sight Seeing', pack: 'One Day Package', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703261531/Ooty_Sight_Seeing_hy0ip9.png'},
        { name: 'Coonoor Sight Seeing', pack: 'One Day Package', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703262734/Coonoor_Sight_Seeing_dbjydr.png' },
        { name: 'Pykara Sight Seeing', pack: 'One Day Package', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703262776/Pykara_Sight_Seeing_azjadc.png' },
        { name: 'Mudumalai Sight Seeing', pack: 'One Day Package', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703262927/Mudumalai_Sight_Seeing_w6j7rc.png' },
        { name: 'Avalanche Sight Seeing', pack: 'One Day Package', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703262972/Avalanche_Sight_Seeing_of4hmp.png' },
        { name: 'Ooty & Coonoor', pack: 'Two Day Package', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703263050/Ooty_Coonoor_j1bqqk.png' },
        { name: 'Ooty & Pykara', pack: 'Two Day Package', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703263084/Ooty_Pykara_x7hjqr.png' },
        { name: 'Ooty & Avalanche', pack: 'Two Day Package', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1703263267/Ooty_Avalanche_giko4g.png' },
        { name: 'Pykara & Mudumalai', pack: 'Two Day Package', image: 'https://res.cloudinary.com/dtqdoinxc/image/upload/c_crop,w_620,h_375/v1703263500/one-day-ooty-mudumalai-wildlife-sanctuary-tour-local-sightseeing-tour-package-mudumalai-wildlife-sanctuary-ooty_zrywar.jpg' },
    ];
    const today = new Date().toISOString().split('T')[0];
    const cars = ['','Etios', 'Swift Dzire', 'Xylo', 'Innova', 'Traveller','Coach'];
    

    const seating = () => {
        if(vehicle === 'Etios'){
            return '4 + 1';
        }else if(vehicle === 'Swift Dzire'){
            return '4 + 1';
        }else if(vehicle === 'Xylo'){
            return '7 + 1';
        }else if(vehicle === 'Innova'){
            return '8 + 1';
        }else if(vehicle === 'Traveller'){
            return '14 + 1'
        }else if(vehicle === 'Coach'){
            return '22 +1';
        }else{
            return 'Select a Vehicle To Get';
        }
    };
    const seat = seating()// Seating Capacity Condition
    const calculatePrice = () => {
        const selectedTour = tourData[currentSlide];
        if(selectedTour.name === 'Ooty Sight Seeing' && vehicle === 'Etios'){
            return '2000';
        }else if(selectedTour.name === 'Ooty Sight Seeing' && vehicle === 'Swift Dzire'){
            return '1800';
        }else if(selectedTour.name === 'Ooty Sight Seeing' && vehicle === 'Xylo'){
            return '2500';
        }else if(selectedTour.name === 'Ooty Sight Seeing' && vehicle === 'Innova'){
            return '3000';
        }else if(selectedTour.name === 'Ooty Sight Seeing' && vehicle === 'Traveller'){
            return '3500';
        }else if(selectedTour.name === 'Ooty Sight Seeing' && vehicle === 'Coach'){
            return '4000';
        }else if(selectedTour.name === 'Coonoor Sight Seeing' && vehicle === 'Etios'){
            return '2200';
        }else if(selectedTour.name === 'Coonoor Sight Seeing' && vehicle === 'Swift Dzire'){
            return '2000';
        }else if(selectedTour.name === 'Coonoor Sight Seeing' && vehicle === 'Xylo'){
            return '2800';
        }else if(selectedTour.name === 'Coonoor Sight Seeing' && vehicle === 'Innova'){
            return '3300';
        }else if(selectedTour.name === 'Coonoor Sight Seeing' && vehicle === 'Traveller'){
            return '4000';
        }else if(selectedTour.name === 'Coonoor Sight Seeing' && vehicle === 'Coach'){
            return '4500';
        }else if(selectedTour.name === 'Pykara Sight Seeing' && vehicle === 'Etios'){
            return '1800';
        }else if(selectedTour.name === 'Pykara Sight Seeing' && vehicle === 'Swift Dzire'){
            return '1800';
        }else if(selectedTour.name === 'Pykara Sight Seeing' && vehicle === 'Xylo'){
            return '2500';
        }else if(selectedTour.name === 'Pykara Sight Seeing' && vehicle === 'Innova'){
            return '3000';
        }else if(selectedTour.name === 'Pykara Sight Seeing' && vehicle === 'Traveller'){
            return '3700';
        }else if(selectedTour.name === 'Pykara Sight Seeing' && vehicle === 'Coach'){
            return '4000';
        }else if(selectedTour.name === 'Mudumalai Sight Seeing' && vehicle === 'Etios'){
            return '2500';
        }else if(selectedTour.name === 'Mudumalai Sight Seeing' && vehicle === 'Swift Dzire'){
            return '2500';
        }else if(selectedTour.name === 'Mudumalai Sight Seeing' && vehicle === 'Xylo'){
            return '3000';
        }else if(selectedTour.name === 'Mudumalai Sight Seeing' && vehicle === 'Innova'){
            return '3500';
        }else if(selectedTour.name === 'Mudumalai Sight Seeing' && vehicle === 'Traveller'){
            return '4500';
        }else if(selectedTour.name === 'Mudumalai Sight Seeing' && vehicle === 'Coach'){
            return '5000';
        }else if(selectedTour.name === 'Avalanche Sight Seeing' && vehicle === 'Etios'){
            return '2200';
        }else if(selectedTour.name === 'Avalanche Sight Seeing' && vehicle === 'Swift Dzire'){
            return '2000';
        }else if(selectedTour.name === 'Avalanche Sight Seeing' && vehicle === 'Xylo'){
            return '3000';
        }else if(selectedTour.name === 'Avalanche Sight Seeing' && vehicle === 'Innova'){
            return '3500';
        }else if(selectedTour.name === 'Avalanche Sight Seeing' && vehicle === 'Traveller'){
            return '4000';
        }else if(selectedTour.name === 'Avalanche Sight Seeing' && vehicle === 'Coach'){
            return '4800';
        }else if(selectedTour.name === 'Ooty & Coonoor' && vehicle === 'Etios'){
            return '2500';
        }else if(selectedTour.name === 'Ooty & Coonoor' && vehicle === 'Swift Dzire'){
            return '2500';
        }else if(selectedTour.name === 'Ooty & Coonoor' && vehicle === 'Xylo'){
            return '3500';
        }else if(selectedTour.name === 'Ooty & Coonoor' && vehicle === 'Innova'){
            return '4000';
        }else if(selectedTour.name === 'Ooty & Coonoor' && vehicle === 'Traveller'){
            return '4500';
        }else if(selectedTour.name === 'Ooty & Coonoor' && vehicle === 'Coach'){
            return '5000';
        }else if(selectedTour.name === 'Ooty & Pykara' && vehicle === 'Etios'){
            return '2500';
        }else if(selectedTour.name === 'Ooty & Pykara' && vehicle === 'Swift Dzire'){
            return '2500';
        }else if(selectedTour.name === 'Ooty & Pykara' && vehicle === 'Xylo'){
            return '3500';
        }else if(selectedTour.name === 'Ooty & Pykara' && vehicle === 'Innova'){
            return '4000';
        }else if(selectedTour.name === 'Ooty & Pykara' && vehicle === 'Traveller'){
            return '4500';
        }else if(selectedTour.name === 'Ooty & Pykara' && vehicle === 'Coach'){
            return '5000';
        }else if(selectedTour.name === 'Ooty & Avalanche' && vehicle === 'Etios'){
            return '2500';
        }else if(selectedTour.name === 'Ooty & Avalanche' && vehicle === 'Swift Dzire'){
            return '2500';
        }else if(selectedTour.name === 'Ooty & Avalanche' && vehicle === 'Xylo'){
            return '3500';
        }else if(selectedTour.name === 'Ooty & Avalanche' && vehicle === 'Innova'){
            return '4000';
        }else if(selectedTour.name === 'Ooty & Avalanche' && vehicle === 'Traveller'){
            return '4500';
        }else if(selectedTour.name === 'Ooty & Avalanche' && vehicle === 'Coach'){
            return '5000';
        }else if(selectedTour.name === 'Pykara & Mudumalai' && vehicle === 'Etios'){
            return '3200';
        }else if(selectedTour.name === 'Pykara & Mudumalai' && vehicle === 'Swift Dzire'){
            return '3000';
        }else if(selectedTour.name === 'Pykara & Mudumalai' && vehicle === 'Xylo'){
            return '3500';
        }else if(selectedTour.name === 'Pykara & Mudumalai' && vehicle === 'Innova'){
            return '4000';
        }else if(selectedTour.name === 'Pykara & Mudumalai' && vehicle === 'Traveller'){
            return '5500';
        }else if(selectedTour.name === 'Pykara & Mudumalai' && vehicle === 'Coach'){
            return '6000';
        }
    };// Tour Package Prices

    const constructWhatsAppLink = () => {
        const selectedTour = tourData[currentSlide];
        const price = calculatePrice();

        // Validation check
        if (!vehicle) {
            alert("I can't make you fly 🥹, Kindly Select a Vehicle!");
            return;
        }else if (!date){
            alert("I am familiar with Astrology but not as far to predict the date, Please Fill the Date to proceed 🤝")
            return;
        }
        const message = `Booking Details:\nCar: ${selectedTour.name}\nPackage: ${selectedTour.pack}\nDate: ${date} \nPrice: ${price}`;
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
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="26" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="26" viewBox="0 0 448 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
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
            <div className="grid grid-rows-2 md:grid-cols-2 md:gap-10 lg:gap-24 xl:gap-32 relative z-0">
                <div className="rounded-lg overflow-hidden bg-[#5A5A5A] mb-[10rem]">
                    <Slider {...settings}>
                        {tourData.map((tour, index) => (
                            <div key={index} className="grid grid-rows-3 justify-items-center py-5">
                                <div className="flex justify-center"><h3 className="font-display text-white text-xl lg:text-2xl xl:text-2xl font-bold">{tour.name}</h3></div>
                                <img src={tour.image} className="w-fit h-fit py-5"></img>
                                <div className="flex justify-center"><p className="font-display text-white text-sm">{tour.pack}</p></div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="bg-[#FCC120] rounded-lg mt-[-5rem] lg:mt-0 xl:mt-0 md:mt-0">
                    <div className="flex flex-col gap-10 lg:gap-8 xl:gap-12 p-[2rem]">
                        <div>
                            <label className="font-display font-medium">Vehicle</label>
                            <select
                                value={vehicle}
                                onChange={(e) => {
                                    setVehicle(e.target.value);
                                    // Ensure drop location is different after changing pickup location
                                    calculatePrice();
                                }}
                                className="bg-transparent w-full py-2 leading-tight focus:outline-none"
                            >
                                {cars.map((car, index) => (
                                    <option key={index} value={car}>
                                        {car}
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
                        <div>
                        <p className="font-display font-medium">{seat}  Seats</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="font-display font-medium pr-10 lg:pr-20">{tourData[currentSlide].name}</p>
                            <p className="font-display font-medium">{tourData[currentSlide].pack}</p>
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

export default Tour