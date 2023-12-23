
import React from 'react';
import Dream from '../../assest/aboutDream.svg'
import Vision from '../../assest/vision.svg'
import Footer from '../footer/footer';
const About = () => {
  return (
    <div>
      <div className='grid grid-rows-1 gap-10 justify-items-center py-20 px-10 lg:px-40 md:px-20'>
      <p className='text-black font-medium text-5xl font-display text-center '>About Dream Destiny</p>
      <p className='text-[#1A202C] text-lg font-normal text-justify py-5    '>At Dream Destiny, we believe that every journey should be a memorable experience. Established with a passion for providing exceptional travel services, we take pride in being your trusted partner for exploring the breathtaking beauty of Nilgiris and its surrounding areas. Whether you're a solo traveler, a couple seeking a romantic getaway, a family on vacation, or a group of friends ready for adventure, our dedicated team is here to make your travel dreams a reality.</p>
      <img className='w-full' src={Dream} alt="Dream Destiny Vector" />
      <p className='text-black font-medium text-5xl font-display py-5 text-center '>Our Vision</p>
     <div className='text-[#1A202C] text-lg font-normal text-justify' >  
        <p>
        At Dream Destiny, we don't just provide transportation; 
        </p>
        <p>
        we facilitate journeys that leave a lasting imprint on your heart. 
        </p>
        <p>
        Let us be the architects of your travel dreams, guiding you through the picturesque landscapes and cultural wonders of Ooty and beyond.
        </p>
     </div>
     <img className='w-full' src={Vision} alt="Dream Destiny Vector" />
     <p className='text-black font-medium text-5xl font-display text-center'>Our Values</p>
    <div className='text-[#1A202C] text-lg font-normal text-justify'>
        <ol className='list-decimal list-inside'>
        <li><b>Expertise and Experience: </b>With years of experience in the industry, we have become the go-to choice for travelers seeking reliable and knowledgeable drivers to navigate the scenic routes of Ooty. Our drivers are not just professionals; they are local experts, well-versed in the hidden gems, cultural nuances, and historical significance of the destinations we cover.</li>
        <li className='mt-5'><b>Comprehensive Fleet: </b>Our fleet comprises a wide range of vehicles, from cozy sedans for intimate getaways to spacious SUVs for family vacations and group excursions. All our vehicles are meticulously maintained, ensuring both safety and comfort throughout your journey.</li>
        <li className='mt-5'><b>Tailored Tour Packages: </b>Looking to explore Ooty's enchanting beauty or venture beyond to destinations like Coimbatore, Mettupalayam, Bengaluru, Mysore, Coorg, Calicut, Wayanad, or Cochin? Our meticulously crafted tour packages cater to various interests and preferences, promising a delightful blend of sightseeing, adventure, and relaxation.</li>
        <li className='mt-5'><b>Personalized Service: </b>We understand that every traveler is unique. Our services are highly customizable, allowing you to design your own itinerary. Whether you're interested in nature trails, historical landmarks, or culinary delights, we tailor our services to match your desires.</li>
        <li className='mt-5'><b>Seamless Intercity Trips: </b>Planning an intercity trip? Dream Destiny is your trusted companion. Enjoy a hassle-free journey from Ooty to cities like Coimbatore, Mettupalayam, Bengaluru, Mysore, Coorg, Calicut, Wayanad, or Cochin, and back. We ensure punctuality, safety, and comfort throughout the trip.</li>
        <li className='mt-5'><b>Affordability and Transparency: </b>Our pricing is transparent, competitive, and devoid of hidden charges. Experience high-quality services that fit your budget, allowing you to indulge in your travel dreams without breaking the bank.</li>
        <li className='mt-5'><b>Customer-Focused Support: </b>Our dedicated customer support team is available around the clock to assist you. Whether you need help with bookings, have inquiries about tour packages, or require support during your journey, we are just a phone call away.</li>
        </ol>
    </div>

      <p className='text-[#1A202C] text-center font-display text-lg font-bold py-5'>Embark on your dream journey with Dream Destiny - where every mile is a memory.</p>
    </div>
    <Footer />
    </div>
  );
};

export default About;
