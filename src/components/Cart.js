import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const updateCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const handleIncrease = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    updateCart(updated);
  };

  const handleDecrease = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      updateCart(updated);
    } else {
      updated.splice(index, 1);
      updateCart(updated);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const numericPrice = parseInt(item.price.replace(/\D/g, ""));
      return total + numericPrice * item.quantity;
    }, 0);
  };

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-4 text-orange">🛍️ سبد خرید شما</h3>

      {cartItems.length === 0 ? (
        <p className="text-muted">سبد خرید شما خالی است.</p>
      ) : (
        <>
          <div className="row g-3">
            {cartItems.map((item, index) => (
              <div className="col-md-6" key={index}>
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title mb-1">{item.name}</h5>
                      <p className="mb-1 text-success fw-bold">قیمت: {item.price}</p>
                      <p className="mb-1">تعداد: {item.quantity}</p>
                      <p className="fw-bold">
                        مجموع:{" "}
                        {parseInt(item.price.replace(/\D/g, "")) * item.quantity} تومان
                      </p>
                    </div>
                    <div>
                      <button
                        className="btn btn-sm btn-outline-success me-2"
                        onClick={() => handleIncrease(index)}
                      >
                        ➕
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDecrease(index)}
                      >
                        ➖
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h5 className="fw-bold text-end">
              💰 جمع کل:{" "}
              <span className="text-success">
                {calculateTotal().toLocaleString()} تومان
              </span>
            </h5>
            <div className="d-flex justify-content-end mt-3">
              <button className="btn btn-outline-danger" onClick={handleClearCart}>
                🗑 پاک کردن سبد خرید
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

