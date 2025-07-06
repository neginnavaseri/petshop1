import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const DogFoodArticle = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // اعتبارسنجی فرم
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'لطفا نام خود را وارد کنید.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'لطفا ایمیل خود را وارد کنید.';
    } else {
      // چک کردن فرمت ایمیل
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

    // وقتی کاربر تایپ می‌کنه، خطا رو هم حذف کنیم
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
      

      <div className="container my-5 d-flex justify-content-center">
        <div className="card mb-2" style={{ maxWidth: '700px', width: '100%' }}>
          <img
            src="/images/blog4.jpg"
            className="card-img-top"
            alt="غذای سگ"
            style={{ height: '500px', objectFit: 'cover', cursor: 'default' }}
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
            borderRadius: '1rem',
            backgroundColor: '#fcfcfc',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)',
            cursor: 'default',
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

      
    </>
  );
};

export default DogFoodArticle;
