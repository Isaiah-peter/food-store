import React from 'react'
import Dish from "../images/dish.png"
import "./intro.css"

const Intro = () => {
  return (
    <div className='flex items-center background-img'>
      <div className="place-content-start flex-1">
        <div className='pl-[210px]'>
          <h1 className='text-[40px] font-extrabold'>You deserve better</h1>
          <h2 className='font-thin text-[25px] w-[55%] my-1'>Consider this a taste intervention.</h2>
          <button className="py-2 px-4 text-[12px] uppercase bg-[#A2DE96]">
          LEARN MORE
          </button>
        </div>
      </div>
      <div className='flex-1'>
        <img src={Dish} alt="dish" />
      </div>
    </div>
  )
}

export default Intro