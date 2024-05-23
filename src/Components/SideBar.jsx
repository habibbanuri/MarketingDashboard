import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
// import Sidedata from "./SidebarData/Sidedata";
import {PiSquaresFourBold } from "react-icons/pi";
import { FaRegFolderClosed  } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { MdElectricBolt } from "react-icons/md";
import { IoPieChartSharp } from "react-icons/io5";
import { LuUserSquare } from "react-icons/lu";
import { FaFile } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { FaPowerOff,FaPlus } from "react-icons/fa6";



const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("/");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setSidebarOpen(true);
  };
  return (
    <>
      <div className="flex relative z-50  lg:hidden  " onClick={toggleSidebar}>
        <LuMenu className=" absolute md:top-0 top-5 cursor-pointer text-[40px] p-1 bg-pureWhite shadow-sidebox text-black rounded-full ml-3 " />
      </div>      
      {/*---------------------------- Sidebar start here---------------- */}
      <div
        className={`md:flex md:flex-col pb-2 absolute lg:relative duration-1000 z-50 lg:duration-0 lg:flex pt-5 bg-white h-screen border-r-2 border-gray-200   ${
          isSidebarOpen
            ? "translate-x-[-400px]  lg:translate-x-0 "
            : "translate-x-[0px]"
        }`}
      >
       
        <div
          className=" shadow-sidebox w-[220px] h-screen md:h-full lg:h-full 
          text-center  font-mono font-normal text-[16px] leading-8 mb-5 "
        >
          <div className="flex justify-start items-center  gap-3 pl-4  ">
            <p className="p-1 text-white bg-red-400 rounded-full "><MdElectricBolt/></p>
            <p className="text-black text-3xl font-bold">Ramora</p>
          </div>
          <div className="flex justify-start items-center gap-3 pl-4 mt-3">
            <img className="w-[50px] h-auto rounded-lg border-2 border-red-300 " src="download.jpeg"  alt="" />
            <p className="text-base font-bold ">Sakura</p>
          </div>
          <div className="flex justify-start items-center mt-4 mb-1 ml-4">
            <p className="text-sm text-gray-400 font-bold">MEMU</p>
          </div>
          <Link
            to="/dashboard"
            onClick={() => handleMenuClick("/dashboard")}
            className={` ${activeMenu === "/dashboard" && "active"}`}
          >
            <div className="flex justify-start items-center w-[190px] h-auto  gap-3 ml-4 px-4 py-1 rounded-lg mb-1 text-white bg-blue-500 hover:text-white hover:bg-blue-500 ">
              <PiSquaresFourBold className="icons" />
              <p className=" font-bold text-sm text-white hover:text-white ">Dashboard</p>
            </div>
          </Link>

          <Link
            to=""
            onClick={() => handleMenuClick("user")}
            className={` ${activeMenu === "user" && "active"}`}
          >
            <div className="flex justify-start items-center gap-3 ml-4 hover:w-[190px] hover:h-auto px-4 py-1 rounded-lg mb-1 hover:text-white hover:bg-blue-500 ">
              <IoPieChartSharp className="icons" />
              <p className="text-black font-bold text-sm hover:text-white">Compaigh</p>
            </div>
          </Link>

          <Link
            to=""
            onClick={() => handleMenuClick("vendor")}
            className={`menu-link ${activeMenu === "vendor" && "active"}`}
          >
            <div className="flex justify-start items-center gap-3 ml-4 hover:w-[190px] hover:h-auto  px-4 py-1 rounded-lg mb-1 hover:text-white hover:bg-blue-500 ">
              <LuUserSquare className="icons" />
              <p className="text-black font-bold text-sm">Users</p>
            </div>
          </Link>

          <Link
            to=""
            onClick={() => handleMenuClick("booking")}
            className={`menu-link ${activeMenu === "booking" && "active"}`}
          >
            <div className="flex justify-start items-center gap-3 hover:w-[190px] hover:h-auto ml-4 px-4 py-1 rounded-lg mb-1 hover:text-white hover:bg-blue-500">
              <FaRegFolderClosed  className="icons" />
              <p className="text-black font-bold text-sm">Analytics</p>
            </div>
          </Link>

          <Link
            to=""
            onClick={() => handleMenuClick("analytics")}
            className={`menu-link ${activeMenu === "analytics" && "active"}`}
          >
            <div className="flex justify-start items-center gap-3 hover:w-[190px] hover:h-auto ml-4 px-4 py-1 rounded-lg mb-1 hover:text-white hover:bg-blue-500">
              < FaFile className="icons" />
              <div className="flex justify-between items-center gap-14">
              <p className="text-black font-bold text-sm">Billing</p>
                <FaPlus className="text-[18px] font-bold text-blue-500 p-1 rounded-full bg-gray-300 "/>
              </div>
            </div>
            
          </Link>
          <div className="flex justify-start items-center mt-2 mb-1 ml-4">
            <p className="text-sm text-gray-400 font-bold">HELP</p>
          </div>

          <Link
            to=""
            onClick={() => handleMenuClick("language")}
            className={`menu-link ${activeMenu === "language" && "active"}`}
          >
            <div className="flex justify-start items-center gap-3 hover:w-[190px] hover:h-auto ml-4 px-4 py-1 rounded-lg mb-1 hover:text-white hover:bg-blue-500 ">
              <MdDownloadForOffline className="icons" />
              <p className="text-black font-bold text-sm">Internal pages</p>
            </div>
          </Link>
          <Link
            to=""
            onClick={() => handleMenuClick("adminprofile")}
            className={`menu-link ${activeMenu === "adminprofile" && "active"}`}
          >
            <div className="flex justify-start items-center gap-3 hover:w-[190px] hover:h-auto ml-4 px-4 py-1 rounded-lg mb-1 hover:text-white hover:bg-blue-500 ">
              < HiOutlineDocumentArrowUp className="icons" />
              <p className="text-black font-bold text-sm">Documentations</p>
            </div>
          </Link>
          <Link
            to=""
            onClick={() => handleMenuClick("adminprofile")}
            className={`menu-link ${activeMenu === "adminprofile" && "active"}`}
          >
            <div className="flex justify-start items-center gap-3 hover:w-[190px] hover:h-auto ml-4 px-4 py-1 rounded-lg mb-1 hover:text-white hover:bg-blue-500">
              < IoMdSettings className="icons" />
              <p className="text-black font-bold text-sm">Setting</p>
            </div>
          </Link>
                </div>
                <div className="flex justify-between items-center pl-4 ">
        <Link
            to=""
            onClick={() => handleMenuClick("adminprofile")}
            className={`menu-link ${activeMenu === "adminprofile" && "active"}`}
            >
            <div className="flex justify-start items-center gap-3  px-4 py-1 rounded-lg mb-1 ">
              < FaPowerOff className="icons" />
              <p className="text-black font-bold text-sm">Log out</p>
            </div>
          </Link>
            </div>

      </div>
    </>
  );
};

export default SideBar;
