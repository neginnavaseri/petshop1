import React from "react";
import './Categories.css'; // استایل اختصاصی

const categories = [
  {
    name: "غذای سگ‌ها",
    image: "/images/سگ .png",
    linkText: "مشاهده محصولات"
  },
  {
    name: "غذای گربه‌ها",
    image: "/images/گربه.png",
    linkText: "مشاهده محصولات"
  },
  {
    name: "غذای پرندگان",
    image: "/images/پرنده.png",
    linkText: "مشاهده محصولات"
  },
  {
    name: "غذای ماهی‌ها",
    image: "/images/ماهی.png",
    linkText: "مشاهده محصولات"
  }
];

function Categories() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {categories.map((cat, index) => (
          <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm text-center border-0 rounded-4 category-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="card-img-top category-img"
              />
              <div className="card-body py-3 px-2">
                <h6 className="card-title fw-bold mb-2">{cat.name}</h6>
                <a href="#" className="btn btn-outline btn-sm rounded-pill">
                  {cat.linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
