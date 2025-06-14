import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Banner.css'; // استایل سفارشی

const features = [
  {
    title: 'ارسال سریع سفارش‌ها',
    description: 'سفارش‌هات رو سریع و ایمن به دستت می‌رسونیم!',
    icon: '/icons/delivery-truck.png',
  },
  {
    title: 'تضمین بهترین قیمت',
    description: 'ما همیشه پایین‌ترین قیمت رو تضمین می‌کنیم.',
    icon: '/icons/wallet.png',
  },
  {
    title: 'پرداخت در محل',
    description: 'با خیال راحت موقع تحویل پرداخت کن.',
    icon: '/icons/map-pointer.png',
  },
];

export default function WhyUsSection() {
  return (
    <section
      className="why-us-section text-center text-white"
      style={{

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0',
        cursor:'default'
      }}
    >
      <Container>
      <h2
  className="section-title mb-5 fw-bold"
  style={{
    color: "#006400",          // سبز پررنگ (DarkGreen)
    fontSize: "2.5rem",        // کمی بزرگ‌تر
    fontWeight: "900",         // بولدتر از معمول
    letterSpacing: "0.5px",    // یه ذره فاصله بین حروف، برای زیبایی بیشتر
  }}
>
  چرا از وودمارت خرید کنیم؟
</h2>


        <Row className="justify-content-center gy-4">
          {features.map((item, idx) => (
            <Col key={idx} xs={12} sm={6} md={4}>
              <Card className="feature-card shadow-lg rounded-4 px-3 py-4 position-relative" 
                style={{ cursor: 'default' }}
              >
                <div className="icon-circle mb-3">
                  <img src={item.icon} alt={item.title} width="48" />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold fs-5">{item.title}</Card.Title>
                  <Card.Text className="text-muted small">
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

