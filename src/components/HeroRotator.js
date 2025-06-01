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
        <button className="btn btn-outline-primary btn-prev" onClick={goPrev}>
          قبلی
        </button>
        <button className="btn btn-primary btn-next" onClick={goNext}>
          بعدی
        </button>
      </div>
    </div>
  );
}

export default HeroRotator;
