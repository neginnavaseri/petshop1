import React, { useState } from "react";
import "./ProductSlider.css";
import { Link } from "react-router-dom"; 
import './Cart.js';
import { toast } from "react-toastify";

const categories = ["غذای سگ", "غذای گربه", "غذای پرنده", "غذای ماهی"];

const dummySlides = [
  {
    id: 1,
    name: "غذای خشک گربه نوع یک",
    price: "400.000 تومان",
    image: "/images/cat1.jpg"
  },
  {
    id: 2,
    name: "غذای خشک گربه نوع دو",
    price: "400.000 تومان",
    image: "/images/cat2.jpg"
  },
  {
    id: 3,
    name: "غذای خشک گربه نوع سه",
    price: "400.000 تومان",
    image: "/images/cat3.jpg"
},
  {
    id: 4,
    name: "غذای خشک گربه نوع چهار",
    price: "400.000 تومان",
    image: "/images/cat4.jpg"
  },
  {
    id: 5,
    name: "غذای خشک گربه نوع پنج",
    price: "400.000 تومان",
    image: "/images/cat5.jpg"
  },
  {
    id: 6,
    name: "غذای خشک گربه نوع شش",
    price: "400.000 تومان",
    image: "/images/cat6.jpg"
  },

];

const Product = () => {
 
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; 

  const handleNext = () => {
    if (currentIndex + itemsPerPage < dummySlides.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleSlides = dummySlides.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );
  
  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cartItems.find((item) => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cartItems));
        toast.success("محصول با موفقیت اضافه شد ");
    
  };
  

  return (
    <div className="product-container">
      {/* نوار بالا */}
      <div className="top-bar">
      <span className="cloud cloud1"></span>
  <span className="cloud cloud2"></span>
  <span className="cloud cloud3"></span>
  <span className="cloud cloud4"></span>
  <span className="cloud cloud5"></span>
        <div className="top-right">پرفروش‌ترین محصولات</div>


        <div className="top-center">
  {categories.map((cat, i) => (
    <Link
      key={i}
      to={`/shop?category=${encodeURIComponent(cat)}`}
      className="category"
       style={{ textDecoration: "none"}}
    >
      {cat}
    </Link>
  ))}
</div>

        <div className="top-left">
          <button onClick={handlePrev} className="scroll-btn">▶</button>
          <button onClick={handleNext} className="scroll-btn">◀</button>
        </div>
      </div>
{/* اسلایدرها */}

<div className="slider static-slider">
  {visibleSlides.map((item, idx) => (
    <div key={idx} className="slide-card" style={{position: "relative", overflow: "hidden"}}>
      <div className="img-wrapper" style={{position: "relative"}}>
        <img src={item.image} alt={item.name} className="product-img" />
        <div
          className="card-icons"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            gap: "15px",
            opacity: 0,
            transition: "opacity 0.3s ease",
            zIndex: 1000,
          }}
        >

<button
  className="icon-btn like"
  style={{
    backgroundColor: "white",
    border: "none",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
    color: "#ff6f00",
    fontSize: "18px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    padding: 0,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#ff9800";
    e.currentTarget.style.transform = "scale(1.2)";
    e.currentTarget.style.color = "#fff";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "white";
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.color = "#ff6f00";
  }}
>
  <i className="fas fa-heart"></i>
</button>
<Link to="/shop" style={{ textDecoration: "none" }}>
  <button
    className="icon-btn zoom"
    style={{
      backgroundColor: "white",
      border: "none",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
      color: "#ff6f00",
      fontSize: "18px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      padding: 0,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#ff9800";
      e.currentTarget.style.transform = "scale(1.2)";
      e.currentTarget.style.color = "#fff";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "white";
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.color = "#ff6f00";
    }}
  >
    <i className="fas fa-search"></i>
  </button>
</Link>


        </div>
      </div>
      <div className="product-name">{item.name}</div>
      <div className="product-price">{item.price}</div>
      <button className="btn cute-orange-btn" onClick={() => addToCart(item)}>
      افزودن به سبد خرید
    </button>


    </div>
  ))}
</div>




    </div>
  );
};

export default Product;
