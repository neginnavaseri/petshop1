import React from "react";
import { FaPhone, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './About.css';

function About() {
  const clientLogos = [
    "/images/لنو وا.png",
    "/images/بیمه ایران.png",
    "/images/بانک مسکن.png",
    "/images/سامان.png",
    "/images/بانک تجارت.png",
    "/images/ایران ایر.png",
    "/images/ای سوز.png",
  ];

  const carouselResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3
    }
  };
  

  return (
    <div className="abt-container my-5">
      {/* بخش بالای صفحه */}
      <div className="abt-header bg-light p-5 rounded shadow text-center">
        <h1 className="abt-header__title mb-4 fw-bold text-warning">ما حرفه‌ای‌ترین اعضا را داریم</h1>
        <p className="abt-header__desc fs-5 text-muted">
          تیم ما با سال‌ها تجربه در زمینه فروش حیوانات خانگی و محصولات مرتبط، آماده خدمت‌رسانی به شماست.
          ما بهترین‌ها را برای حیوانات خانگی شما فراهم می‌کنیم تا آن‌ها همیشه سالم، شاد و سرحال باشند.
          هدف ما رضایت کامل شماست و برای رسیدن به این هدف از هیچ تلاشی دریغ نمی‌کنیم.
        </p>
        <div className="abt-header__actions mt-4 d-flex justify-content-center gap-3 flex-wrap">

        <Link to="/contact" className="abt-btn abt-btn--outline-primary">
  <FaPhone className="abt-icon me-2" />
  تماس با ما
</Link>

<Link to="/shop" className="abt-btn abt-btn--success">
  <FaShoppingCart className="abt-icon me-2" />
  مشاهده فروشگاه
</Link>

        </div>
      </div>

      {/* متن پایین + اسلایدر */}
      <h3 className="abt-clients__title text-center my-5 fw-bold text-secondary">
        بهترین‌ها با ما کار می‌کنند
      </h3>

      <Carousel responsive={carouselResponsive} infinite autoPlay autoPlaySpeed={2500} arrows className="abt-carousel">
        {clientLogos.map((img, index) => (
          <div key={index} className="abt-carousel__item px-3">
            <img
              src={img}
              alt={`Client ${index + 1}`}
              className="abt-carousel__img img-fluid rounded shadow"
              style={{ height: "120px", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>
        ))}
        
      </Carousel>

      {/* بخش "کارنامه ما" */}
      <h3 className="abt-record__title text-center my-5">کارنامه ما</h3>
      <div className="abt-record__list row text-center justify-content-center g-4">
        <div className="abt-record__item col-6 col-md-2">
          <div className="abt-record__card bg-white shadow rounded p-4">
            <div className="abt-record__value h4 fw-bold text-primary">5K</div>
            <div className="abt-record__label text-muted">سفارش موفق</div>
          </div>
        </div>
        <div className="abt-record__item col-6 col-md-2">
          <div className="abt-record__card bg-white shadow rounded p-4">
            <div className="abt-record__value h4 fw-bold text-success">99%</div>
            <div className="abt-record__label text-muted">رضایت مشتریان</div>
          </div>
        </div>
        <div className="abt-record__item col-6 col-md-2">
          <div className="abt-record__card bg-white shadow rounded p-4">
            <div className="abt-record__value h4 fw-bold text-info">10</div>
            <div className="abt-record__label text-muted">اعضای تیم</div>
          </div>
        </div>
        <div className="abt-record__item col-6 col-md-2">
          <div className="abt-record__card bg-white shadow rounded p-4">
            <div className="abt-record__value h4 fw-bold text-warning">8</div>
            <div className="abt-record__label text-muted">سال سابقه</div>
          </div>
        </div>
        <div className="abt-record__item col-6 col-md-2">
          <div className="abt-record__card bg-white shadow rounded p-4">
            <div className="abt-record__value h4 fw-bold text-danger">5K</div>
            <div className="abt-record__label text-muted">تنوع محصولات</div>
          </div>
        </div>
      </div>

      <div className="abt-whyChoose row my-5 align-items-center">
        {/* متن سمت راست */}
        <div className="abt-whyChoose__text col-md-6">
          <h3 className="abt-whyChoose__title fw-bold text-dark mb-3">چرا باید وود مارت رو انتخاب کنیم؟</h3>
          <p className="abt-whyChoose__desc fs-5 text-muted">
            چون ما فقط یک فروشگاه نیستیم؛ ما یک همراه مطمئن برای شما و حیوانات خانگی‌تون هستیم. ما با عشق کار می‌کنیم و باور داریم که حیوانات لایق بهترین‌ها هستن. تیم ما همیشه کنار شماست تا تجربه‌ای بی‌نظیر از خرید آنلاین داشته باشید.
          </p>
        </div>

        {/* کارت‌های سمت چپ */}
        <div className="abt-whyChoose__cards col-md-6">
          <div className="abt-whyChoose__card bg-white shadow rounded p-4 mb-3">
            <h5 className="abt-whyChoose__cardTitle fw-bold mb-2">حرفه‌ای‌ترین اعضا</h5>
            <p className="abt-whyChoose__cardDesc text-muted mb-0">
              تیم متخصص ما از افراد باتجربه و آموزش‌دیده تشکیل شده که با دلسوزی و دقت کامل در خدمت شما هستند.
            </p>
          </div>
          <div className="abt-whyChoose__card bg-white shadow rounded p-4 mb-3">
            <h5 className="abt-whyChoose__cardTitle fw-bold mb-2">بیشترین رضایت مشتری</h5>
            <p className="abt-whyChoose__cardDesc text-muted mb-0">
              اولویت ما رضایت کامل شماست؛ به همین دلیل همیشه در حال بهبود خدمات‌مون هستیم تا تجربه‌ای بی‌نقص ارائه کنیم.
            </p>
          </div>
          <div className="abt-whyChoose__card bg-white shadow rounded p-4">
            <h5 className="abt-whyChoose__cardTitle fw-bold mb-2">با کیفیت‌ترین خدمات</h5>
            <p className="abt-whyChoose__cardDesc text-muted mb-0">
              از محصولات گرفته تا پشتیبانی، ما به کیفیت اهمیت می‌دیم و بهترین‌ها رو به شما ارائه می‌دیم چون شما لایقش هستید.
            </p>
          </div>
        </div>
      </div>

      <h2 className="abt-team__title text-center fw-bold my-5">اعضای تیم ما</h2>
      <div className="abt-team__list row g-4 mb-5">
        {/* کارت اول */}
        <div className="abt-team__item col-12 col-md-6 col-lg-3 text-center px-3">
          <div className="abt-team__card card shadow-lg text-center border-0">
            <img src="/images/آرش.jpg" className="abt-team__img card-img-top rounded-top" alt="آرش امیری" />
            <div className="abt-team__body card-body">
              <h5 className="abt-team__name card-title fw-bold">آرش امیری</h5>
              <p className="abt-team__role role-developer text-primary fw-semibold mb-1">برنامه‌نویس</p>
              <p className="abt-team__desc text-muted small">
                با ترکیب خلاقیت و کدنویسی، آرش همیشه بهترین رابط‌ها رو می‌سازه.
              </p>
              <div className="abt-team__socials d-flex justify-content-center gap-3 mt-3">
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-twitter text-dark"></i>
</a>
<a href="https://facebook.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-facebook-f text-dark"></i>
</a>
<a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-instagram text-dark"></i>
</a>
              </div>
            </div>
          </div>
        </div>

        {/* کارت دوم */}
        <div className="abt-team__item col-12 col-md-6 col-lg-3 text-center px-3">
          <div className="abt-team__card card shadow-lg  text-center border-0">
            <img src="/images/محمد.jpg" className="abt-team__img card-img-top rounded-top" alt="محمد شهابی" />
            <div className="abt-team__body card-body">
              <h5 className="abt-team__name card-title fw-bold">محمد شهابی</h5>
              <p className="abt-team__role role-developer text-primary fw-semibold mb-1">برنامه‌نویس</p>
              <p className="abt-team__desc text-muted small">
                عاشق حل مسئله‌ست و همیشه راه‌حل‌هایی سریع و کارآمد ارائه می‌دهد.
              </p>
              <div className="abt-team__socials d-flex justify-content-center gap-3 mt-3">
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-twitter text-dark"></i>
</a>
<a href="https://facebook.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-facebook-f text-dark"></i>
</a>
<a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-instagram text-dark"></i>
</a>
              </div>
            </div>
          </div>
        </div>

        {/* کارت سوم */}
        <div className="abt-team__item col-12 col-md-6 col-lg-3 text-center px-3">
          <div className="abt-team__card card shadow-lg  text-center border-0">
            <img src="/images/رضا.jpg" className="abt-team__img card-img-top rounded-top" alt="رضارضایی" />
            <div className="abt-team__body card-body">
              <h5 className="abt-team__name card-title fw-bold">رضارضایی</h5>
              <p className="abt-team__role role-ui text-primary fw-semibold mb-1">طراح رابط کاربری</p>
              <p className="abt-team__desc text-muted small">
              هر کلیک رو با دقت طراحی کرده تا تجربه‌ی کاربری لذت‌بخشی بسازه.
              </p>
              <div className="abt-team__socials d-flex justify-content-center gap-3 mt-3">
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-twitter text-dark"></i>
</a>
<a href="https://facebook.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-facebook-f text-dark"></i>
</a>
<a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-instagram text-dark"></i>
</a>
              </div>
            </div>
          </div>
        </div>

        {/* کارت چهارم */}
        <div className="abt-team__item col-12 col-md-6 col-lg-3 text-center px-3">
          <div className="abt-team__card card shadow-lg  text-center border-0">
            <img src="/images/صادق.jpg" className="abt-team__img card-img-top rounded-top" alt="صادق وحیدی" />
            <div className="abt-team__body card-body">
              <h5 className="abt-team__name card-title fw-bold">صادق وحیدی</h5>
              <p className="abt-team__role role-graphic  fw-semibold mb-1">گرافیست</p>
              <p className="abt-team__desc text-muted small">
                با چشم‌های هنرمندش، زیبایی را به هر پروژه‌ای می‌آورد.
              </p>
              <div className="abt-team__socials d-flex justify-content-center gap-3 mt-3">
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-twitter text-dark"></i>
</a>
<a href="https://facebook.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-facebook-f text-dark"></i>
</a>
<a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="abt-team__socialLink">
  <i className="fab fa-instagram text-dark"></i>
</a>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
