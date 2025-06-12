import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // اسکرول به بالا
    window.scrollTo(0, 0);

    // پاک‌کردن کلاس‌های اضافی Bootstrap modal از body
    document.body.classList.remove("modal-open");
    document.body.style = "";

    // بستن هر modal باز
    const backdrops = document.querySelectorAll(".modal-backdrop");
    backdrops.forEach((backdrop) => backdrop.remove());

    // مخفی کردن modals باز
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("show"));

  }, [pathname]);

  return null;
}
