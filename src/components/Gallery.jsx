import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Gallery() {
  return (
    <section>
    <Container className='mt-4 mb-5 '>
        <h1 className='mb-3'>Food Gallery</h1>

        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.2.351708442.1680364128&semt=sph" />
      </Card>
      <Card className='ms-4'>
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/pasta-colored-farfalle-salad-with-tomatoes-mozzarella-basil_2829-14368.jpg?size=626&ext=jpg&ga=GA1.1.351708442.1680364128&semt=sph" />
      </Card>
      <Card className='ms-4'>
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?size=626&ext=jpg&ga=GA1.2.351708442.1680364128&semt=sph" />
      </Card>
    </CardGroup>


    </Container>
    </section>
  )
}

export default Gallery