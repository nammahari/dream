import React from "react";
import Marquee from "react-fast-marquee";

function Review() {
    const Reviews = [
        {
            head: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700629365/dreamdestiny/nammahari_y1afoi.jpg',
            name: 'Nammahari',
            place: 'Chennai,Tamil Nadu',
            review: 'Excellent service! The cab arrived on time, and the driver was very courteous and knowledgeable about Ooty.',
            star: '4.5'
        },

        {
            head: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700654916/dreamdestiny/IMG-20180812-WA0004_1_ylrcot.png',
            name: 'Arawind',
            place: 'Chennai,Tamil Nadu',
            review: 'Had a wonderful experience with this cab service in Ooty. The driver was friendly, and the ride was smooth.',
            star: '4.8'
        },

        {
            head: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700751261/dreamdestiny/WhatsApp_Image_2023-11-23_at_20.22.53_abs86q.jpg',
            name: 'Jagath',
            place: 'Chennai,Tamil Nadu',
            review: 'The cab was in good condition, and the driver knew the routes well. Highly recommended!',
            star: '4.2'
        },

        {
            head: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700751591/dreamdestiny/WhatsApp_Image_2023-11-23_at_12.54_1_bbfygs.png',
            name: 'Abinaya',
            place: 'Coimbatore,Tamil Nadu',
            review: 'I was impressed with the cleanliness of the cab and the polite behavior of the driver.',
            star: '4.2'
        },
        {
            head: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700752666/dreamdestiny/WhatsApp_Image_2023-11-23_at_20.32_1_fba2uz.png',
            name: 'Nishok',
            place: 'Coimbatore,Tamil Nadu',
            review: 'They were flexible with my schedule, and the rates were reasonable. Overall, a stress-free and enjoyable ride.',
            star: '3.8'
        },
        {
            head: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700753223/dreamdestiny/WhatsApp_Image_2023-11-23_at_20.40_1_ulopkr.png',
            name: 'Dharshana',
            place: 'Vellore,Tamil Nadu',
            review: 'Used this cab service for a family trip in Ooty, and it was a great decision.Highly recommended for family travels.',
            star: '4.4'
        },
        {
            head: 'https://res.cloudinary.com/dtqdoinxc/image/upload/v1700753541/dreamdestiny/WhatsApp_Image_2023-11-23_at_20.42_1_bznqw4.png',
            name: 'Manoj',
            place: 'Mettupalayam,Tamil Nadu',
            review: 'Quick response and efficient service. The driver was friendly, and the cab was clean. Made exploring Ooty hassle-free.',
            star: '4.6'
        },
        

    ];
    return (
        <div className='bg-white grid justify-items-center mt-5 lg:mt-0 md:mt-5'>
            <h1 className='text-black px-[4rem] text-center m-3 text-md lg:px-[22rem] md:text-3xl md:px-[14rem] font-medium font-display '>Trusted By Our Happy Customers</h1>
            <p className='font-display text-center text-[8px] px-10 md:text-[10px]'>A high-performing web-based car rental system for any rent-a-car company and website
            </p>
            <Marquee pauseOnHover='true' autoFill='true' speed={20}>
                <div className="mb-10">
                    <ul className="flex gap-6 pl-6">
                        {
                            Reviews.map((item, idx) => (
                                <li key={idx} className="bg-gray-50 rounded-xl mt-3 rounded-box w-[10rem] lg:w-[20rem] md:w-[15rem]">
                                    <figure>
                                        <div className="flex justify-between items-center gap-x-4">
                                            <div className="flex items-center px-5 pt-5 gap-2">
                                                <img src={item.head} alt={item.name} className="w-5 h-5 lg:w-10 lg:h-10 md:w-10 md:h-10 rounded-full" />
                                                <div>
                                                    <span className="block text-gray-800 text-[7px] lg:text-[12px] md:text-[12px] font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-[4px] lg:text-[7px] md:text-[6px] mt-0.5">{item.place}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-end gap-2 pr-5 pt-5">
                                                <span className="lg:text-[9px] md:text-[9px] text-[6px]"><i class="fa-solid fa-star"></i></span>
                                                <span className="block text-gray-800 lg:text-[10px] md:text-[10px] text-[5px] font-semibold ">{item.star}</span>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-gray-700 text-[7px] pt-2 pb-5 px-5 lg:text-[10px] lg:px-5 lg:pt-2 lg:pb-5 md:text-[10px] md:px-5 md:pt-2 md:pb-5">
                                            {item.review}
                                        </p>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </Marquee>
        </div>
    )
}

export default Review;