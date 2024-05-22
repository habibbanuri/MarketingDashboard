import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";

const HeaderIcons = () => {
  return (
    <>
    <div className='flex justify-around items-center  gap-x-3'>
        <div className='text-black bg-gray-200 p-2  rounded text-[20px]'>
        <IoNotificationsOutline/>
        </div>
        <div className='text-black bg-gray-200 p-2  rounded text-[20px]'>
        <FaRegEnvelope/>
        </div>
        <div className='text-black bg-gray-200 p-2  rounded text-[20px]'>
        <IoNotificationsOutline/>
        </div>
    </div>
    </>
  )
}

export default HeaderIcons