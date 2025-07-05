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
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/blog';
import CommentForm from './components/CommentForm';
import BlogDetail from './components/BlogDetail';
import DogBreedsArticle from './components/DogBreedsArticle';
import CatBreedsArticle from './components/CatBreedsArticle';
import CatFoodArticle from './components/CatFoodArticle';
import DogFoodArticle from './components/DogFoodArticle';
import DogCareGuide from './components/DogCareGuide';
import ShopPage from './components/ShopPage';
import Cart from './components/Cart';
import OrderComplete from "./components/OrderComplete";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <Footer />
    </>
  );
}

function PageLayoutWithNavbar({ children }) {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        {children}
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<PageLayoutWithNavbar><Login /></PageLayoutWithNavbar>} />
          <Route path="/forgot-password" element={<PageLayoutWithNavbar><ForgotPassword /></PageLayoutWithNavbar>} />
          <Route path="/register" element={<PageLayoutWithNavbar><Register /></PageLayoutWithNavbar>} />
          <Route path="/about" element={<PageLayoutWithNavbar><About /></PageLayoutWithNavbar>} />
          <Route path="/contact" element={<PageLayoutWithNavbar><Contact /></PageLayoutWithNavbar>} />
          <Route path="/blog" element={<PageLayoutWithNavbar><Blog /></PageLayoutWithNavbar>} />
          <Route path="/blog/:id" element={<PageLayoutWithNavbar><BlogDetail /></PageLayoutWithNavbar>} />
          <Route path="/comment-form" element={<PageLayoutWithNavbar><CommentForm /></PageLayoutWithNavbar>} />
          <Route path="/articles/dog-breeds" element={<PageLayoutWithNavbar><DogBreedsArticle /></PageLayoutWithNavbar>} />
          <Route path="/articles/cat-breeds" element={<PageLayoutWithNavbar><CatBreedsArticle /></PageLayoutWithNavbar>} />
          <Route path="/articles/cat-food" element={<PageLayoutWithNavbar><CatFoodArticle /></PageLayoutWithNavbar>} />
          <Route path="/articles/dog-food" element={<PageLayoutWithNavbar><DogFoodArticle /></PageLayoutWithNavbar>} />
          <Route path="/articles/dog-care" element={<PageLayoutWithNavbar><DogCareGuide /></PageLayoutWithNavbar>} />
          <Route path="/shop" element={<PageLayoutWithNavbar><ShopPage /></PageLayoutWithNavbar>} />
          <Route path="/cart" element={<PageLayoutWithNavbar><Cart /></PageLayoutWithNavbar>} />
          <Route path="/complete" element={<PageLayoutWithNavbar><OrderComplete /></PageLayoutWithNavbar>} />
        </Routes>
      </Router>

      {/* ✅ نمایش نوتیفیکیشن‌ها */}
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
}

export default App;

