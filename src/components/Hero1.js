import { Link } from "react-router-dom";
import "./Hero1.css";

function Hero1() {
  return (
    <div className="position-relative">
      {/* دکمه کپسولی گوشه بالا راست فقط برای دسکتاپ */}
      <div
        className="hero1-btn-container position-absolute top-0 end-0 m-4 d-none d-lg-block"
        style={{ zIndex: 10 }}
      >
        <button
          type="button"
          className="btn d-flex align-items-center gap-2 hero1-btn px-4 py-3"
          style={{
            background: "linear-gradient(45deg, #ff7e5f, #feb47b)",
            border: "none",
            borderRadius: "50rem",
            fontWeight: "bold",
            color: "#333",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "linear-gradient(45deg, #feb47b, #ff7e5f)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "linear-gradient(45deg, #ff7e5f, #feb47b)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }}
        >
          <img
            src="/images/hero2.jpg"
            alt="Hero 2"
            style={{
              height: "60px",
              width: "60px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #f78fb3",
            }}
          />
          غذاهای وود مارت خییییلی خوووبن
        </button>
      </div>

      {/* محتوای هیرو */}
      <div className="container my-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          {/* متن سمت راست */}
          <div className="col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
            <h1 className="fw-bold mb-3" style={{ color: "#ff7043" }}>
              فروشگاه پت‌شاپ ما
            </h1>
            <p className="mb-4" style={{ color: "#6c757d", fontSize: "1.1rem" }}>
              همه‌ی نیازهای حیوان خانگی شما در یک‌جا! از غذا تا اسباب‌بازی و خدمات دامپزشکی.
            </p>

            {/* دکمه‌ها */}
            <div className="d-flex justify-content-center justify-content-lg-end gap-3">
              {/* دکمه اول - مشاهده محصولات */}
              <Link
                to="/Shop"
                className="btn rounded-pill px-4 py-2"
                style={{
                  backgroundColor: "#ff7043",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(255, 112, 67, 0.4)",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  display: "inline-block",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ff8a90";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#ff7043";
                }}
              >
                مشاهده محصولات
              </Link>

              {/* دکمه دوم - تماس با ما */}
              <Link
                to="/contact"
                className="btn rounded-pill px-4 py-2"
                style={{
                  border: "2px solid #f06292",
                  color: "#f06292",
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  display: "inline-block",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#f8bbd0";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                تماس با ما
              </Link>
            </div>
          </div>

          {/* تصویر سمت چپ */}
          <div className="col-lg-6 text-center">
            <div
              className="d-inline-block heart-beat rainbow-border shadow"
              style={{
                borderRadius: "180px",
                overflow: "hidden",
                height: "500px",
                width: "400px",
              }}
            >
              <img
                src="/images/hero1.jpg"
                alt="Pet Shop Banner"
                className="img-fluid"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* دکمه برای موبایل زیر عکس */}
            <div className="d-lg-none mt-3">
              <button
                type="button"
                className="btn rounded-pill d-flex align-items-center gap-2 mx-auto"
                style={{
                  fontWeight: "bold",
                  padding: "0.5rem 1.2rem",
                  background: "linear-gradient(90deg, #ff7043, #f06292)",
                  color: "white",
                  border: "none",
                  boxShadow: "0 3px 8px rgba(240, 98, 146, 0.3)",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseOver={(e) => {
                  e.target.style.opacity = 0.9;
                }}
                onMouseOut={(e) => {
                  e.target.style.opacity = 1;
                }}
              >
                <img
                  src="/images/hero2.jpg"
                  alt="Hero 2"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid white",
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
