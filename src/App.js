import logo from './logo.svg';
import './App.css';
import crausal_2 from '../src/images/crausal_2.jpg'
import crausal_3 from '../src/images/crausal_3.jpg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import React from "react"

function App() {
  return (
    <Container class="fluid">
      <Row>
        <Navbar fluid bg="primary" variant="dark" >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </Row>
      <Row>
        <Carousel>
          <Carousel.Item >
            <Image
              className="d-block w-100"
              src={crausal_2}
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={crausal_3}
              alt="Second slide"
            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={crausal_2}
              alt="Third slide"
            />

            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default App;