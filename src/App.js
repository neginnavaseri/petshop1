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

// ✨ صفحه اصلی
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

// ✨ صفحاتی که فقط یک کامپوننت دارند مثل لاگین، ثبت‌نام، درباره ما، ...
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

        <Route path="/register" element={
          <PageLayoutWithNavbar>
            <Register />
          </PageLayoutWithNavbar>
        } />

        <Route path="/about" element={
          <PageLayoutWithNavbar>
            <About />
          </PageLayoutWithNavbar>
        } />
          <Route path="/contact" element={
    <PageLayoutWithNavbar>
      <Contact />
    </PageLayoutWithNavbar>
  } />
  <Route path="/blog" element={
  <PageLayoutWithNavbar>
    <Blog />
  </PageLayoutWithNavbar>
} />
 <Route path="/articles/dog-breeds" element={<DogBreedsArticle />} />
 <Route path="/articles/cat-breeds" element={<CatBreedsArticle />} />
 <Route path="/articles/cat-food" element={<CatFoodArticle />} />
 <Route path="/articles/dog-food" element={<DogFoodArticle />} />
<Route path="/articles/dog-care" element={<DogCareGuide />} />

<Route path="/comment-form" element={
          <PageLayoutWithNavbar>
            <CommentForm />
          </PageLayoutWithNavbar>
        } />
        
<Route path="/blog/:id" element={
  <PageLayoutWithNavbar>
    <BlogDetail />
  </PageLayoutWithNavbar>
} />




      </Routes>
    </Router>
  );
}

export default App;
