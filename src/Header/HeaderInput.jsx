import React from 'react'
import { IoSearch } from "react-icons/io5";

const HeaderInput = () => {
  return (
    <>
    <div className='relative '>
      <p className='absolute top-[8px] left-0 text-[20px] text-gray-400 '><IoSearch/></p>
        <input type="search" placeholder='Search' className='w-[220px] h-[35px] bg-gray-200 text-black outline-none px-6 rounded ' />
    </div>
    </>
  )
}

export default HeaderInput