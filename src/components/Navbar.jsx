import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <>
      {/* 🔝 نوار آیکون شبکه‌های اجتماعی */}
      <div className="top-bar py-1 border-bottom mt-2">
        <div className="container top-icons d-flex justify-content-center align-items-center gap-4">
          <a href="https://facebook.com" className="text-dark fs-5" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
          <a href="https://instagram.com" className="text-dark fs-5" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://linkedin.com" className="text-dark fs-5" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
          <a href="https://t.me" className="text-dark fs-5" target="_blank" rel="noreferrer"><i className="bi bi-telegram"></i></a>
          <a href="https://twitter.com" className="text-dark fs-5" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
        </div>
      </div>

      {/* 🔽 نوبار اصلی */}
      <nav className="navbar navbar-dark bg-dark px-3">
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between" dir="rtl">

          {/* ✅ حالت موبایل */}
          <div className="d-lg-none d-flex justify-content-between align-items-center w-100 mb-2">
            {/* 🛒 سبد خرید */}
            <a href="/cart" className="text-white text-decoration-none fs-4">
              <i className="bi bi-cart"></i>
            </a>

            {/* 🔰 لوگو */}
            <a className="navbar-brand mx-auto" href="/">
              <img src="/images/Group-258-2.png" alt="Logo" style={{ height: "40px" }} />
            </a>

            {/* 🍔 دکمه همبرگری */}
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
            {/* 🔰 لوگو راست */}
            <a className="navbar-brand" href="/">
              <img src="/images/Group-258-2.png" alt="Logo" style={{ height: "40px" }} />
            </a>

            {/* 📁 منو میانی */}
            <div className="d-flex gap-4 justify-content-center align-items-center">
              <a className="nav-link text-white" href="/">خانه</a>
              <a className="nav-link text-white" href="/">فروشگاه</a>
              <a className="nav-link text-white" href="/">وبلاگ</a>
              <a className="nav-link text-white" href="/">تماس باما</a>
              <a className="nav-link text-white" href="/">درباره ما</a>
            </div>

            {/* 🛒 سبد خرید و ثبت نام / ورود چپ */}
            <div className="d-flex align-items-center gap-3">
              <a href="/cart" className="text-white text-decoration-none" style={{ fontSize: "1.4rem" }}>
                <i className="bi bi-cart"></i>
              </a>
              <a href="/login" className="text-white text-decoration-none" style={{ fontSize: "1rem" }}>
                ثبت‌نام / ورود
              </a>
              <a
  href="#"
  className="text-white text-decoration-none"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasAuth"
  style={{ fontSize: "1rem" }}
>
  ثبت‌نام / ورود
</a>

            </div>
          </div>
        </div>
      </nav>

      {/* 📋 منوی موبایل (Offcanvas) */}
      <div
        className="offcanvas offcanvas-start text-bg-dark"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">بستن</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          {/* 🔍 سرچ */}
          <form className="d-flex mb-3" role="search">
            <input className="form-control me-2" type="search" placeholder="جستجوی محصولات" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* 📁 منو آیتم‌ها */}
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item"><a className="nav-link text-white" href="/">خانه</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/">فروشگاه</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/">وبلاگ</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/">تماس باما</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/">درباره ما</a></li>
          </ul>
        </div>
      </div>
      {/* 📋 فرم ورود/ثبت‌نام (Offcanvas) */}
<div
  className="offcanvas offcanvas-start text-bg-dark"
  tabIndex="-1"
  id="offcanvasAuth"
  aria-labelledby="offcanvasAuthLabel"
>
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasAuthLabel">ثبت‌نام / ورود</h5>
    <button
      type="button"
      className="btn-close btn-close-white"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>

  <div className="offcanvas-body">
    <form>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">نام کاربری</label>
        <input type="text" className="form-control" id="username" placeholder="نام کاربری خود را وارد کنید" />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">ایمیل</label>
        <input type="email" className="form-control" id="email" placeholder="ایمیل خود را وارد کنید" />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">رمز عبور</label>
        <input type="password" className="form-control" id="password" placeholder="رمز عبور را وارد کنید" />
      </div>

      <button type="submit" className="btn btn-light w-100">ورود / ثبت‌نام</button>
    </form>
  </div>
</div>

    </>
  );
}

export default Navbar;
