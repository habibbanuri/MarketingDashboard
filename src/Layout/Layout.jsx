import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Header/Header'
import SideBar from '../Components/SideBar';
import ExportCSV from '../Components/ExportCSV';
const Layout = () => {
  return (
    <>
    <div className='flex items-start'>
        <SideBar/>
        <div className='w-[100%]'>
        <Header/>
        <ExportCSV/>
        <Outlet  />
        </div>
    </div>
    </>
  )
}

export default Layout