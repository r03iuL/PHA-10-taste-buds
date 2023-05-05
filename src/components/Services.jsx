import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Row, Col, Image } from 'react-bootstrap';

function Services() {
  return (
    <section id="about" className='mt-5 mb-5'>
    <Container>
      <Row>
        <Col md={6}>
          <h2>About Our Chef</h2>
          <p style={{
            fontSize: "20px",
            lineHeight: "1.5",
            
          }}>At TasteBuds, we pride ourselves on having the most talented and passionate chefs in the industry. Our head chef, Chef John, is no exception. With over 20 years of experience in the culinary world, Chef John has mastered the art of combining unique flavors and creating dishes that leave our customers craving for more. His passion for food is contagious, and he never fails to inspire our team to push the boundaries and come up with exciting new recipes. From classic comfort food to fusion cuisine, Chef John's creations are a true delight for the taste buds. At TasteBuds, we're lucky to have Chef John leading our team and bringing his culinary expertise to the table every day.</p>
        </Col>
        <Col md={6}>
          <Image src="https://as2.ftcdn.net/v2/jpg/01/28/67/99/1000_F_128679975_hjodZmcchTn1ywLmpfVWd7nz0Gse5ZEc.jpg" alt="Chef" fluid />
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Services