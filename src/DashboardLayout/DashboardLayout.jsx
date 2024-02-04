import React from 'react';
import SideBar from './Shared/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <>
            <div className='flex'>
                {/* Dashboard sidebar contents starts here */}
                <div>
                    <SideBar></SideBar>
                </div>
                {/* Dashboard main content starts here */}
                <div className='bg-[#F8F8F8] w-full'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;