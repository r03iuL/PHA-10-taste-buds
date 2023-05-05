import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
  return (
    <footer className="py-4 bg-secondary">
      <Container className='d-flex justify-content-between'>
        <Row >
          <Col md={6} className="mb-3 mb-md-0">
            <h4>TasteBuds</h4>
            <p>Thank you for visiting TasteBuds! We're passionate about food and love sharing our culinary adventures with fellow foodies. If you have any questions or feedback, we'd love to hear from you. Feel free to reach out to us through our contact page, and be sure to follow us on social media to stay up to date on our latest creations and foodie adventures.</p>
          </Col>
          <Col md={2}></Col>
          <Col md={4} >
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>1234 Main Street</li>
              <li>Anytown, USA 12345</li>
              <li>Phone: 555-555-5555</li>
              <li>Email: info@mywebsite.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer