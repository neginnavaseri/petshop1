import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroRotator from "./components/HeroRotator";
import ProductSlider from './components/ProductSlider';
import WatermelonBanner from "./components/WatermelonBanner";
import BlogSlider from "./components/BlogSlider";


function App() {
  return (
    <div>
      <Navbar />
      <HeroRotator />
      <Banner />
      <Categories />
      <ProductList />
      <ProductSlider />
      <WatermelonBanner />
      <BlogSlider/>
     
      <Footer />
      
    </div>
  );
}

export default App;