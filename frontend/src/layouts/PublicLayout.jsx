import { Footer, PublicNavbar } from '@/Index';
import React from 'react'
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className='min-h-screen bg-[#F7F4FF]'>
      <PublicNavbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default PublicLayout
