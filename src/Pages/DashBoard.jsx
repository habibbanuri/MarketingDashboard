import React from 'react'
import { HiChartPie } from "react-icons/hi";

const DashBoard = () => {
  const arr =[
    {
      img:'download.jpeg',
      Name:'Google',
      date:'23,may,2023'
    },
    {
      img:'download.jpeg',
      Name:'Google',
      date:'23,may,2023'
    },
    {
      img:'download.jpeg',
      Name:'Google',
      date:'23,may,2023'
    },
  ]
  return (
    <>
    <div className='flex px-5 gap-4 '>
      {/* First div start here */}
      <div className=' w-[40%] h-auto rounded-lg py-2 shadow-md'>
        <div className='flex justify-between items-center px-3'>
          <div>
          <p className='text-[20px] font-medium text-black'>$4.435,43</p>
          <p className='text-base text-gray-500 font-normal'>increase</p>
          </div>
          <p className='px-3 py-1 bg-green-400 rounded-full text-white'>23%</p>
        </div>
      </div>
      {/* Second div start here */}
      <div className='w-[20%] h-auto rounded-lg bg-blue-100'>
        <div className=''>
        <div className='flex justify-center gap-4 py-3 items-center'>
          <p className='text-[25px] text-blue-500'><HiChartPie/></p>
          <p className='text-2xl text-black font-medium'>453.4k</p>
        </div>

        <div className='flex justify-center items-center'>
          <p className='text-black text-sm font-medium'> SocialMedia Marketing</p>
        </div>
          <p className='flex justify-end items-end pr-3 pt-3 text-2xl pb-3'><HiChartPie className=''/></p>
        </div>
      </div>
        
      </div>
      {/* Third div start here */}
      
          {arr.map((item,index)=>{
            return( 
              <div className=' w-[40%] rounded-lg shadow-lg flex justify-between items-center'>
        <div className='flex gap-3'>
              <img src={item.img} className='w-[50px] h-auto:' alt="" />
              <div className=''>
          <p>{item.Name}</p>
          <p>{item.date}</p>
          </div>
        </div>
        <div>
          <p>543.3k</p>
          <p>impression</p>
        </div>
      </div>
            )
          })}
    </>
  )
}

export default DashBoard