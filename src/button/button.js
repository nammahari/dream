import React from 'react';
const Button = (props) =>{
    return(
        <button className='foucs-outline-none bg-[#FCC120] text-white text-lg font-[Poppins] px-6 py-2 rounded-[4px] md:ml-10 hover:bg-[#49AA41] outline-offset-none ring-none md:text-lg'>
            {props.children}
        </button>
    )
}

export default Button;