import React from 'react'
import Veggy from "../images/Mask Group 8.png";
import Dinners from "../images/dinners.svg";
import recipes from "../images/recipes-direct.svg";

const Recipes = () => {
  return (
    <div className="flex items-center p-3 h-[inherit]">
        <div className="flex-1 flex items-center justify-center h-[inherit]">
          <img
            className="object-cover h-[inherit] animate-pulse"
            src={Veggy}
            alt="main-imge"
          />
        </div>
        <div className="flex-1 flex items-center">
          <div className="pl-10">
            <img src={Dinners} alt="" />
            <img src={recipes} alt />
            <button className="py-2 px-4 uppercase bg-[#A2DE96]">
              Shop Now
            </button>
          </div>
        </div>
    </div>
  )
}

export default Recipes