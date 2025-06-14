import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const CatFoodArticle = () => {
  return (
    <>
      <Navbar />

      <div className="container my-5 d-flex justify-content-center">
        <div className="card mb-2" style={{ maxWidth: '700px', width: '100%',   cursor: 'default' }}>
          <img
            src="/images/blog3.jpg"
            className="card-img-top"
            alt="غذاهای گربه"
            style={{ height: '500px', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="container d-flex justify-content-center">
        <div
          className="card p-4"
          style={{
            maxWidth: '900px',
            width: '100%',
            marginBottom: '10rem',
            cursor: 'default',
            borderRadius: '1rem',
            backgroundColor: '#fcfcfc',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)',
               cursor: 'default'
          }}
        >
          <h2 className="text-center mb-4" style={{ fontSize: '2.3rem', fontWeight: '700', color: '#2c3e50' }}>
            انواع غذای گربه‌ها 🍗
          </h2>

          <p style={{ color: '#444', lineHeight: '1.9', fontSize: '1.05rem' }}>
            انتخاب غذای مناسب برای گربه‌ها از اهمیت بالایی برخورداره و به سلامت و شادی اون‌ها کمک می‌کنه...
          </p>

          {[
            { title: '۱. غذای خشک (Dry Food)', text: 'غذاهای خشک معمولاً عمر طولانی‌تری دارن و برای دندان‌های گربه هم خوبن، ولی باید همیشه آب در دسترسش باشه.' },
            { title: '۲. غذای مرطوب (Wet Food)', text: 'این نوع غذا آب بیشتری داره و برای گربه‌هایی که کم آب می‌خورن عالیه. معمولاً خوشمزه‌تر هم هست 😋' },
            { title: '۳. غذای خام (Raw Food)', text: 'بعضی صاحبان گربه ترجیح می‌دن از رژیم غذایی خام استفاده کنن مثل گوشت و سبزیجات خام ولی باید کاملاً با دامپزشک مشورت شه.' },
            { title: '۴. غذای خانگی', text: 'اگه به درستی پخته و متعادل باشه می‌تونه گزینه‌ای خوب باشه ولی باید ویتامین‌های لازم رو هم براش فراهم کنی.' },
          ].map((item, index) => (
            <div key={index}>
              <h5 style={{ marginTop: '1.6rem', fontWeight: '600', color: '#34495e' }}>{item.title}</h5>
              <p style={{ color: '#444', lineHeight: '1.9' }}>{item.text}</p>
            </div>
          ))}

          <p style={{ marginTop: '2rem', color: '#444', lineHeight: '1.9' }}>
            بهتره همیشه با دامپزشک مشورت کنی تا رژیم غذایی گربه‌ات متعادل و سالم باشه. گربه‌ی سالم، گربه‌ی شاد! 🐾😻
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CatFoodArticle;
