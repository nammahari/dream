import React from 'react';
import Cover from '../../assest/cover.svg';
import Coverm from '../../assest/coverm.svg';
import Popular from '../popular/popular.js';
import Why from '../why/why.js';
import Gal from '../galsec/gal.js';
import BookNow from '../booking/hero_selection.js';
import Footer from '../footer/footer.js';
import Review from '../review/review.js';
// import Rentals from './componets/rentals.js';
// import Tour from './componets/tour.js';
// import Footer from './componets/footer/footer.js';

function Home() {
  
  return (

    <body className="bg-white w-full">
      <header>
        <div className="md:flex justify-center w-full">
          <img src={Coverm} className="w-full max-h-800 md:hidden" alt="Mobile Cover" />
          <img src={Cover} className="w-full hidden md:block" alt="Desktop Cover" />
        </div>
        <div className="md:flex justify-center w-full">
          <BookNow /></div>
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
