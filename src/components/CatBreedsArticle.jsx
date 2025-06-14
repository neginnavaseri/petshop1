// CatBreedsArticle.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const CatBreedsArticle = () => {
  return (
    <>
      <Navbar />

      <div className="container my-5 d-flex justify-content-center">
        <div className="card mb-2" style={{ maxWidth: '700px', width: '100%',   cursor: 'default' }}>
          <img
            src="/images/blog2.jpg"
            className="card-img-top"
            alt="نژاد گربه‌ها"
            style={{ height: '500px', objectFit: 'cover'   , cursor: 'default'}}
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
            انواع نژاد گربه‌ها 😺
          </h2>

          <p style={{ color: '#444', lineHeight: '1.9', fontSize: '1.05rem' }}>
            گربه‌ها از محبوب‌ترین حیوانات خانگی هستند که هر کدام شخصیت و ظاهر خاص خود را دارند...
          </p>

          {[
            { title: '۱. پرشین کت (گربه ایرانی)', text: 'یکی از معروف‌ترین نژادهای گربه با موهای بلند و شخصیت آرام. برای خانواده‌ها بسیار مناسب است.' },
            { title: '۲. سیامی', text: 'این گربه‌ها چشمان آبی درخشان و صدای خاصی دارند. بسیار اجتماعی‌اند و به ارتباط با انسان‌ها علاقه‌مندند.' },
            { title: '۳. بریتیش شورت هیر', text: 'با ظاهر گرد و بانمک و موهای کوتاه و نرم، این نژاد بسیار آرام و مستقل است.' },
            { title: '۴. اسکاتیش فولد', text: 'با گوش‌های خم‌شده‌ی خاص، چهره‌ای بامزه دارد و معمولاً رفتار آرامی دارد.' },
            { title: '۵. ماو مصری', text: 'این نژاد بسیار سریع و چابک است و الگوهای خال‌دار طبیعی روی بدنش دارد.' }
          ].map((breed, index) => (
            <div key={index}>
              <h5 style={{ marginTop: '1.6rem', fontWeight: '600', color: '#34495e' }}>{breed.title}</h5>
              <p style={{ color: '#444', lineHeight: '1.9' }}>{breed.text}</p>
            </div>
          ))}

          <p style={{ marginTop: '2rem', color: '#444', lineHeight: '1.9' }}>
            شناخت نژادهای گربه به ما کمک می‌کنه که همراه مناسبی برای سبک زندگی‌مون انتخاب کنیم. 🐾
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CatBreedsArticle;
