import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogSlider.css";

const blogPosts = [
  {
    id: 1,
    title: "انواع نژاد سگ‌ها",
    image: "/images/blog1.jpg",
    author: "Negin",
  },
  {
    id: 2,
    title: "انواع نژاد گربه‌ها",
    image: "/images/blog2.jpg",
    author: "Negin",
  },
  {
    id: 3,
    title: "انواع غذای گربه‌ها",
    image: "/images/blog3.jpg",
    author: "Negin",
  },
  {
    id: 4,
    title: "انواع غذای سگ‌ها",
    image: "/images/blog4.jpg",
    author: "Negin",
  },
  {
    id: 5,
    title: "راهنمای نگهداری سگ‌ها",
    image: "/images/blog5.jpg",
    author: "Negin",
  },
];

const BlogSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [showShare, setShowShare] = useState(null);
  const visibleCount = 3;
  const navigate = useNavigate();

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

  const getPostPath = (id) => {
    switch (id) {
      case 1:
        return "/articles/dog-breeds";
      case 2:
        return "/articles/cat-breeds";
      case 3:
        return "/articles/cat-food";
      case 4:
        return "/articles/dog-food";
      case 5:
        return "/articles/dog-care";
      default:
        return `/blog/${id}`;
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
              <div
                className="weblog-card"
                key={post.id}
                onClick={() => navigate(getPostPath(post.id))}
                style={{ cursor: "pointer" }}
              >
                <div className="image-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-image"
                  />
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
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/comment-form");
                    }}
                  ></i>
                </div>

                <div
                  className="blog-share"
                  onMouseEnter={() => setShowShare(i)}
                  onMouseLeave={() => setShowShare(null)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fas fa-share-alt" title="اشتراک‌گذاری"></i>

                  {showShare === i && (
                    <div className="social-icons">
                      <a
                        href="https://www.instagram.com/YourPage"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/@YourChannel"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/YourPage"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                  )}
                </div>
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
