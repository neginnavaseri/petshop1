import React, { useState } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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

  return (
    <>
      {/* 🔝 نوار آیکون شبکه‌های اجتماعی */}
      <div className="top-barshare py-1 border-bottom mt-2">
        <div className="container top-icons d-flex justify-content-center align-items-center gap-4">
          <a href="https://facebook.com" className="fs-5" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
          <a href="https://instagram.com" className="fs-5" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://linkedin.com" className="fs-5" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
          <a href="https://t.me" className="fs-5" target="_blank" rel="noreferrer"><i className="bi bi-telegram"></i></a>
          <a href="https://twitter.com" className="fs-5" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
        </div>
      </div>

      {/* 🔽 نوبار اصلی */}
      <nav className="my-navbar">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between" dir="rtl">
          {/* ✅ حالت موبایل */}
          <div className="d-lg-none d-flex justify-content-between align-items-center w-100 mb-2">
            <a href="/cart" className="text-white text-decoration-none fs-4">
              <i className="bi bi-cart"></i>
            </a>
            <a className="navbar-brand mx-auto" href="/">
              <img src="/images/Group-258-2.png" alt="Logo" style={{ height: "40px" }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              style={{ borderRadius: "45%" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* ✅ حالت دسکتاپ */}
          <div className="d-none d-lg-flex align-items-center justify-content-between w-100">
            <a className="navbar-brand" href="/">
              <img src="/images/Group-258-2.png" alt="Logo" style={{ height: "40px" }} />
            </a>

            <div className="d-flex gap-4 justify-content-center align-items-center">
              <Link className="nav-link my-nav-link" to="/">خانه</Link>
              <Link className="nav-link my-nav-link" to="/">فروشگاه</Link>
              <Link className="nav-link my-nav-link" to="/">وبلاگ</Link>
              <Link className="nav-link my-nav-link" to="/">تماس باما</Link>
              <Link className="nav-link my-nav-link" to="/">درباره ما</Link>
            </div>

            <div className="my-icon-link">
              <a href="/cart" className="my-icon-link" style={{ fontSize: "1.4rem" }}>
                <i className="bi bi-cart"></i>
              </a>
              <a
                href="#"
                className="text-white text-decoration-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasAuth"
                style={{ fontSize: "1rem", marginLeft: "10px" }}
              >
                ثبت‌نام / ورود
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 📋 منوی موبایل (Offcanvas) */}
      <div className="offcanvas offcanvas-start my-mobile-menu" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">بستن</h5>
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
            <li className="nav-item"><Link className="nav-link text-white" to="/">خانه</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/">فروشگاه</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/">وبلاگ</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/">تماس باما</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/">درباره ما</Link></li>
          </ul>
        </div>
      </div>

      {/* 📋 فرم ورود/ثبت‌نام (Offcanvas) */}
      <div className="offcanvas offcanvas-start orange-auth" tabIndex="-1" id="offcanvasAuth" aria-labelledby="offcanvasAuthLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasAuthLabel">ثبت‌نام / ورود</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">
          <form className="orange-form d-flex flex-column gap-3" onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">نام کاربری</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="نام کاربری خود را وارد کنید"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">ایمیل</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="ایمیل خود را وارد کنید"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">رمز عبور</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="رمز عبور را وارد کنید"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-light w-100">ورود / ثبت‌نام</button>
          </form>
          {message && <p className="text-white mt-2">{message}</p>}
        </div>
      </div>
    </>
  );
}

export default Navbar;
