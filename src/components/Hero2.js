import React from "react";
import "./Hero2.css"; 

function Hero2() {
  return (
    <div className="position-relative hero2-wrapper">
      {/* هیرو اصلی */}
      <div className="container my-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          {/* متن سمت راست */}
          <div className="col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
            <h1 className="fw-bold mb-3">با کیفیت ترین محصولات فقط با وودمارت</h1>
            <p className="mb-4">
              محصولات وودمارت با تمرکز ویژه بر کیفیت و اصالت، انتخابی مطمئن برای همه‌ی دوستداران حیوانات خانگی هستند. هر محصول از مواد باکیفیت و طراحی هوشمندانه بهره می‌برد تا نیازهای متنوع حیوانات شما را به بهترین شکل ممکن برآورده کند. از غذاهای طبیعی و مقوی گرفته تا اسباب‌بازی‌های ایمن و مقاوم، وودمارت تضمین می‌کند که بهترین‌ها را برای سلامت و شادی پت شما فراهم آورد. با وودمارت، خیالتان راحت باشد که حیوان عزیزتان در کنار شما از بهترین مراقبت و توجه برخوردار است.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-end gap-3">
              <button className="btn btn-primary rounded-pill px-4 py-2">همکاری با وودمارت</button>
            </div>
          </div>
          {/* عکس سمت چپ با استایل کپسولی و انیمیشن تپش */}
          <div className="col-lg-6 text-center">
<div className="d-inline-block heart-beat rainbow-border shadow" style={{
    borderRadius: "180px",
    overflow: "hidden",
    height: "500px",
    width: "400px",
  }}>
  <img
    src="/images/hero3.jpg"
    alt="Pet Shop Banner"
    className="img-fluid "
    style={{
      height: "100%",
      width: "100%",
      objectFit: "cover",
    }}
  />
  </div>


                  {/* کپسول کوچولو گوشه راست بالا */}
      <div className="hero-btn-container position-absolute top-0 end-0 m-4" style={{ zIndex: 10 }}>
        <button
          type="button"
          className="btn btn-primary rounded-pill d-flex align-items-center gap-2 px-4 py-2 shadow hero-btn"
          style={{ fontWeight: "bold" }}
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
          {/* اگر میخوای متن داخل دکمه باشه، اینجا بذار */}
          {/* مثلا: "وودمارت" */}
        </button>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;

