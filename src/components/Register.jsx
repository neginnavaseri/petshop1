import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'لطفا نام کاربری را وارد کنید';
    if (!formData.email.trim()) newErrors.email = 'لطفا ایمیل را وارد کنید';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'ایمیل وارد شده معتبر نیست';
    if (!formData.password.trim()) newErrors.password = 'لطفا رمز عبور را وارد کنید';
    else if (formData.password.length < 6) newErrors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
    return newErrors;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('ثبت نام شما با موفقیت انجام شد!');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="container py-4" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">ثبت نام</h2>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">نام کاربری</label>
        <input
          type="text"
          id="username"
          name="username"
          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">ایمیل</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">رمز عبور</label>
        <input
          type="password"
          id="password"
          name="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
      </div>

      <button
        type="submit"
        className="btn btn-success"
        style={{ marginTop: '20px',marginBottom:'20px', padding: '10px 20px', fontWeight: 'bold', borderRadius: '8px' }}
      >
        ثبت نام
      </button>
    </form>
  );
}

export default Register;
