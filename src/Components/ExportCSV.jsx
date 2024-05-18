import React from 'react'
import { CiCalendar } from "react-icons/ci";
const ExportCSV = () => {
  return (
    <>
    <div className='flex justify-between items-center px-5 py-3'>
        <div>
            <p className='text-[20px] text-black font-bold '>Performance</p>
        </div>
        <div className='flex justify-center items-center gap-3 '>
            <div className='flex justify-center items-center px-2 py-1 border border-gray-200 rounded-lg 
            gap-2 shadow-sm'>
            <p className='text-black font-bold'><CiCalendar/></p>
            <p className='text-sm'><span className='text-black font-bold'>Date</span>:15,May,2024</p>
            </div>
            <button className='px-5 py-2 bg-blue-500 text-white rounded-lg text-sm'>Export as CSV</button>
        </div>
    </div>
    </>
  )
}

export default ExportCSV