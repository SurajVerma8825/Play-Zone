import {
  About,
  Checkout,
  Contact,
  Dashboard,
  GameDetails,
  Home,
  Login,
  MyBookings,
  PaymentSuccess,
  Profile,
  PublicLayout,
  Search,
  Signup,
  UserLayout,
} from '@/Index';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ========================================= */}
        {/* PUBLIC ROUTES */}
        {/* ========================================= */}

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Signup />} />

          <Route path="/search" element={<Search />} />

          {/* GAME DETAILS */}
          <Route path="/games/:id" element={<GameDetails />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ========================================= */}
        {/* USER ROUTES */}
        {/* ========================================= */}

        <Route element={<UserLayout />}>
          <Route path="/user/dashboard" element={<Dashboard />} />

          <Route path="/user/bookings" element={<MyBookings />} />

          <Route path="/user/profile" element={<Profile />} />

          {/* CHECKOUT */}
          <Route path="/checkout/:id" element={<Checkout />} />

          {/* PAYMENT SUCCESS */}
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
