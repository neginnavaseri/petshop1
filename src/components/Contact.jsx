import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'لطفاً نام و نام خانوادگی را وارد کنید.';
    if (!formData.email.trim()) {
      newErrors.email = 'لطفاً ایمیل را وارد کنید.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'لطفاً یک ایمیل معتبر وارد کنید.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'لطفاً موضوع پیام را وارد کنید.';
    if (!formData.message.trim()) newErrors.message = 'لطفاً توضیحات را وارد کنید.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      alert('فرم با موفقیت ارسال شد! 🌟');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* سمت چپ */}
        <div className="col-lg-6 mb-5">
          <h1 className="mb-3">تماس با ما</h1>
          <p className="mb-4">
            چگونه می‌توانم به شما کمک کنم؟<br />
            برای تماس با ما فرم مقابل را تکمیل کنید تا در سریع‌ترین زمان پشتیبانان ما با شما تماس بگیرند.
          </p>
          <h4 className="mb-3">با ما در ارتباط باشید.</h4>
          <div className="mb-4 d-flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-decoration-none text-primary fs-4">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-decoration-none text-info fs-4">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-decoration-none text-danger fs-4">
              <FaYoutube />
            </a>
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="card shadow-sm p-3" style={{
              borderRadius: '12px',
              backgroundColor: '#c6450d8d',
              maxWidth: '320px',
              width: '100%',
              transition: 'transform 0.2s ease',
              cursor: 'default'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h5 style={{ fontWeight: '600', color: '#4d0707' }}>شماره تماس</h5>
              <p style={{ color: '#190202', marginBottom: 0 }}>۰۹۱۲۳۴۵۶۷۸۹ و ۰۹۱۲۳۴۵۶۷۸۹</p>
            </div>

            <div className="card shadow-sm p-3" style={{
              borderRadius: '12px',
              backgroundColor: '#e4335c93',
              maxWidth: '320px',
              width: '100%',
              transition: 'transform 0.2s ease',
              cursor: 'default'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h5 style={{ fontWeight: '600', color: '#38042a' }}>آدرس</h5>
              <p style={{ color: '#32011c', marginBottom: 0 }}>تهران، میدان انقلاب، کوچه سوم، پلاک ۴</p>
            </div>

            <div className="card shadow-sm p-3" style={{
              borderRadius: '12px',
              backgroundColor: '#5dba8295',
              maxWidth: '320px',
              width: '100%',
              transition: 'transform 0.2s ease',
              cursor: 'default'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h5 style={{ fontWeight: '600', color: '#075219' }}>ساعت کاری</h5>
              <p style={{ color: '#064a3a', marginBottom: 0 }}>
                روزهای کاری ساعت ۱۰ تا ۲۲<br />
                پنج‌شنبه‌ها ۱۰ تا ۱۵
              </p>
            </div>
          </div>
        </div>

        {/* سمت راست - فرم تماس */}
        <div className="col-lg-6">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label className="form-label">نام و نام خانوادگی</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="نام و نام خانوادگی"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">ایمیل</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="ایمیل"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">موضوع</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                placeholder="موضوع پیام"
              />
              {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">توضیحات</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                rows="5"
                placeholder="توضیحات خود را وارد کنید"
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" className="btn short-cute-btn mt-2">ثبت</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
