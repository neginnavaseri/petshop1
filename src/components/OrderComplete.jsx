import React, { useState } from "react";
import "./OrderComplete.css";
const initialForm = { name: "", phone: "", address: "" };
const initialErrors = { name: "", phone: "", address: "" };

const OrderComplete = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  // اعتبارسنجی فرم
  const validate = () => {
    const newErrors = { ...initialErrors };
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = "لطفاً نام و نام خانوادگی خود را وارد کنید.";
      isValid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = "لطفاً شماره تماس خود را وارد کنید.";
      isValid = false;
    } else {
      // اعتبارسنجی شماره تلفن ساده (اعداد و حداقل 10 رقم)
      const phoneRegex = /^[0-9]{10,}$/;
      if (!phoneRegex.test(form.phone.replace(/\D/g, ""))) {
        newErrors.phone = "شماره تماس معتبر وارد کنید (فقط اعداد، حداقل 10 رقم).";
        isValid = false;
      }
    }

    if (!form.address.trim()) {
      newErrors.address = "لطفاً آدرس خود را وارد کنید.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // پاک کردن خطا هنگام تایپ جدید
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // ثبت سفارش شبیه‌سازی شده
      console.log("سفارش ثبت شد:", form);
      localStorage.removeItem("cart"); // پاک کردن سبد خرید
      setSubmitted(true);
    }
  };

  // بعد از ثبت موفق، صفحه تایید رو نمایش میده
  if (submitted) {
    return (
      <div className="order-complete-container container my-5">
        <div className="card shadow p-4 text-center">
          <h2 className="text-success mb-4">✅ سفارش شما با موفقیت ثبت شد!</h2>
          <p>از اعتماد شما سپاسگزاریم. سفارش شما در حال پردازش است و به زودی ارسال خواهد شد.</p>
          <button
            className=" btn cute-orange-btn  mt-4"
            onClick={() => (window.location.href = "/")}
          >
            بازگشت به فروشگاه 🏠
          </button>
        </div>
      </div>
    );
  }

  // فرم ثبت اطلاعات کاربر
  return (
    <div className="order-complete-container container my-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">🧾 تکمیل اطلاعات ارسال سفارش</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">نام و نام خانوادگی</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">شماره تماس</label>
            <input
              type="tel"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">آدرس کامل</label>
            <textarea
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              rows="3"
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
            ></textarea>
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-success w-100">
              ثبت سفارش و نهایی‌سازی
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderComplete;
