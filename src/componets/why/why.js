import React from "react";
import WhyUsImg from '../../assest/whyusimg.svg';
import whyustag from '../../assest/tag.svg';

function Why(){
    return(
        <div class='whyus'>
        <h1 className="mt-5">Why Choose Us?</h1>

        <p className="text-[8px] text-center px-5">At Dream Destiny, we believe that every journey should be a memorable experience. Established with a passion for providing exceptional travel services, we take pride in being your trusted partner for exploring the breathtaking beauty of Nilgiris and its surrounding areas. Whether you're a solo traveler, a couple seeking a romantic getaway, a family on vacation, or a group of friends ready for adventure, our dedicated team is here to make your travel dreams a reality.</p>


        <div class='whyus-content'>
          <div><img class='whyus-img' src={WhyUsImg} alt='Why choose us'></img></div>
          <div class='whyus-list'>

            <div>
              <h3>Local Expertise</h3>
              <div class='whyus-details'>
                <img class='tag' src={whyustag} alt='tag'></img>
                <div><p>We have extensive knowledge of Ooty and its surrounding areas. Our drivers are local experts, familiar with the best routes, hidden gems, and local attractions, ensuring you get an authentic experience.</p></div>
              </div>
            </div>

            <div>
              <h3>Customer-Centric Approach</h3>
              <div class='whyus-details'>
                <img class='tag' src={whyustag} alt='customer'></img>
                <div><p>We value your time and convenience. Our services are designed to be punctual, reliable, and flexible, catering to your specific travel requirements.</p></div>
              </div>
            </div>

            <div>
              <h3>Affordable Pricing</h3>
              <div class='whyus-details'>
                <img class='tag' src={whyustag} alt='Affordable Pricing'></img>
                <div><p>We offer competitive and transparent pricing with no hidden costs. Enjoy quality services without breaking the bank</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Why;