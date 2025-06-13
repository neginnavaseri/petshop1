import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // الگوی ساده بررسی ایمیل
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('وارد کردن ایمیل الزامی است.');
    } else if (!validateEmail(email)) {
      setError('لطفاً یک ایمیل معتبر وارد کنید.');
    } else {
      setError('');
      // عملیات ارسال لینک بازیابی
      alert("لینک بازیابی برای ایمیل ارسال شد ✅");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container py-5"
    >
      {/* نوار بالای صفحه */}
      <div
        style={{
          backgroundColor: '#ff8c00',
          color: 'white',
          padding: '1.5rem 1rem',
          textAlign: 'center',
          fontFamily: 'Tahoma, sans-serif',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          borderRadius: '8px'
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold' }}>
          حساب کاربری
        </h1>
        <p style={{ marginTop: '0.5rem', fontSize: '1.2rem' }}>
          <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
            خانه
          </Link>{' '}
          / حساب کاربری
        </p>
      </div>

      {/* فرم فراموشی رمز عبور */}
      <h2 className="mb-4">فراموشی رمز عبور</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            ایمیل خود را وارد کنید:
          </label>
          <input
            type="email"
            className={`form-control ${error ? 'is-invalid' : ''}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: '#28a745',
            borderColor: '#28a745',
            borderRadius: '8px',
            padding: '10px 20px',
            fontWeight: '600',
            fontSize: '1.1rem',
            boxShadow: '0 4px 8px rgba(40, 167, 69, 0.4)',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#218838';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(33, 136, 56, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#28a745';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.4)';
          }}
        >
          بازگردانی گذرواژه
        </button>
      </form>
    </motion.div>
  );
}

export default ForgotPassword;
