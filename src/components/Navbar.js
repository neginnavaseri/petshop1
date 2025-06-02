import React from "react";
import './Navbar.css';
function Navbar() {
  return (
    <>
   {/* 🔝 نوار آیکون شبکه‌های اجتماعی */}
<div className="top-barshare py-1 border-bottom mt-2">
  <div className="container d-flex justify-content-center justify-content-lg-between align-items-center">
    
    {/* ✅ متن مشاوره با آیکون تلفن */}
    <div className="d-none d-lg-flex align-items-center gap-2 text-dark fw-semibold">
      <i className="bi bi-telephone-fill fs-5 "></i>
      دریافت مشاوره و راهنمایی: ۰۹۱۲۳۴۵۶۷۸۹
    </div>

    {/* ✅ آیکون‌های شبکه اجتماعی */}
    <div className="top-icons d-flex gap-4">
      <a href="https://facebook.com" className=" fs-5" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
      <a href="https://instagram.com" className=" fs-5" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
      <a href="https://linkedin.com" className=" fs-5" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
      <a href="https://t.me" className="fs-5" target="_blank" rel="noreferrer"><i className="bi bi-telegram"></i></a>
      <a href="https://twitter.com" className=" fs-5" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
    </div>
  </div>
</div>



      {/* 🔽 نوبار اصلی */}
      <nav className="my-navbar">
  <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between" dir="rtl">






          {/* ✅ حالت موبایل */}
          <div className="d-lg-none d-flex justify-content-between align-items-center w-100 mb-2">
  {/* 🍔 همبرگر راست */}

  <button
  className="navbar-toggler my-toggler"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasNavbar"
  aria-controls="offcanvasNavbar"
>
  <span className="navbar-toggler-icon"></span>
</button>

  {/* 🔰 لوگو وسط */}
  <a className="navbar-brand mx-auto" href="/">
    <img src="/images/Group-258-2.png" alt="Logo" style={{ height: "40px" }} />
  </a>

  {/* 🛒 سبد خرید چپ */}
  <a href="/cart" className="my-icon-link" style={{ fontSize: "1.4rem" }}>
    <i className="bi bi-cart"></i>
  </a>
</div>

          {/* ✅ حالت دسکتاپ */}
          <div className="d-none d-lg-flex align-items-center justify-content-between w-100">
            {/* 🔰 لوگو راست */}
            <a className="navbar-brand" href="/">
              <img src="/images/Group-258-2.png" alt="Logo" style={{ height: "40px" }} />
            </a>

            {/* 📁 منو میانی */}
            <div className="d-flex gap-4 justify-content-center align-items-center">
            <a className="nav-link my-nav-link" href="/">خانه</a>
              <a className="nav-link my-nav-link" href="/">فروشگاه</a>
              <a className="nav-link my-nav-link" href="/">وبلاگ</a>
              <a className="nav-link my-nav-link" href="/">تماس باما</a>
              <a className="nav-link my-nav-link" href="/">درباره ما</a>
            </div>

            {/* 🛒 سبد خرید و ثبت نام / ورود چپ */}
            <div className="d-flex align-items-center gap-3">
              <a href="/cart" className="my-icon-link" style={{ fontSize: "1.4rem" }}>
                <i className="bi bi-cart"></i>
              </a>

              <a
  href="#"
  className="my-icon-link"
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
        className="offcanvas offcanvas-start my-mobile-menu"
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
{/* 🧾 فرم ورود کامل با امکانات درون offcanvas */}
<div
  className="offcanvas offcanvas-start  orange-auth"
  tabIndex="-1"
  id="offcanvasAuth"
  aria-labelledby="offcanvasAuthLabel"
>
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasAuthLabel">ورود</h5>
    <button
      type="button"
      className="btn-close btn-close-white"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>

  <div className="offcanvas-body">
    <form className="orange-form d-flex flex-column gap-3 ">
      {/* نام کاربری یا ایمیل */}
      <div>
        <label htmlFor="email" className="form-label">ایمیل یا نام کاربری</label>
        <input type="text" className="form-control" id="email" placeholder="مثلاً you@example.com" />
      </div>

      {/* رمز عبور + دکمه چشم */}
      <div>
        <label htmlFor="password" className="form-label">رمز عبور</label>
        <div className="input-group">
          <input type="password" className="form-control" id="password" placeholder="رمز عبور خود را وارد کنید" />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              const passInput = document.getElementById("password");
              passInput.type = passInput.type === "password" ? "text" : "password";
            }}
          >
            <i className="bi bi-eye"></i>
          </button>
        </div>
      </div>

      {/* ✔️ مرا به خاطر بسپار + لینک فراموشی */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            مرا به خاطر بسپار
          </label>
        </div>
        <a href="/forgot-password" className=" text-decoration-none" style={{ fontSize: "0.9rem" }}>
          رمز عبور را فراموش کرده‌اید؟
        </a>
      </div>

      {/* دکمه ورود */}
      <button
  type="submit"
  className="btn btn-primary w-100"
  style={{
    borderRadius: "2rem", // دکمه گرد بشه 🍩
    fontWeight: "bold",
    fontSize: "1.1rem",
    padding: "0.6rem 1rem",
    transition: "all 0.3s ease",
  }}
>
  ورود
</button>



      {/* لینک ایجاد حساب */}
      <div className="text-center mt-3">
        <span>هنوز حساب کاربری ندارید؟ </span>
        <a href="/signup" className="text-decoration-none">
      ایجاد حساب کاربری
        </a>
      </div>
    </form>
  </div>
</div>


    </>
  );
}

export default Navbar;
