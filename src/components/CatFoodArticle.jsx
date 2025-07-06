import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const CatFoodArticle = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'لطفاً نام خود را وارد کنید.';
    if (!formData.email.trim()) newErrors.email = 'لطفاً ایمیل خود را وارد کنید.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = 'ایمیل وارد شده معتبر نیست.';
    if (!formData.comment.trim()) newErrors.comment = 'لطفاً نظر خود را بنویسید.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      // اینجا می‌توانی ارسال داده‌ها به سرور را اضافه کنی
      setFormData({ name: '', email: '', comment: '' }); // خالی کردن فرم بعد از ارسال
    }
  };

  return (
    <>
      

      <div className="container my-5 d-flex justify-content-center">
        <div className="card mb-2" style={{ maxWidth: '700px', width: '100%', cursor: 'default' }}>
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
            marginBottom: '3rem',
            cursor: 'default',
            borderRadius: '1rem',
            backgroundColor: '#fcfcfc',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)',
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

      {/* فرم ارسال نظر */}
      <div className="container d-flex justify-content-center">
        <div
          className="card p-4"
          style={{
            maxWidth: '900px',
            width: '100%',
            marginBottom: '10rem',
            borderRadius: '1rem',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 12px rgba(0,0,0,0.1)',
          }}
        >
          <h3 className="mb-4" style={{ color: '#2c3e50' }}>ارسال نظر شما</h3>

          {submitted && (
            <div
              style={{
                backgroundColor: '#d4edda',
                color: '#155724',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                textAlign: 'center',
                fontWeight: '600',
              }}
            >
              نظر شما با موفقیت ثبت شد. ممنون از همراهی‌تان! 😊
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ fontWeight: '600' }}>
                نام شما
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="نام خود را وارد کنید"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ fontWeight: '600' }}>
                ایمیل شما
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="comment" className="form-label" style={{ fontWeight: '600' }}>
                نظر شما
              </label>
              <textarea
                className={`form-control ${errors.comment ? 'is-invalid' : ''}`}
                id="comment"
                name="comment"
                rows="4"
                value={formData.comment}
                onChange={handleChange}
                placeholder="نظر خود را اینجا بنویسید..."
              ></textarea>
              {errors.comment && <div className="invalid-feedback">{errors.comment}</div>}
            </div>

            <button type="submit" className="btn short-cute-btn mt-2">
              ارسال نظر
            </button>
          </form>
        </div>
      </div>

      
    </>
  );
};

export default CatFoodArticle;
