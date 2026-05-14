// ==========================================
// FILE: src/layouts/InstitutionLayout.jsx
// ==========================================

import { Outlet } from 'react-router-dom';

import InstitutionNavbar from '@/components/institution/InstitutionNavbar';

import InstitutionSidebar from '@/components/institution/InstitutionSidebar';

const InstitutionLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F7F4FF]">

      {/* SIDEBAR */}
      <InstitutionSidebar />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <InstitutionNavbar />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default InstitutionLayout;
