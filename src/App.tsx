import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import ScrollToTopButton from "./components/ScrollToTopButton";
import HeroesGala from "./pages/HeroesGala";
import OurImpact from "./pages/OurImpact";
import OurWork from "./pages/OurWork";
import StoriesPage from "./pages/Stories";
import { ErrorPage } from "./pages/ErrorPage";
import Login from "./pages/Login";
import UserProfile from "./pages/Profile";

const App = () => {
  useTheme();
  return (
    <>
      <div className="overflow-x-hidden bg-[var(--brand-bg)] text-[var(--brand-text)] min-h-screen transition-colors duration-500">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
        <CookieConsent />
      </div>
    </>
  );
};

export default App;
