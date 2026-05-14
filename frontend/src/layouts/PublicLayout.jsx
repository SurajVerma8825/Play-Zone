// ==========================================
// FILE: src/layouts/PublicLayout.jsx
// ==========================================

import Navbar from '@/components/navbar/Navbar';

import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <Outlet />
    </div>
  );
};

export default PublicLayout;
