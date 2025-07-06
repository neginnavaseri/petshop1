
import React, { useState, useEffect } from "react";

import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // دریافت تعداد آیتم‌ها از localStorage و به‌روزرسانی هر بار که تغییر کنه
  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();

    // اضافه کردن listener برای تغییرات localStorage (اگر توی تب‌های مختلف باز باشه)
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("لطفاً همه فیلدها را پر کنید ❌");
    } else if (email !== "test@example.com" || password !== "123456") {
      setMessage("ایمیل یا رمز عبور اشتباه است 😢");
    } else {
      setMessage("ورود موفقیت‌آمیز بود! 🎉");
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // اینجا می‌تونی به صفحه فراموشی رمز عبور بری یا هر کاری که لازم داری
    window.location.href = 'forgot-password.html'; 
  };

  return (
    <>
      {/* 🔝 نوار آیکون شبکه‌های اجتماعی */}
      <div className="top-barshare py-1 border-bottom mt-2">
        <div className="container d-flex justify-content-center justify-content-lg-between align-items-center">
          <div className="d-none d-lg-flex align-items-center gap-2 text-dark fw-semibold">
            <i className="bi bi-telephone-fill fs-5"></i>
            دریافت مشاوره و راهنمایی: ۰۹۱۲۳۴۵۶۷۸۹
          </div>
          <div className="top-icons d-flex gap-4">
            <a href="https://facebook.com" className="fs-5" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
            <a href="https://instagram.com" className="fs-5" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
            <a href="https://linkedin.com" className="fs-5" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="https://t.me" className="fs-5" target="_blank" rel="noreferrer"><i className="bi bi-telegram"></i></a>
            <a href="https://twitter.com" className="fs-5" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
          </div>
        </div>
      </div>

      {/* 🔽 نوبار اصلی */}
      <nav className="my-navbar">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between" dir="rtl">
          <div className="d-lg-none d-flex justify-content-between align-items-center w-100 mb-2">
            <button className="navbar-toggler my-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand mx-auto" href="/">
              <img src="/images/Group-258-2.png" alt="Logo" style={{ height: "40px" }} />
            </a>
            <a href="/cart" className="my-icon-link" style={{ fontSize: "2rem" }}>
              <i className="bi bi-cart "></i>
            </a>
          </div>

          <div className="d-none d-lg-flex align-items-center justify-content-between w-100">
            <a className="navbar-brand" href="/">
              <img src="/images/Group-258-2.png" alt="Logo" style={{ height: "40px" }} />
            </a>
            <div className="d-flex gap-4 justify-content-center align-items-center">
            <Link className="nav-link my-nav-link" to="/">خانه</Link>
<Link className="nav-link my-nav-link" to="/shop">فروشگاه</Link>
<Link className="nav-link my-nav-link" to="/blog">وبلاگ</Link>
<Link className="nav-link my-nav-link" to="/contact">تماس باما</Link>
<Link className="nav-link my-nav-link" to="/about">درباره ما</Link>



            </div>
            <div className="d-flex align-items-center gap-3">
              <a href="/cart" className="my-icon-link" style={{ fontSize: "1.4rem" }}>
                <i className="bi bi-cart"></i>
              </a>
              <a href="#" className="my-icon-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAuth" style={{ fontSize: "1rem" }}>
                ثبت‌نام / ورود
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 📋 منوی موبایل */}
      <div className="offcanvas offcanvas-start my-mobile-menu" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">بستن</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <form className="d-flex mb-3" role="search">
            <input className="form-control me-2" type="search" placeholder="جستجوی محصولات" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
  <li className="nav-item">
    <Link to="/" className="nav-link text-white">خانه</Link>
  </li>
  <li className="nav-item">
    <Link to="/shop" className="nav-link text-white">فروشگاه</Link>
  </li>
  <li className="nav-item">
    <Link to="/blog" className="nav-link text-white">وبلاگ</Link>
  </li>
  <li className="nav-item">
    <Link to="/contact" className="nav-link text-white">تماس باما</Link>
  </li>
  <li className="nav-item">
    <Link to="/about" className="nav-link text-white">درباره ما</Link>
  </li>
</ul>

        </div>
      </div>

      {/* 🧾 فرم ورود */}
      <div className="offcanvas offcanvas-start orange-auth" tabIndex="-1" id="offcanvasAuth" aria-labelledby="offcanvasAuthLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">ورود</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <form onSubmit={handleLogin} className="orange-form d-flex flex-column gap-3">
            <div>
              <label htmlFor="email" className="form-label">ایمیل یا نام کاربری</label>
              <input type="text" className="form-control" id="email" placeholder="مثلاً you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="form-label">رمز عبور</label>
              <div className="input-group">
                <input type={showPassword ? "text" : "password"} className="form-control" id="password" placeholder="رمز عبور خود را وارد کنید" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-outline-secondary" type="button" onClick={() => setShowPassword(!showPassword)}>
                  <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">مرا به خاطر بسپار</label>
              </div>
               <Link to="/forgot-password" className="text-decoration-none" style={{ fontSize: "0.9rem" }}>
                  رمز عبور را فراموش کرده‌اید؟
              </Link>


            </div>
            <button type="submit" className="btn btn-primary w-100" style={{ borderRadius: "2rem", fontWeight: "bold", fontSize: "1.1rem", padding: "0.6rem 1rem", transition: "all 0.3s ease" }}>ورود</button>
            {message && <div className="alert alert-info text-center mt-2">{message}</div>}
            <div className="text-center mt-3">
              <span>هنوز حساب کاربری ندارید؟ </span>
              <Link to="/register" className="text-decoration-none">
  ایجاد حساب کاربری
</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Navbar;

