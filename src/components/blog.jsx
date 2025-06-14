import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './blog.css';

const blogPosts = [
  {
    id: 1,
    title: "انواع نژاد سگ‌ها",
    image: "/images/blog1.jpg",
    author: "Negin",
    description: "آشنایی با نژادهای مختلف سگ و ویژگی‌های آن‌ها",
  },
  {
    id: 2,
    title: "انواع نژاد گربه‌ها",
    image: "/images/blog2.jpg",
    author: "Negin",
    description: "نژادهای محبوب گربه‌ها و خصوصیات رفتاری‌شان",
  },
  {
    id: 3,
    title: "انواع غذای گربه‌ها",
    image: "/images/blog3.jpg",
    author: "Negin",
    description: "چه غذاهایی برای گربه‌ها مفید است؟",
  },
  {
    id: 4,
    title: "انواع غذای سگ‌ها",
    image: "/images/blog4.jpg",
    author: "Negin",
    description: "راهنمای تغذیه سالم برای سگ‌ها",
  },
  {
    id: 5,
    title: "راهنمای نگهداری سگ‌ها",
    image: "/images/blog5.jpg",
    author: "Negin",
    description: "نکاتی برای مراقبت و تربیت سگ‌ها",
  },
];

const Blog = () => {
  const [activeShare, setActiveShare] = useState(null);
  const popupRefs = useRef([]);
  const navigate = useNavigate();

  const getPostPath = (id) => {
    switch (id) {
      case 1:
        return '/articles/dog-breeds';
      case 2:
        return '/articles/cat-breeds';
      case 3:
        return '/articles/cat-food';
      case 4:
        return '/articles/dog-food';
      case 5:
        return '/articles/dog-care';
      default:
        return `/blog/${id}`;
    }
  };

  const handleClickOutside = (e) => {
    if (
      activeShare !== null &&
      popupRefs.current[activeShare] &&
      !popupRefs.current[activeShare].contains(e.target)
    ) {
      setActiveShare(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeShare]);

  const toggleShare = (index) => {
    setActiveShare(activeShare === index ? null : index);
  };

  return (
    <div className="container my-5 blog-section">
      <h2 className="text-center mb-5">مطالب وبلاگ ما</h2>
      <div className="row">
        {blogPosts.map((post, index) => {
          const path = getPostPath(post.id);

          return (
            <div className="col-md-4 mb-4" key={post.id}>
  <div
    className="card  blog-card position-relative"
    style={{ minHeight: '360px', cursor: 'pointer' }}
    onClick={() => navigate(path)}
  >
    <div className="image-wrapper position-relative">
      <img
        src={post.image}
        alt={post.title}
        className="card-img-top blog-image"
      />
      <div className="dots-overlay">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>

    <div className="card-body d-flex flex-column justify-content-between p-2">
      <h5 className="card-title mt-2 mb-2 text-center" style={{ fontSize: '1rem' }}>
        {post.title}
      </h5>

      <div className="d-flex justify-content-center align-items-center gap-3 my-2">
        <span className="text-muted d-flex align-items-center" style={{ fontSize: '0.85rem' }}>
          <i className="fas fa-user me-1"></i> {post.author}
        </span>
        <i
          className="fas fa-comment comment-icon"
          title="ثبت نظر"
          onClick={(e) => {
            e.stopPropagation();
            navigate('/comment-form');
          }}
          style={{ cursor: 'pointer' }}
        ></i>
        <div
          className="position-relative"
          ref={(el) => (popupRefs.current[index] = el)}
          onClick={(e) => e.stopPropagation()}
        >
          <i
            className="fas fa-share-alt share-icon"
            onClick={() => toggleShare(index)}
            title="اشتراک‌گذاری"
            style={{ cursor: 'pointer' }}
          ></i>
          {activeShare === index && (
            <div className="share-popup">
              <a href="https://www.instagram.com/YourPage" target="_blank" rel="noopener noreferrer" title="اینستاگرام">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@YourChannel" target="_blank" rel="noopener noreferrer" title="یوتیوب">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" title="فیسبوک">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          )}
        </div>
      </div>

      <p className="card-text text-muted small text-center mb-2">{post.description}</p>

      <div className="text-center mt-auto">
        <button
          className="btn short-cute-btn btn-sm px-3 py-1"
          onClick={(e) => {
            e.stopPropagation();
            navigate(path);
          }}
        >
          ادامه مطلب
        </button>
      </div>
    </div>
  </div>
</div>

          );
        })}
      </div>
    </div>
  );
};

export default Blog;
