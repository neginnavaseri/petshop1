import React, { useState } from 'react';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [comment, setComment] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // ✅ پیام کلی خطا

  const validate = () => {
    const newErrors = {};
    if (!comment.trim()) newErrors.comment = 'لطفاً دیدگاه خود را وارد کنید.';
    if (!name.trim()) newErrors.name = 'لطفاً نام خود را وارد کنید.';
    if (!email.trim()) newErrors.email = 'لطفاً ایمیل خود را وارد کنید.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'فرمت ایمیل معتبر نیست.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setErrorMessage('لطفاً تمام فیلدهای الزامی را به درستی وارد کنید.');
      setSuccessMessage('');
      return;
    }

    // موفقیت
    setSuccessMessage('دیدگاه شما با موفقیت ثبت شد. پیروز باشید! 🎉');
    setErrorMessage('');

    // ریست فرم
    setName('');
    setEmail('');
    setWebsite('');
    setComment('');
    setRemember(false);
    setErrors({});

    // حذف پیام موفقیت بعد از چند ثانیه
    setTimeout(() => {
      setSuccessMessage('');
    }, 6000);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">ثبت نظر</h2>

      {/* ✅ پیام موفقیت */}
      {successMessage && (
        <div className="alert alert-success text-center fw-bold" role="alert">
          {successMessage}
        </div>
      )}

      {/* ✅ پیام کلی خطا */}
      {errorMessage && (
        <div className="alert alert-danger text-center fw-bold" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-100 w-md-75 mx-auto">
        <div className="mb-3">
          <label className="form-label">دیدگاه</label>
          <textarea
            className={`form-control ${errors.comment ? 'is-invalid' : ''}`}
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          {errors.comment && <div className="invalid-feedback">{errors.comment}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">نام شما</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">ایمیل</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">وبسایت</label>
          <input
            className="form-control"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="form-check mb-4" dir="rtl">
          <label className="form-check-label d-flex align-items-center" htmlFor="rememberInfo">
            <input
              className="form-check-input ms-2"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              id="rememberInfo"
            />
            ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.
          </label>
        </div>

        <button
          type="submit"
          className="btn short-cute-btn px-4 py-2 fw-bold rounded-3"
          style={{ fontSize: '1rem', letterSpacing: '0.5px' }}
        >
          فرستادن دیدگاه
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
