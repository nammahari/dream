import React from 'react';
import Logo from '../../assest/logo.svg';
import Button from '../../button/button';
import { useState } from 'react';

function Nav(){
    const Links = [
        { name: 'Home', link: '/home' },
        { name: 'Rentals', link: '/booking' },
        { name: 'About Us', link:'/about' },
      ];
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
return(
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
              {Links.map((link) => (
                <li className="text-lg md:ml-10 my-3 text-base">
                  <a
                    href={link.link}
                    className="focus:outline-none focus:none font-medium text-[#4D4D4D] font-[Poppins] md:outline-offset-none ring-none hover:text-[#F3923D]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <a className="md:mt-1 md:mt-1" href="https://wa.me/+919342563416?text=Hello%20I%20Need%20A%20Cab!" target="_blank" rel="noreferrer">
                <Button>
                  Book Cab
                </Button>
              </a>
            </ul>
          </nav>
);    
    
}

export default Nav;