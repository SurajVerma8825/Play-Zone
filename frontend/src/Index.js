//! Public Pages
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import GameDetails from './pages/public/GameDetails';
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import Search from './pages/public/Search';
import Signup from './pages/public/Signup';

//! Users Pages
import Checkout from './pages/user/Checkout';
import Dashboard from './pages/user/Dashboard';
import MyBookings from './pages/user/MyBookings';
import PaymentSuccess from './pages/user/PaymentSuccess';
import Profile from './pages/user/Profile';

//! Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import VerifyInstitutions from './pages/admin/VerifyInstitutions';

//! Institution Pages
import AddGame from './pages/institution/AddGame';
import InstitutionDashboard from './pages/institution/InstitutionDashboard';
import ManageGames from './pages/institution/ManageGames';

//! Navbar Components
import PrivateNavbar from './components/navbar/PrivateNavbar';
import PublicNavbar from './components/navbar/PublicNavbar';

//!Card Components
import BookingCard from './components/cards/BookingCard';
import CategoryCard from './components/cards/CategoryCard';
import GameCard from './components/cards/GameCard';

//!Form Components
import CheckoutForm from './components/forms/CheckoutForm';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';
import SearchForm from './components/forms/SearchForm';

//!Common Components
import Button from './components/common/Button';
import Loader from './components/common/Loader';
import Modal from './components/common/Modal';

//! Layouts
import PublicLayout from './layouts/PublicLayout';
import UserLayout from './layouts/UserLayout';

//!Sections Components
import Categories from './components/sections/Categories';
import FeaturedGames from './components/sections/FeaturedGames';
import Footer from './components/sections/Footer';
import HeroSection from './components/sections/HeroSection';
import PartnerCTA from './components/sections/PartnerCTA';

export {
  About,
  AddGame,
  AdminDashboard,
  BookingCard,
  Button,
  CategoryCard,
  Checkout,
  CheckoutForm,
  Contact,
  Dashboard,
  GameCard,
  GameDetails,
  Home,
  InstitutionDashboard,
  Loader,
  Login,
  LoginForm,
  ManageGames,
  Modal,
  MyBookings,
  PaymentSuccess,
  PrivateNavbar,
  Profile,
  PublicNavbar,
  RegisterForm,
  Search,
  SearchForm,
  Signup,
  VerifyInstitutions,
  UserLayout,
  PublicLayout,
  Categories,
  FeaturedGames,
  Footer,
  HeroSection,
  PartnerCTA,
};
