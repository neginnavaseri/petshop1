import React from "react";

function Testimonials() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3">
            <p>"Great service and awesome products!"</p>
            <p className="text-muted">- Sarah K.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <p>"My dog loves the new toys!"</p>
            <p className="text-muted">- Ali R.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <p>"Fast delivery and good prices."</p>
            <p className="text-muted">- Mona L.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;