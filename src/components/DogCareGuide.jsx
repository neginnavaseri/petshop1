import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const DogCareGuide = () => {
  return (
    <>
      <Navbar />

      <div className="container my-5 d-flex justify-content-center">
        <div className="card mb-2" style={{ maxWidth: '700px', width: '100%' }}>
          <img
            src="/images/blog5.jpg"
            className="card-img-top"
            alt="نگهداری از سگ"
            style={{ height: '500px', objectFit: 'cover' , cursor: 'default' }}
          />
        </div>
      </div>

      <div className="container d-flex justify-content-center , cursor: 'default' ">
        <div
          className="card p-4 "
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
            راهنمای نگهداری از سگ‌ها 🐕
          </h2>

          {[
            { title: '۱. تغذیه مناسب', text: 'رژیم غذایی متعادل و مناسب نژاد و سن سگ بسیار مهمه.' },
            { title: '۲. واکسیناسیون و بهداشت', text: 'واکسن‌ها، انگل‌زدایی و حمام مرتب ضروری هستن.' },
            { title: '۳. پیاده‌روی و فعالیت', text: 'سگ‌ها نیاز به تحرک روزانه دارن تا انرژی‌شون تخلیه شه و افسرده نشن.' },
            { title: '۴. آموزش و تربیت', text: 'آموزش‌های ابتدایی مثل بشین، بیا، نه و... خیلی توی کنترل رفتارش کمک می‌کنه.' },
            { title: '۵. محبت و ارتباط', text: 'سگ‌ها به محبت و توجه انسانی نیاز دارن. اونا عضو خانواده‌ان ❤️' },
          ].map((item, index) => (
            <div key={index}>
              <h5 style={{ marginTop: '1.6rem', fontWeight: '600', color: '#34495e' }}>{item.title}</h5>
              <p style={{ color: '#444', lineHeight: '1.9' }}>{item.text}</p>
            </div>
          ))}

          <p style={{ marginTop: '2rem', color: '#444', lineHeight: '1.9' }}>
            با رعایت این نکات ساده، می‌تونی یه زندگی سالم و شاد برای سگ عزیزت فراهم کنی 😍🐾
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DogCareGuide;
