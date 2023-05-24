import React from 'react'
import Next from "../images/next.svg"
import Previous from "../images/previous.svg"
import Cart from "../images/supermarket.svg"
import Avocado from "../images/avocado.png"
import Egg from "../images/egg.png"
import Plate from "../images/plate.png"

import './intro.css'


const LatestRecipe = () => {
  return (
    <div className='px-[210px] '>
      <div className="flex items-center justify-between mb-4">
        <h1 className='text-[22px] font-light'>Latest recipes</h1>
        <div className="flex items-center gap-9">
          <img src={Previous} className=' cursor-pointer ' />
          <img src={Next} className='rotate-180 cursor-pointer' />
        </div>
      </div>
      <div className="flex items-center gap-20">
        <div className=" flex items-end">
          <img className='w-[110px] h-[110px] object-cover top-0 left-[-20px] rounded-full z-10' src={Egg} />
          <div className="relative ml-[-20px] flex flex-col py-[14px] px-[24px] bg-[#fff] drop-shadow w-[180px] overflow-hidden">
            <h3 className='font-light text-[12px]'>Portobello Baked Eggs with avocado & bread</h3>
            <h2 className='text-[#4EC6A6] text-[16px]'>£8</h2>

            <div className="absolute right-0 bottom-0 t-raduius bg-[#FF947B] w-[30px] h-[25px] flex items-center justify-center">
              <img src={Cart} alt="" />
            </div>
          </div>
        </div>
        <div className=" flex items-end">
          <img className='w-[110px] h-[110px] object-cover top-0 left-[-20px] rounded-full z-10' src={Plate} />
          <div className="relative ml-[-20px] flex flex-col py-[14px] px-[24px] bg-[#fff] drop-shadow w-[180px] overflow-hidden">
            <h3 className='font-light text-[12px]'>Summery salmon, beetroot & spicy mix</h3>
            <h2 className='text-[#4EC6A6] text-[16px]'>£15</h2>

            <div className="absolute right-0 bottom-0 t-raduius bg-[#FF947B] w-[30px] h-[25px] flex items-center justify-center">
              <img src={Cart} alt="" />
            </div>
          </div>
        </div>
        <div className=" flex items-end">
          <img className='w-[110px] h-[110px] object-cover top-0 left-[-20px] rounded-full z-10' src={Avocado} />
          <div className="relative ml-[-20px] flex flex-col py-[14px] px-[24px] bg-[#fff] drop-shadow w-[180px] overflow-hidden">
            <h3 className='font-light text-[12px]'>Backed Avocado Egg with herbs</h3>
            <h2 className='text-[#4EC6A6] text-[16px]'>£8</h2>

            <div className="absolute right-0 bottom-0 t-raduius bg-[#FF947B] w-[30px] h-[25px] flex items-center justify-center">
              <img src={Cart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestRecipe