import React, { useState, useEffect, useRef } from "react";
import './ProductList.css';

const products = [
  { id: 1, name: "غذای خشک گربه نوع یک", price: "400.000 تومان", images: "/images/cat1.jpg" },
  { id: 2, name: "غذای خشک گربه نوع دو", price: "400.000 تومان", images: "/images/cat2.jpg" },
  { id: 3, name: "غذای خشک گربه نوع سه", price: "400.000 تومان", images: "/images/cat3.jpg" },
  { id: 4, name: "غذای خشک گربه نوع چهار", price: "400.000 تومان", images: "/images/cat4.jpg" },
  { id: 5, name: "غذای خشک گربه نوع پنج", price: "400.000 تومان", images: "/images/cat5.jpg" },
  { id: 6, name: "غذای خشک گربه نوع شش", price: "400.000 تومان", images: "/images/cat6.jpg" },
];

function ProductSliderWithStaticCard() {
  const [startIndex, setStartIndex] = useState(0);
  const maxStartIndex = products.length - 3;
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex < maxStartIndex ? prevIndex + 1 : 0
      );
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleNext = () => {
    stopAutoSlide();
    setStartIndex((prev) => (prev < maxStartIndex ? prev + 1 : 0));
    startAutoSlide();
  };

  const handlePrev = () => {
    stopAutoSlide();
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStartIndex));
    startAutoSlide();
  };

  const visibleProducts = products.slice(startIndex, startIndex + 3);

  return (
    <div className="container my-4">
      <div className="row g-3">
        {/* کارت ثابت */}
        <div className="col-md-3">
          <div className="card text-center h-100 shadow">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title text-danger fw-bold">آف پت وودمارت</h5>
              </div>
              <div>
                <button className="btn btn-warning my-3 fw-bold">اینجا کلیک کنید</button>
              </div>
              <div>
                <img
                  src="/images/offer.png"
                  alt="پت شاپ"
                  className="card-img-top mt-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* اسلایدر کارت‌ها */}
        <div className="col-md-9">
          <div className="row slider-row transition">
            {visibleProducts.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="card h-100 shadow-sm position-relative overflow-hidden">
  <div className="card-img-wrapper position-relative">
    <img
      src={product.images}
      alt={product.name}
      className="card-img-top"
    />
    <div className="card-icons">
      <span className="icon-like">
        <i className="bi bi-heart-fill"></i>
      </span>
      <span className="icon-search">
        <i className="bi bi-search"></i>
      </span>
    </div>
  </div>
  <div className="card-body text-center d-flex flex-column justify-content-between">
    <div>
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text text-success fw-bold">
        {product.price}
      </p>
    </div>
    <button className="btn cute-orange-btn mt-3">
      افزودن به سبد خرید
    </button>
  </div>
</div>

              </div>
            ))}
          </div>

          {/* دکمه‌های کنترل پایین */}
          <div className="d-flex justify-content-center mt-3">
            <button className="slider-btn me-2" onClick={handlePrev}>
              قبلی
            </button>
            <button className="slider-btn" onClick={handleNext}>
              بعدی
            </button>
          </div>
        </div>
      </div>
      {/* بخش برندها */}
      <div className="brand-cloud mt-5">
  <div className="extra-cloud"></div>

  <div className="brand-info">
    <h5>برندهای محصولات</h5>
    <p>
    با برندهای برتر، کیفیت را لمس کنید!
در فروشگاه ما، تنها برندهایی حضور دارند که در آزمون کیفیت، سلامت و اعتماد، سربلند بیرون آمده‌اند.

    </p>
  </div>

  <div className="brand-logo-container">
    <div className="brand-logos-wrapper">
      <div className="brand-logos-spin">
        {/* فقط یه سری لوگو */}
        <img src="/images/brand1.png" alt="brand" className="brand-logo" />
        <img src="/images/brand2.png" alt="brand" className="brand-logo" />
        <img src="/images/brand3.png" alt="brand" className="brand-logo" />
        <img src="/images/brand4.png" alt="brand" className="brand-logo" />
        <img src="/images/brand5.png" alt="brand" className="brand-logo" />
        <img src="/images/brand6.png" alt="brand" className="brand-logo" />
        <img src="/images/brand7.png" alt="brand" className="brand-logo" />

            {/* 👇 تکرار مجدد برای چرخش بی‌نهایت */}
    <img src="/images/brand1.png" alt="brand" className="brand-logo" />
    <img src="/images/brand2.png" alt="brand" className="brand-logo" />
    <img src="/images/brand3.png" alt="brand" className="brand-logo" />
    <img src="/images/brand4.png" alt="brand" className="brand-logo" />
    <img src="/images/brand5.png" alt="brand" className="brand-logo" />
    <img src="/images/brand7.png" alt="brand" className="brand-logo" />

      </div>
    </div>
    
  </div>
</div>




      <section className="contact-footer-section py-5">
    <div className="container">
      <div className="row align-items-center justify-content-between flex-wrap">
       {/* سمت چپ - درباره پت شاپ */}
<div
  className="col-lg-4 mb-4"
  style={{
    zIndex: 2,
    position: "relative",
    paddingBottom: "60px",
  }}
