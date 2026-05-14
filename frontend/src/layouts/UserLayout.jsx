import { PrivateNavbar } from '@/Index';
import React from 'react'
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
 return (
    <div className='min-h-screen bg-[#F7F4FF]'>
      <PrivateNavbar />

      <Outlet />
    </div>
  );
}

export default UserLayout
