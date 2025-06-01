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
        backgroundImage: 'url(/images/B.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0',
      }}
    >
      <Container>
      <h2 className="section-title mb-5 fw-bold" style={{ color: 'black' }}>
  چرا از وودمارت خرید کنیم؟
           </h2>

        <Row className="justify-content-center gy-4">
          {features.map((item, idx) => (
            <Col key={idx} xs={12} sm={6} md={4}>
              <Card className="feature-card shadow-lg rounded-4 px-3 py-4 position-relative">
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

