// ==========================================
// FILE: src/components/navbar/Navbar.jsx
// ==========================================

import PrivateNavbar from './PrivateNavbar';

import PublicNavbar from './PublicNavbar';

const Navbar = () => {
  // ==========================================
  // TEMP LOGIN STATE
  // ==========================================

  const isLoggedIn = false;

  // ==========================================
  // RETURN NAVBAR
  // ==========================================

  return <>{isLoggedIn ? <PrivateNavbar /> : <PublicNavbar />}</>;
};

export default Navbar;
