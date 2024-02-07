import React from 'react';
import SideBar from './Shared/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import NavBar from './Shared/NavBar/NavBar';

const DashboardLayout = () => {
    return (
        <>
            <div className='flex max-h-screen'>
                {/* Dashboard sidebar contents starts here */}
                <div className='border-r'>
                    <SideBar></SideBar>
                </div>
                {/* Dashboard main content starts here */}
                <div className='bg-[#F8F8F8] w-full overflow-y-auto'>
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;