import React, { useState } from "react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";

function HeroRotator() {
  const [currentHero, setCurrentHero] = useState(1);

  const goNext = () => {
    setCurrentHero(prev => (prev === 1 ? 2 : 1));
  };

  const goPrev = () => {
    setCurrentHero(prev => (prev === 1 ? 2 : 1));
  };

  return (
    <div>
      {currentHero === 1 ? <Hero1 /> : <Hero2 />}

      <div className="d-flex justify-content-center gap-3 mt-3">
  <button
    className="btn btn-outline-primary btn-prev fw-bold px-4 py-2 rounded-pill border-2"
    style={{
      borderColor: "#ff8c94", // گلبهی
      color: "#ff8c94",
      transition: "all 0.3s ease",
      backgroundColor: "#fdf3f4", // یه طوسی خیلی روشن مایل به گلبهی
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#ff8c94";
      e.target.style.color = "#fff";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#fdf3f4";
      e.target.style.color = "#ff8c94";
    }}
    onClick={goPrev}
  >
    قبلی
  </button>

  <button
    className="btn btn-primary btn-next fw-bold px-4 py-2 rounded-pill border-0"
    style={{
      backgroundColor: "#ff914d", // پرتغالی شاد
      color: "#fff",
      transition: "transform 0.2s ease, background-color 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#e76f2f";
      e.target.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#ff914d";
      e.target.style.transform = "scale(1)";
    }}
    onClick={goNext}
  >
    بعدی
  </button>
</div>

    </div>
  );
}

export default HeroRotator;
