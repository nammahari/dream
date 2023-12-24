import React from 'react';
import Logo from '../../assest/logo.svg';
import Button from '../../button/button';
import { useState } from 'react';

function Nav() {
  const Links = [
    { name: 'Home', link: '/home' },
    { name: 'Rentals', link: '/booking' },
    { name: 'About Us', link: '/about' },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="md:flex item-center justify-between w-full bg-white border-b-2 border-[#B8B8B8] p-6 relative z-10">
      <div>
        <img src={Logo} alt="logo" className="lg:w-[250px] w-[150px] md:w-[200px]" />
      </div>
      <div
        className="text-2xl absolute right-8 top-8 cursor-pointer md:hidden"
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? (
          <i className="fa-solid fa-times text-[#404040] focus-outline-none"></i>
        ) : (
          <i className="fa-solid fa-bars text-[#404040] focus-outline-nonez"></i>
        )}
      </div>
      <ul
        className={`md:flex item-center md:pb-0 pb-5 absolute md:static bg-white z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${mobileMenuOpen ? 'block' : 'hidden'
          }`}
      >
        {Links.map((link, index) => (
          <li key={index} className="text-lg md:ml-10 my-3 text-base">
            <a
              href={link.link}
              className="focus:outline-none focus:none font-medium text-[#4D4D4D] font-[Poppins] md:outline-offset-none ring-none hover:text-[#F3923D]"
            >
              {link.name}
            </a>
          </li>
        ))}
        <button onClick={() => window.open('tel:+917867995980')}
          className="foucs-outline-none bg-[#FCC120] text-white text-lg font-display font-medium px-6 py-3 rounded md:ml-10 hover:bg-[#49AA41] outline-offset-none ring-none md:text-lg"
        >
          <div className='flex justify-center flex-row gap-3 items-center '>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          <p>Book Now</p>
          </div>
        </button>
      </ul>
    </nav>
  );
}

export default Nav;
