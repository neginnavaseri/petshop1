import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "./ShopPage.css";

const products = [
  { id: 1, name: 'حمل و نقل گربه', category: 'حمل‌ونقل', price: '980,000 تومان', image: '/images/لوازم حمل ونقل1.jpg', description: 'این باکس حمل مخصوص گربه‌هاست، راحت و ایمن برای سفرها.' },
  { id: 2, name: 'حمل و نقل سگ', category: 'حمل‌ونقل', price: '980,000 تومان', image: '/images/لوازم حمل ونقل2.jpg', description: 'مناسب برای حمل راحت و مطمئن سگ در سفر و بیرون رفتن.' },
  { id: 3, name: 'غذای خشک گربه نوع 1', category: 'غذای گربه', price: '320,000 تومان', image: '/images/cat1.jpg', description: 'غذای مقوی با پروتئین بالا مخصوص گربه‌های بالغ.' },
  { id: 4, name: 'غذای خشک گربه نوع 2', category: 'غذای گربه', price: '75,000 تومان', image: '/images/cat2.jpg', description: 'ترکیبی عالی از مواد مغذی برای رشد بهتر گربه‌ها.' },
  { id: 5, name: 'غذای خشک گربه نوع 3', category: 'غذای گربه', price: '95,000 تومان', image: '/images/cat3.jpg', description: 'دارای طعم خوشمزه که گربه‌ات عاشقش میشه.' },
  { id: 6, name: 'غذای خشک گربه نوع 4', category: 'غذای گربه', price: '400,000 تومان', image: '/images/cat4.jpg', description: 'غذای لوکس برای گربه‌های خاص‌پسند.' },
  { id: 7, name: 'غذای خشک گربه نوع 5', category: 'غذای گربه', price: '120,000 تومان', image: '/images/cat5.jpg', description: 'با ویتامین‌های ضروری برای سلامت پوست و مو.' },
  { id: 8, name: 'غذای خشک گربه نوع 6', category: 'غذای گربه', price: '210,000 تومان', image: '/images/cat6.jpg', description: 'مناسب برای گربه‌های حساس با هضم آسان.' },
  { id: 9, name: 'غذای خشک سگ', category: 'غذای سگ', price: '310,000 تومان', image: '/images/cart7.jpg', description: 'انرژی‌زا و خوش‌طعم برای سگ‌های پرانرژی.' },
  { id: 10, name: 'غذای خشک پرندگان', category: 'پرندگان', price: '40,000 تومان', image: '/images/cart8.jpg', description: 'ترکیب مغذی برای پرندگان خانگی شاداب.' },
  { id: 11, name: 'غذای مولتی پلاس سگ', category: 'غذای سگ', price: '550,000 تومان', image: '/images/cart9.jpg', description: 'مولتی ویتامین کامل برای سلامت سگ دلبندت.' },
  { id: 12, name: 'غذای مرطوب پرندگان', category: 'پرندگان', price: '90,000 تومان', image: '/images/cart10.png', description: 'مرطوب، خوشمزه و مقوی برای انواع پرندگان.' },
  { id: 13, name: 'غذای ماهی قرمز', category: 'ماهی', price: '135,000 تومان', image: '/images/cart11.jpg', description: 'برای رنگ درخشان و سلامت بیشتر ماهی‌ها.' },
  { id: 14, name: 'داروی افزایش رشد', category: 'دارو', price: '135,000 تومان', image: '/images/دارو1.jpg', description: 'کمک به رشد سریع حیوانات در حال رشد.' },
  { id: 15, name: 'مولتی ویتامین', category: 'دارو', price: '135,000 تومان', image: '/images/دارو2.jpg', description: 'تقویت سیستم ایمنی با فرمول تخصصی برای حیوانات.' },
];

const categories = ['همه', 'غذای گربه', 'غذای سگ', 'حمل‌ونقل', 'دارو', 'پرندگان', 'ماهی'];

const ShopPage = () => {
  const location = useLocation();

  const getCategoryFromURL = () => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    return categories.includes(category) ? category : 'همه';
  };

  const [selectedCategory, setSelectedCategory] = useState(getCategoryFromURL());
  const [hoveredProductId, setHoveredProductId] = useState(null);

  useEffect(() => {
    setSelectedCategory(getCategoryFromURL());
  }, [location.search]);

  const filteredProducts = selectedCategory === 'همه'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cartItems.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    toast.success(`${product.name} به سبد خرید اضافه شد 🛒`);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">فروشگاه پت‌شاپ وودمارت</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm p-3">
            <h5 className="fw-bold mb-3">فیلتر بر اساس دسته‌بندی</h5>
            {categories.map(category => (
              <button
                key={category}
                className={`btn btn-sm mb-2 w-100 text-start ${selectedCategory === category ? 'btn-primary text-white' : 'btn-outline-secondary'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="col-md-9">
          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div className="col-sm-6 col-md-4" key={product.id}>
                  <div
                    className="card-wrapper position-relative"
                    onMouseEnter={() => setHoveredProductId(product.id)}
                    onMouseLeave={() => setHoveredProductId(null)}
                  >
                    <div className="card h-100 shadow-sm">
                      <img src={product.image} className="card-img-top" alt={product.title} />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text fw-bold text-success">{product.price}</p>
                        <button className="btn btn-add-buy mt-auto" onClick={() => addToCart(product)}>
                          🛒 افزودن به سبد خرید
                        </button>
                      </div>
                    </div>
                    {hoveredProductId === product.id && (
                      <div className="product-description-hover">
                        {product.description}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-muted">محصولی یافت نشد 😢</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

