import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import HeroRotator from "./components/HeroRotator";
import ProductSlider from './components/ProductSlider';
import WatermelonBanner from "./components/WatermelonBanner";
import BlogSlider from "./components/BlogSlider";

import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import ScrollToTop from './components/ScrollToTop';
import Register from './components/Register';

// صفحه اصلی با همه اجزا + Navbar + Footer
function MainLayout() {
  return (
    <>
      <Navbar />
      <HeroRotator />
      <Banner />
      <Categories />
      <ProductList />
      <ProductSlider />
      <WatermelonBanner />
      <BlogSlider />
      <Footer /> {/* فوتر اینجا */}
    </>
  );
}

// صفحات مثل Login و ForgotPassword با Navbar و Footer
function PageLayoutWithNavbar({ children }) {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        {children}
      </div>
      <Footer /> {/* فوتر اینجا */}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={
          <PageLayoutWithNavbar>
            <Login />
          </PageLayoutWithNavbar>
        } />
        <Route path="/forgot-password" element={
          <PageLayoutWithNavbar>
            <ForgotPassword />
          </PageLayoutWithNavbar>
        } />
        <Route
  path="/register"
  element={
    <PageLayoutWithNavbar>
      <Register />
    </PageLayoutWithNavbar>
  }
/>
      </Routes>
    </Router>
  );
}

export default App;
