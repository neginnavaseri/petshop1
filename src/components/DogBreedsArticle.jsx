import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const DogBreedsArticle = () => {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'لطفاً نام خود را وارد کنید.';
    if (!formData.email.trim()) {
      errors.email = 'لطفاً ایمیل خود را وارد کنید.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = 'لطفاً یک ایمیل معتبر وارد کنید.';
    }
    if (!formData.comment.trim()) errors.comment = 'لطفاً نظر خود را وارد کنید.';
    return errors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    setSubmitSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitSuccess(false);
    } else {
      // اینجا می‌تونید ارسال فرم به سرور یا هر کاری که می‌خواهید انجام بدید
      console.log('فرم ارسال شد:', formData);
      setErrors({});
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', comment: '' });
    }
  };

  return (
    <>
      

      {/* عکس بالای مقاله */}
      <div className="container my-5 d-flex justify-content-center">
        <div
          className="card mb-2"
          style={{ maxWidth: '700px', width: '100%', marginBottom: '0.7rem' }}
        >
          <img
            src="/images/blog1.jpg"
            className="card-img-top"
            alt="انواع نژاد سگ‌ها"
            style={{ height: '500px', objectFit: 'cover', cursor: 'default' }}
          />
        </div>
      </div>

      {/* متن مقاله */}
      <div className="container d-flex justify-content-center">
        <div
          className="card p-4"
          style={{
            maxWidth: '900px',
            width: '100%',
            marginBottom: '3rem',
            cursor: 'default',
            backgroundColor: '#fdfdfd',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
            borderRadius: '1rem',
          }}
        >
          <h2
            className="mb-4 text-center"
            style={{ fontSize: '2.3rem', color: '#2c3e50', fontWeight: '700' }}
          >
            انواع نژاد سگ‌ها 🐶
          </h2>

          <p style={{ color: '#444', lineHeight: '1.9', fontSize: '1.1rem' }}>
            سگ‌ها به عنوان وفادارترین همراهان انسان، در نژادهای متنوع و با ویژگی‌های متفاوت وجود دارند. هر نژاد، علاوه بر ظاهر خاصش، شخصیت و نیازهای خاصی دارد که بهتر است قبل از انتخاب سگ، آن‌ها را بشناسیم.
          </p>

          {[
            { title: '۱. ژرمن شپرد', text: 'ژرمن شپرد یکی از محبوب‌ترین نژادهای سگ است که به خاطر هوش بالا، توانایی یادگیری سریع و وفاداری فوق‌العاده شناخته شده است. این سگ‌ها در نقش‌های مختلفی مثل نگهبانی، پلیس و امداد و نجات فعالیت دارند و تربیت‌شان نسبتاً آسان است.' },
            { title: '۲. هاسکی سیبریایی', text: 'هاسکی‌ها سگ‌های انرژی‌داری هستند که علاقه زیادی به دویدن و بازی دارند. آن‌ها پوشش ضخیم و مقاومی دارند که آن‌ها را برای مناطق سرد مناسب می‌کند. این نژاد معمولاً با انسان‌ها مهربان است ولی به توجه و فعالیت زیاد نیاز دارد.' },
            { title: '۳. پودل', text: 'پودل‌ها از لحاظ هوش در رتبه‌های بالایی قرار دارند و به خاطر موهای فر و بی‌ریزششان در بین کسانی که حساسیت دارند بسیار محبوب‌اند. این نژاد برای خانواده‌ها و کودکان بسیار مناسب است و آموزش‌پذیری بالایی دارد.' },
            { title: '۴. لابرادور رتریور', text: 'لابرادورها سگ‌های مهربان و اجتماعی هستند و معمولا با کودکان و سایر حیوانات خانگی رابطه خوبی برقرار می‌کنند. آن‌ها بسیار فعال‌اند و به ورزش و بازی نیاز دارند.' },
            { title: '۵. بولداگ انگلیسی', text: 'بولداگ‌ها ظاهری خاص و دوست‌داشتنی دارند. این نژاد به دلیل بدن عضلانی و چهره‌ای جدی، معمولاً سگ آرام و دوست‌داشتنی خانواده‌ها محسوب می‌شود که زیاد اهل بازی و دویدن نیست.' },
            { title: '۶. پامرانین', text: 'پامرانین‌ها سگ‌های کوچک و پرانرژی با موهای بلند و زیبا هستند. این نژاد به مراقبت و رسیدگی به موهایش نیاز دارد و برای فضای آپارتمانی مناسب است.' }
          ].map((breed, index) => (
            <div key={index}>
              <h5
                style={{
                  color: '#34495e',
                  fontWeight: '600',
                  marginTop: '1.8rem',
                  fontSize: '1.15rem'
                }}
              >
                {breed.title}
              </h5>
              <p style={{ color: '#444', lineHeight: '1.9', fontSize: '1rem' }}>
                {breed.text}
              </p>
            </div>
          ))}

          <p
            style={{
              color: '#444',
              lineHeight: '1.9',
              marginTop: '2rem',
              fontSize: '1.05rem'
            }}
          >
            هر نژاد سگ ویژگی‌های خاصی دارد که باید در انتخاب آن‌ها به آن‌ها توجه کرد؛ از جمله میزان فعالیت، نیاز به آموزش، میزان ریزش مو، و شرایط نگهداری. قبل از اینکه تصمیم بگیریم کدام سگ را همراه خود کنیم، خوب است این موارد را در نظر بگیریم.
          </p>
        </div>
      </div>

      {/* فرم ثبت نظر */}
      <div className="container d-flex justify-content-center">
        <div
          className="card p-4"
          style={{
            maxWidth: '700px',
            width: '100%',
            marginBottom: '10rem',
            borderRadius: '1rem',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 15px rgba(0,0,0,0.05)',
            cursor: 'default'
          }}
        >
          <h3
            style={{
              textAlign: 'center',
              marginBottom: '1.5rem',
              color: '#2c3e50',
              fontWeight: '700',
            }}
          >
            ثبت نظر شما
          </h3>

          {submitSuccess && (
            <p
              style={{
                color: 'green',
                textAlign: 'center',
                marginBottom: '1rem',
                fontWeight: '600',
              }}
            >
              نظر شما با موفقیت ثبت شد. ممنون از مشارکت شما!
            </p>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* نام */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ fontWeight: '600' }}>
                نام:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                value={formData.name}
                onChange={handleChange}
                placeholder="نام خود را وارد کنید"
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            {/* ایمیل */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ fontWeight: '600' }}>
                ایمیل:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="ایمیل خود را وارد کنید"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            {/* نظر */}
            <div className="mb-3">
              <label htmlFor="comment" className="form-label" style={{ fontWeight: '600' }}>
                نظر:
              </label>
              <textarea
                id="comment"
                name="comment"
                className={`form-control ${errors.comment ? 'is-invalid' : ''}`}
                rows="5"
                value={formData.comment}
                onChange={handleChange}
                placeholder="نظر خود را اینجا بنویسید"
              ></textarea>
              {errors.comment && (
                <div className="invalid-feedback">{errors.comment}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn short-cute-btn mt-2"
              style={{ fontWeight: '600' }}
            >
              ارسال نظر
            </button>
          </form>
        </div>
      </div>

      
    </>
  );
};

export default DogBreedsArticle;
