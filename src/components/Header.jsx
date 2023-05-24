import React, { useState } from 'react'
import './intro.css'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className='h-[80px] z-10 w-full bg-[#fff] px-10 flex items-center justify-between fixed'>
      <div className="flex items-center">
        <div className='green-part'>
          <div className='white-part'>
            <div className='egg-part'></div>
          </div>
        </div>
        <div className="ml-2">
          <h1 className=' uppercase font-bold text-[24px] zeco'>ZEcco</h1>
          <h4 className='text-[12px]'>Organic Farm</h4>
        </div>
      </div>
      <ul className="flex items-center gap-10 lists">
        <li className='relative'>
          <a className='flex items-center gap-1' href='#'>
            <span>Recipe Box</span>
            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="#1D1D1D" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </a>
        </li>
        <li lassName='relative duration-500'>
          <a className={`flex items-center gap-1 ${open && 'text-[#FF6B6B]'}`} onClick={()=>setOpen(!open)} href='#'>
            <span>Products</span>
            <svg class={`mr-1 h-5 w-5 text-gray-400 ${open && "rotate-180"}`} viewBox="0 0 20 20" fill={`${open ? "#FF6B6B" : "#1D1D1D"}`} aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </a>

          <div className={` ${open ? "block" : "hidden"} rounded absolute border w-[160px] p-4 bg-[#fff] top-[90%]`}>
            <li><a className='' href='#'>Fruit</a></li>
            <li><a href='#'>Vegetables</a></li>
            <li><a href='#'>Eggs</a></li>
            <li><a href='#'>Milk</a></li>
            <li><a href='#'>Meat</a></li>
            <li><a href='#'>Fresh drinks</a></li>
          </div>
        </li>
        <li><a href='#'>About us</a></li>
        <li><a href='#'>Visit us</a></li>
      </ul>
      <div className="flex items-center gap-5">
        <a>Log in</a>
        <a className='border py-2 px-4 text-sm'>Create account</a>
      </div>
    </nav>
  )
}

export default Header