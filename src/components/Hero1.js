import React from "react";
import "./Hero1.css";

function Hero1() {
  return (
    <div className="position-relative">
      {/* کپسول کوچولو گوشه راست بالا - فقط برای دسکتاپ */}
      <div
        className="hero1-btn-container position-absolute top-0 end-0 m-4 d-none d-lg-block"
        style={{ zIndex: 10 }}
      >
        <button
          type="button"
          className="btn btn-primary rounded-pill d-flex align-items-center gap-2 hero1-btn"
          style={{ fontWeight: "bold", padding: "0.75rem 2rem" }}
        >
          <img
            src="/images/hero2.jpg"
            alt="Hero 2"
            style={{
              height: "60px",
              width: "60px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          غذاهای وود مارت خییییلی خوووبن
        </button>
      </div>

      {/* هیرو اصلی */}
      <div className="container my-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          {/* متن سمت راست */}
          <div className="col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
            <h1 className="fw-bold mb-3">فروشگاه پت‌شاپ ما</h1>
            <p className="mb-4">
              همه‌ی نیازهای حیوان خانگی شما در یک‌جا! از غذا تا اسباب‌بازی و خدمات دامپزشکی.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-end gap-3">
              <button className="btn btn-primary rounded-pill px-4 py-2">مشاهده محصولات</button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2">تماس با ما</button>
            </div>
          </div>

          {/* عکس سمت چپ */}
          <div className="col-lg-6 text-center">
            <img
              src="/images/hero1.jpg"
              alt="Pet Shop Banner"
              className="img-fluid border border-4 border-primary rounded-pill shadow"
              style={{ height: "450px", width: "320px", objectFit: "cover" }}
            />
            {/* دکمه فقط برای موبایل پایین عکس */}
            <div className="d-lg-none mt-3">
              <button
                type="button"
                className="btn btn-primary rounded-pill d-flex align-items-center gap-2 hero1-btn mx-auto"
                style={{ fontWeight: "bold", padding: "0.5rem 1.2rem" }}
              >
                <img
                  src="/images/hero2.jpg"
                  alt="Hero 2"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                غذاهای وود مارت خییییلی خوووبن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
