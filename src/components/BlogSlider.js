import React, { useState } from "react";
import "./BlogSlider.css";

// اطلاعات هر پست وبلاگ
const blogPosts = [
  {
    title: "انواع نژاد سگ‌ها",
    image: "/images/blog1.jpg",
    author: "Negin",
  },
  {
    title: "انواع نژاد گربه‌ها",
    image: "/images/blog2.jpg",
    author: "Negin",
  },
  {
    title: "انواع غذای گربه‌ها",
    image: "/images/blog3.jpg",
    author: "Negin",
  },
  {
    title: "انواع غذای سگ‌ها",
    image: "/images/blog4.jpg",
    author: "Negin",
  },
  {
    title: "راهنمای نگهداری سگ‌ها",
    image: "/images/blog5.jpg",
    author: "Negin",
  },
];

const BlogSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const visibleCount = 3;

  const handleNext = () => {
    if (startIndex + visibleCount < blogPosts.length) {
      setStartIndex(startIndex + 2);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 2);
    }
  };

  const visibleCards = blogPosts.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="weblog-slider">
      <h2 className="weblog-header">مطالب وبلاگ</h2>
      <div className="weblog-container">
        <button
          className="prev-btn"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          قبلی
        </button>

        <div className="weblog-cards-wrapper">
          <div className="weblog-cards">
            {visibleCards.map((post, i) => (
              <div className="weblog-card" key={i}>
                 <div className="image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="dots-overlay">
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
  </div>


                <h3 className="blog-title">{post.title}</h3>
                <div className="blog-author">
                  <i className="fas fa-user author-icon"></i>
                  <span>{post.author}</span>
                  <i
                    className="fas fa-comment comment-icon"
                    title="ثبت نظر"
                  ></i>
                </div>
                <div
  className="blog-share"
  onMouseEnter={() => setShowShare(true)}
  onMouseLeave={() => setShowShare(false)}
>
  <div className="blog-share">
    <i className="fas fa-share-alt" title="اشتراک‌گذاری"></i>
  </div>

  {showShare && (
    <div className="social-icons">
      <a
        href={`https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(
          post.url
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          post.url
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href={`https://t.me/share/url?url=${encodeURIComponent(post.url)}`}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-telegram"></i>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          post.url
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-facebook"></i>
      </a>
    </div>
  )}
</div>

                
                <p className="read-more">ادامه مطلب</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="next-btn"
          onClick={handleNext}
          disabled={startIndex + visibleCount >= blogPosts.length}
        >
          بعدی
        </button>
        
      </div>

    </div>
  );
};

export default BlogSlider;
