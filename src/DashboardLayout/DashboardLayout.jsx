import React, { useState } from 'react';
import SideBar from './Shared/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import NavBar from './Shared/NavBar/NavBar';
import './CustomScroll.css'

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleOpenSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
        console.log(isSidebarOpen)
    }

    return (
        <>
            <div className='flex max-h-screen'>
                {/* Dashboard sidebar contents starts here */}
                {/* without transition */}
                {/* <div className={`customScroll min-w-[250px] xl:min-w-[315px] border-r overflow-x-hidden overflow-y-auto ${isSidebarOpen ? "" : "hidden lg:flex"}`}>
                    <SideBar></SideBar>
                </div> */}
                {/* with transition */}
                <div className={`customScroll min-w-[250px] xl:min-w-[315px] border-r overflow-x-hidden overflow-y-auto transition-all duration-300  ${isSidebarOpen ? "ml-0 " : "-ml-[280px] lg:ml-0"}`}>
                    <SideBar></SideBar>
                </div>
                {/* Dashboard main content starts here */}
                <div className='bg-[#F8F8F8] w-full overflow-y-auto'>
                    <NavBar handleOpenSidebar={handleOpenSidebar} isSidebarOpen={isSidebarOpen}></NavBar>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;