import React from "react";
import './Footer.css'
function Footer() {
  return (
    <footer className="custom-footer">

      {/* کارت درباره ما */}
      <div className="footer-card">
        <h3 className="footer-title">درباره ما</h3>
        <p className="footer-description">
          پت‌شاپ وودمارت جاییه برای عاشقای حیوانات!  
          از قلاده تا خوراکی‌های خوشمزه، ما همه‌چی داریم واسه خوشحال‌کردن پشمالوهات!  
          با وودمارت، خیالِت راحته که همیشه بهترین رو برای دوست کوچولوت می‌خری 🐾
        </p>
      </div>

      {/* محتوای فوتر */}
      <div className="footer-content">
        {/* ستون لینک‌ها */}
        <div className="footer-links">
          <h4 className="footer-links-title">لینک‌های مهم</h4>
          <ul className="footer-link-list">
            <li><a href="/">صفحه اصلی</a></li>
            <li><a href="/shop">فروشگاه</a></li>
            <li><a href="/contact">تماس با ما</a></li>
            <li><a href="/about">درباره ما</a></li>
            <li><a href="/blog">وبلاگ</a></li>
            <li><a href="/rules">قوانین و مقررات</a></li>
          </ul>

          <div className="footer-badges">
            <img src="/images/قانون1.png" alt="قوانین ۱" />
            <img src="/images/قانون2.png" alt="قوانین ۲" />
            <img src="/images/قانون3.png" alt="قوانین ۳" />
          </div>
        </div>

        {/* ستون سمت چپ */}
        <div className="footer-left">
  <div className="footer-info-card">
    <i className="fas fa-phone-alt icon"></i>
    <div>
      <h4>شماره تماس</h4>
      <p>0912345678,0912345678</p>
    </div>
  </div>

  <div className="footer-info-card">
    <i className="fas fa-map-marker-alt icon"></i>
    <div>
      <h4>آدرس</h4>
      <p>تهران، میدان انقلاب، کوچه سوم، پلاک ۴</p>
    </div>
  </div>

  <div className="footer-info-card">
    <i className="fas fa-envelope icon"></i>
    <div>
      <h4>ایمیل</h4>
      <p>yourmail@mail.com</p>
    </div>
  </div>

  <div className="footer-info-card">
    <i className="fas fa-share-alt icon"></i>
    <div>
      <h4>با ما در ارتباط باشید</h4>
      <div className="footer-socials">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-telegram"></i></a>
        <a href="#"><i className="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </div>
</div>
      </div>
{/* بعد از تمام محتویات فوترت */}
<div className="footer-bottom-bar">
  کلیه حقوق متعلق به آرامیس می باشد.
</div>
    </footer>
  );
}

export default Footer;
