import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const DogCareGuide = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // تابع اعتبارسنجی فرم
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'لطفا نام خود را وارد کنید.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'لطفا ایمیل خود را وارد کنید.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'لطفا یک ایمیل معتبر وارد کنید.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'لطفا نظر خود را وارد کنید.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // پاک کردن خطا موقع تایپ
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
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
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <>
      <Navbar />

      <div className="container my-5 d-flex justify-content-center">
        <div className="card mb-2" style={{ maxWidth: '700px', width: '100%' }}>
          <img
            src="/images/blog5.jpg"
            className="card-img-top"
            alt="نگهداری از سگ"
            style={{ height: '500px', objectFit: 'cover', cursor: 'default' }}
          />
        </div>
      </div>

      <div className="container d-flex justify-content-center" style={{ cursor: 'default' }}>
        <div
          className="card p-4"
          style={{
            maxWidth: '900px',
            width: '100%',
            marginBottom: '4rem',
            borderRadius: '1rem',
            backgroundColor: '#fcfcfc',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)',
            cursor: 'default',
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

      {/* فرم ثبت نظر */}
      <div className="container d-flex justify-content-center mb-5">
        <div
          className="card p-4"
          style={{
            maxWidth: '900px',
            width: '100%',
            borderRadius: '1rem',
            backgroundColor: '#fff',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)',
          }}
        >
          <h3 className="mb-4 text-center" style={{ color: '#2c3e50', fontWeight: '700' }}>
            ثبت نظر شما
          </h3>

          {submitted && (
            <div
              className="alert alert-success text-center"
              role="alert"
              style={{ fontWeight: '600' }}
            >
              ممنون از نظرت! ❤️
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ fontWeight: '600' }}>
                نام:
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
                ایمیل:
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ایمیل خود را وارد کنید"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label" style={{ fontWeight: '600' }}>
                نظر شما:
              </label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="نظر خود را اینجا بنویسید"
              />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" className="btn short-cute-btn rounded-pill py-2" style={{ fontWeight: '700' }}>
              ارسال نظر
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DogCareGuide;
