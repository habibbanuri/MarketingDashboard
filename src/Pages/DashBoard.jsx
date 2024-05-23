import React from 'react'
import { HiChartPie } from "react-icons/hi";

const DashBoard = () => {
  const arr =[
    {
      img:'google.png',
      Name:'Google',
      date:'23,may,2023'
    },
    {
      img:'facebook.png',
      Name:'Facebook',
      date:'23,may,2023'
    },
    {
      img:'instagram.webp',
      Name:'instagram',
      date:'23,may,2023'
    },
    {
      img:'twitter.png',
      Name:'Twitter',
      date:'23,may,2023'
    }
  ]
  return (
    <>
    <div className='flex px-5 gap-4 '>
      {/* First div start here */}
      <div className=' w-[40%] h-[250px] rounded-lg py-2 shadow-md bg-blue-100'>
        <div className='flex justify-between items-center px-3'>
          <div>
          <p className='text-[20px] font-medium text-black'>$4.435,43</p>
          <p className='text-base text-gray-500 font-normal'>increase</p>
          </div>
          <p className='px-3 py-1 bg-green-400 rounded-full text-white'>23%</p>
        </div>
      </div>
      {/* Second div start here */}
      <div className='w-[20%] h-[150px] rounded-lg bg-blue-100'>
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
      {/* Third section start here */}
        <div className='w-[40%] h-auto bg-gray-100 shadow-md rounded-md px-3 py-2'>
        <div className='flex justify-between items-center pb-4'>
                  <div>
                    <p className='text-[20px] text-black font-medium'>Top Trafic Source</p>
                  </div>
                  <div>
                    <p className='text-sm text-blue-500'>View all</p>
                  </div>
                </div>
          {
            arr.map((items,index)=>{
              // const [img,Name,date]=items
              return(
                <>
              <div className='flex justify-between items-center pb-4'>
                <div className='flex justify-center items-center gap-2'>
                <p className='font-bold'>{index+1}.</p>
                <img src={items.img} alt="" className='w-[55px] h-auto' />
                <div>
                  <p className='font-bold text-black text-sm'>{items.Name}</p>
                  <p className='text-gray-500'>{items.date}</p>
                </div>
                </div>
                <div>
                  <p className='text-black font-bold text-sm'>43.34555K</p>
                  <p className='text-sm text-gray-500'>Impression</p>
                </div>
              </div>
              
                </>
              )
            })
          }
        </div>
      </div>      
          
    </>
  )
}

export default DashBoard