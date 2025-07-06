import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const CatBreedsArticle = () => {
  // استیت فرم نظر
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  // استیت ارورهای فرم
  const [errors, setErrors] = useState({});

  // استیت موفقیت ثبت نظر
  const [success, setSuccess] = useState(false);

  // تغییرات فرم
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // اعتبارسنجی ساده
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'نام الزامی است.';
    if (!formData.email.trim()) newErrors.email = 'ایمیل الزامی است.';
    else {
      // اعتبارسنجی ایمیل ساده
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = 'ایمیل نامعتبر است.';
    }
    if (!formData.comment.trim()) newErrors.comment = 'نظر شما نمی‌تواند خالی باشد.';
    return newErrors;
  };

  // ارسال فرم
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);

      // اینجا می‌تونی کد ارسال نظر به سرور رو اضافه کنی
      // برای الان فقط فرم ریست می‌شه
      setFormData({ name: '', email: '', comment: '' });
    }
  };

  return (
    <>
    

      <div className="container my-5 d-flex justify-content-center">
        <div
          className="card mb-2"
          style={{ maxWidth: '700px', width: '100%', cursor: 'default' }}
        >
          <img
            src="/images/blog2.jpg"
            className="card-img-top"
            alt="نژاد گربه‌ها"
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
            marginBottom: '5rem',
            cursor: 'default',
            borderRadius: '1rem',
            backgroundColor: '#fcfcfc',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)',
          }}
        >
          <h2
            className="text-center mb-4"
            style={{ fontSize: '2.3rem', fontWeight: '700', color: '#2c3e50' }}
          >
            انواع نژاد گربه‌ها 😺
          </h2>

          <p style={{ color: '#444', lineHeight: '1.9', fontSize: '1.05rem' }}>
            گربه‌ها از محبوب‌ترین حیوانات خانگی هستند که هر کدام شخصیت و ظاهر خاص خود را دارند...
          </p>

          {[
            {
              title: '۱. پرشین کت (گربه ایرانی)',
              text: 'یکی از معروف‌ترین نژادهای گربه با موهای بلند و شخصیت آرام. برای خانواده‌ها بسیار مناسب است.',
            },
            {
              title: '۲. سیامی',
              text: 'این گربه‌ها چشمان آبی درخشان و صدای خاصی دارند. بسیار اجتماعی‌اند و به ارتباط با انسان‌ها علاقه‌مندند.',
            },
            {
              title: '۳. بریتیش شورت هیر',
              text: 'با ظاهر گرد و بانمک و موهای کوتاه و نرم، این نژاد بسیار آرام و مستقل است.',
            },
            {
              title: '۴. اسکاتیش فولد',
              text: 'با گوش‌های خم‌شده‌ی خاص، چهره‌ای بامزه دارد و معمولاً رفتار آرامی دارد.',
            },
            {
              title: '۵. ماو مصری',
              text: 'این نژاد بسیار سریع و چابک است و الگوهای خال‌دار طبیعی روی بدنش دارد.',
            },
          ].map((breed, index) => (
            <div key={index}>
              <h5
                style={{ marginTop: '1.6rem', fontWeight: '600', color: '#34495e' }}
              >
                {breed.title}
              </h5>
              <p style={{ color: '#444', lineHeight: '1.9' }}>{breed.text}</p>
            </div>
          ))}

          <p style={{ marginTop: '2rem', color: '#444', lineHeight: '1.9' }}>
            شناخت نژادهای گربه به ما کمک می‌کنه که همراه مناسبی برای سبک زندگی‌مون انتخاب کنیم. 🐾
          </p>
        </div>
      </div>

      {/* فرم ثبت نظر */}
      <div className="container d-flex justify-content-center">
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: '600px',
            width: '100%',
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 0 15px rgba(0,0,0,0.1)',
            marginBottom: '10rem',
          }}
          noValidate
        >
          <h3
            className="mb-4 text-center"
            style={{ color: '#2c3e50', fontWeight: '700' }}
          >
            ثبت نظر شما
          </h3>

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
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
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
              placeholder="example@example.com"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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
              value={formData.comment}
              onChange={handleChange}
              rows="4"
              placeholder="نظر خود را اینجا بنویسید"
            ></textarea>
            {errors.comment && <div className="invalid-feedback">{errors.comment}</div>}
          </div>

          <button
            type="submit"
            className="btn short-cute-btn mt-2"
            style={{ fontWeight: '700' }}
          >
            ارسال نظر
          </button>

          {success && (
            <div
              className="alert alert-success mt-3 text-center"
              role="alert"
              style={{ fontWeight: '600' }}
            >
              نظر شما با موفقیت ثبت شد! ممنون 🌟
            </div>
          )}
        </form>
      </div>

     
    </>
  );
};

export default CatBreedsArticle;
