import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import './Navbar.css';

export default function Header() {
  return (
   
       <Navbar sticky="top" className='nav' >
      <Container>
        <Navbar.Brand href='/'>React</Navbar.Brand>
        <Nav activeKey='/'>
          <Nav.Item >
            <Nav.Link href='#'>Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link herf='#'>Hire Developers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#'>Technologies</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#'>Solutions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#'>Company</Nav.Link>
          </Nav.Item>
          <Nav.Item>
           <Button className='btn-success'>Contact Us</Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
   
  )
}
