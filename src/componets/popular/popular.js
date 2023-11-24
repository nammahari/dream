import React, { useState } from 'react';
import Rentals from './rentals';
import Tour from './tour';

function Popular() {
        const [showDiv1, setShowDiv1] = useState(true);
        const [showDiv2, setShowDiv2] = useState(false);
    
        const handleShowDiv1 = () => {
            setShowDiv1(true);
            setShowDiv2(false);
        };
    
        const handleShowDiv2 = () => {
            setShowDiv1(false);
            setShowDiv2(true);
        };
    
        return (
            <div>

                <div className='grid justify-items-center mt-5 lg:mt-0 md:mt-5'>
                <h1 className='text-black text-md lg:text-3xl md:text-3xl font-medium font-display '>Most popular vehicle rental deals</h1>
                <p className='mt-5 px-5 lg:px-36 md:px-36 text-center text-[10px] lg:text-sm md:text-sm'>We offer you more varieties of vehicles that would suit your touring needs and we also offer curated Tour packages to attractive destinations around Western Ghats</p></div>
                <button className={`select ${showDiv1 ? 'active' : ''}`} onClick={handleShowDiv1}> Popular Rentals</button>
                <button className={`select ${showDiv2 ? 'active' : ''}`} onClick={handleShowDiv2}>Tour Packages</button>
                <hr className='px-[10rem]'></hr>
                <div id="div1" className={showDiv1 ? 'show' : 'hide'}>
                <Rentals />
                </div>
                <div id="div2" className={showDiv2 ? 'show' : 'hide'}>
                <Tour />
                </div>
            </div>
        );
    }

export default Popular;
