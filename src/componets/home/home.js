import React from 'react';
import Cover from '../../assest/cover.svg';
import Coverm from '../../assest/coverm.svg';
import Popular from '../popular/popular.js';
import Why from '../why/why.js';
import Gal from '../galsec/gal.js';
import Review from '../review/review.js';
import Footer from '../footer/footer.js'
import HeroBook from '../booking/booknow.js';
// import Rentals from './componets/rentals.js';
// import Tour from './componets/tour.js';
function Home() {
  
  return (

    <body className="bg-white w-full">
      <header>
        <div className="md:flex justify-center w-full relative z-0">
          <img src={Coverm} className="w-full max-h-800 md:hidden" alt="Mobile Cover" />
          <img src={Cover} className="w-full hidden md:block" alt="Desktop Cover" />
        </div>
        <div className='px-10 pb-10 md:mt-[-4rem] mt-[-10rem]'>
          <HeroBook />
        </div>
      </header>
      <main>

        <div class='content'>
          <Popular />
          <Why />
          <Gal />
          <Review />
          <Footer />
        </div>
      </main>
    </body>

  );
}

export default Home;
