import React from 'react';
import SideBar from './Shared/SideBar/SideBar';

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
                    <p>this is main contetn</p>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;