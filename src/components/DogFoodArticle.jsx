import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const DogFoodArticle = () => {
  return (
    <>
      <Navbar />

      <div className="container my-5 d-flex justify-content-center">
        <div className="card mb-2" style={{ maxWidth: '700px', width: '100%' }}>
          <img
            src="/images/blog4.jpg"
            className="card-img-top"
            alt="غذای سگ"
            style={{ height: '500px', objectFit: 'cover'  , cursor: 'default' }}
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
            borderRadius: '1rem',
            backgroundColor: '#fcfcfc',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)',
               cursor: 'default'

          }}
        >
          <h2 className="text-center mb-4" style={{ fontSize: '2.3rem', fontWeight: '700', color: '#2c3e50' }}>
            انواع غذای سگ‌ها 🦴
          </h2>

          {[
            { title: '۱. غذای خشک (Kibble)', text: 'معمول‌ترین نوع غذا برای سگ‌ها. راحت نگهداری می‌شه و دندون‌ها رو تمیز نگه می‌داره.' },
            { title: '۲. غذای مرطوب (Wet Food)', text: 'برای سگ‌هایی که دندون حساس دارن یا مشکل جویدن دارن خیلی مناسبه.' },
            { title: '۳. غذای خانگی', text: 'غذای پخته‌شده با گوشت، برنج و سبزیجات که با مشورت دامپزشک باید تهیه شه تا متعادل باشه.' },
            { title: '۴. رژیم خام (BARF)', text: 'این رژیم شامل گوشت خام، استخوان و سبزیجاته و باید با دقت بالا اجرا شه تا سگ دچار کمبود نشه.' },
          ].map((item, index) => (
            <div key={index}>
              <h5 style={{ marginTop: '1.6rem', fontWeight: '600', color: '#34495e' }}>{item.title}</h5>
              <p style={{ color: '#444', lineHeight: '1.9' }}>{item.text}</p>
            </div>
          ))}

          <p style={{ marginTop: '2rem', color: '#444', lineHeight: '1.9' }}>
            همیشه مطمئن شو غذایی که به سگت می‌دی تمام نیازهای تغذیه‌ای رو تامین می‌کنه. بعضی نژادها حساس‌ترن و ممکنه نیاز خاصی داشته باشن 🐶❤️
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DogFoodArticle;
