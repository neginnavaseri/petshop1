import React from "react";
import "./WatermelonBanner.css";

const WatermelonBanner = () => {
  return (
    <>
      {/* عکس جداگانه بالای نوار، بزرگ و چپ‌چین */}
      <div style={{ width: "100%", textAlign: "center", marginBottom: "20px", overflow: "visible" }}>
        <img 
          src="/images/top.png" 
          alt="عکس بالای نوار" 
          style={{ maxWidth: "500px", height: "auto" }} 
        />
      </div>

      <div className="watermelon-banner">
        <div className="top-text">WOODMART APP</div> 
        <img src="/images/phone.png" alt="موبایل" className="phone-image" />
        <div className="content">
          <h2 className="title">یک شعبه از وودمارت در تلفن شماست!</h2>
          <p className="desc">
            اپ وودمارت همین الان توی گوشیت آماده‌ست تا زندگی پت کوچولو رو آسون‌تر کنه!  
            فقط کافیه وصل بشی و تجربه‌ای تازه از خرید و خدمات رو حس کنی.  
          </p>
          <div className="buttons">
            <a
              href="https://myket.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn myket"
            >
              دریافت از مایکت
            </a>
            <a
              href="https://cafebazaar.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn bazar"
            >
              دریافت از بازار
            </a>
          </div>
          <div className="matnman">    
            <br />
            <br />
            <p>فرصت رو از دست نده، همین حالا شروع کن!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatermelonBanner;