>
  <h6
    className="fw-bold mb-3 text-orange"
    style={{
      fontSize: "1.8rem",
      fontWeight: "900",
      color: "#fb8c00",
      textShadow: "2px 2px 4px rgba(251, 140, 0, 0.5)",
      letterSpacing: "1.5px",
      marginBottom: "1rem",
    }}
  >
    درباره پت شاپ وودمارت
  </h6>
  <p
    className="text-muted small"
    style={{
      maxWidth: "95%",
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "#6d4c41",
      lineHeight: "1.6",
    }}
  >
    پت شاپ وودمارت با ارائه بهترین محصولات و خدمات ویژه برای حیوانات خانگی، همیشه همراه شماست. پشتیبانی سریع و کیفیت بالا در کنار شما.
  </p>



  {/* سه کارت اطلاعات تماس اینجا میاد */}
  <div className="row g-3">
  <div className="col-12">
    <div className="contact-card">
      <strong>آدرس:</strong> تهران، خیابان انقلاب، نبش کوچه سوم
    </div>
  </div>
  <div className="col-12">
    <div className="contact-card">
      <strong>ایمیل:</strong> yourmail@gmail.com
    </div>
  </div>
  <div className="col-12">
    <div className="contact-card">
      <strong>تلفن:</strong> ۰۹۱۲۳۴۵۶۷۸۹ و ۰۹۱۲۳۴۵۶۷۸۹
    </div>
  </div>
</div>



        </div>

        {/* وسط - عکس کپسولی */}
        <div
  className="col-lg-4 d-flex justify-content-center align-items-center position-relative"
  style={{ zIndex: 1 }}
>
  <div
    className="pet-glow-wrapper"
    style={{
      position: "relative",
      padding: "20px",
      borderRadius: "50%",
      background: "radial-gradient(circle, #fff3e0, #ffe0b2)",
      boxShadow:
        "0 0 20px rgba(255, 152, 0, 0.4), 0 0 60px rgba(255, 152, 0, 0.2), 0 0 120px rgba(255, 87, 34, 0.2)"
    }}
  >
    <img
      src="/images/hero3.jpg"
      alt="Pet Shop"
      className="img-fluid rounded-pill shadow"
      style={{
        width: "85%",
        maxWidth: "300px",
        objectFit: "cover",
        borderRadius: "50%",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    />
  </div>
</div>




        {/* راست - فرم مشاوره */}
        <div
  className="col-lg-4 mb-4"
  style={{
    animation: "floatForm 2s ease-in-out infinite alternate",
    zIndex: 3,
    marginTop: "-50px",
  }}
>
  <div className="p-4 rounded shadow bg-white border">
    <h6 className="fw-bold text-orange orange-title mb-3">
      برای دریافت مشاوره و راهنمایی فرم زیر را تکمیل کنید.
    </h6>

    {/* فرم مشاوره */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const errorDiv = document.getElementById("form-error");
        const successDiv = document.getElementById("form-success");

        if (!emailPattern.test(email)) {
          errorDiv.style.display = "block";
          successDiv.style.display = "none";
          return;
        }

        // موفقیت
        errorDiv.style.display = "none";
        successDiv.style.display = "block";

        // پاک‌سازی فرم
        e.target.reset();

        // مخفی کردن پیام موفقیت بعد از 3 ثانیه
        setTimeout(() => {
          successDiv.style.display = "none";
        }, 3000);
      }}
    >
      <div className="mb-3">
        <label className="form-label">ایمیل</label>
        <input
          name="email"
          type="email"
          className="form-control"
          placeholder="ایمیل خود را وارد کنید"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">پیام شما (اختیاری)</label>
        <textarea
          name="message"
          className="form-control"
          rows="3"
          placeholder="پیام خود را بنویسید"
        ></textarea>
      </div>

      {/* پیام خطا */}
      <div
        id="form-error"
        className="mb-2"
        style={{
          display: "none",
          color: "#d8000c",
          backgroundColor: "#ffdddd",
          padding: "8px",
          borderRadius: "8px",
        }}
      >
        لطفاً یک ایمیل معتبر وارد کنید!
      </div>

      {/* پیام موفقیت */}
      <div
        id="form-success"
        className="mb-2"
        style={{
          display: "none",
          color: "#155724",
          backgroundColor: "#d4edda",
          padding: "8px",
          borderRadius: "8px",
        }}
      >
        پیام شما با موفقیت ثبت شد 🌟
      </div>

      <button type="submit" className="btn short-cute-btn mt-2">
        ثبت
      </button>
    </form>
  </div>
</div>


      </div>
    </div>
  </section>

{/* گالری سه‌تایی عکس‌های ثابت با بک‌گراند نارنجی */}
<div className="container my-5">
  <div className="row">
    {/* عکس اول */}
    <div className="col-md-4 mb-4">
      <div
        className="card border-0 shadow h-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "#ffe5b4", // پرتقالی روشن
          borderRadius: "20px",
          padding: "10px",
          
        }}
        
      >
        <img
          src="/images/Group1.png"
          alt="گالری ۱"
          className="img-fluid"
          style={{
            height: "250px",
            objectFit: "cover",
            borderRadius: "15px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>

    {/* عکس دوم */}
    <div className="col-md-4 mb-4">
      <div
        className="card border-0 shadow h-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "#ffe5b4",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <img
          src="/images/Group2.png"
          alt="گالری ۲"
          className="img-fluid"
          style={{
            height: "250px",
            objectFit: "cover",
            borderRadius: "15px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>

    {/* عکس سوم */}
    <div className="col-md-4 mb-4">
      <div
        className="card border-0 shadow h-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "#ffe5b4",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <img
          src="/images/Group3.png"
          alt="گالری ۳"
          className="img-fluid"
          style={{
            height: "250px",
            objectFit: "cover",
            borderRadius: "15px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>
  </div>
</div>

 
    </div>
 
  );
}

export default ProductSliderWithStaticCard;
