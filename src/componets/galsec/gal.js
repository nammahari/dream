import React from "react";
import Gal1 from "../../assest/gallery1.png";
import Gal2 from "../../assest/gallery2.png";

function Gal(){
    return(
        <div>
            <div className="hidden justify-items-center gap-5 mb-10 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 md:px-5">
            <img src={Gal1} alt="Gallery"></img>
            <img src={Gal2} alt="Gallery"></img>
        </div> 
        <div className="grid grid-rows-2 gap-5 px-5 justify-items-center py-5 lg:hidden md:hidden">
            <img src={Gal1} alt="Gallery"></img>
            <img src={Gal2} alt="Gallery"></img>
        </div> 
        
        </div>
          
    )
}

export default Gal;