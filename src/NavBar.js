import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Routing'

function NavBar() {
  return (
    
    <Navbar style={{position:"absolute"}} expand="lg" className="bg-tertiary " >
    <Container style={{margin: "0", marginBottom: "0px",marginRight:"0",marginBottom:"0" }} className='bg'>
      <Navbar.Brand href="#home"><img style={{height:"50px",width:"200px"}} src='https://www.ombrulla.com/logo.svg'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto move size">
          <Nav.Link href="#home " style={{color:"blue"}}>Home</Nav.Link>
          {/* <Nav.Link href="#link">Service</Nav.Link> */}
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">AI Visual Inspection</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"> AI Infrastructure Inspection</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">AI People Tracking</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">AI Data Analysis</NavDropdown.Item>
            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
          </NavDropdown>
          <NavDropdown title="Product" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Asset Performance Managment</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home " >About</Nav.Link>
            <Nav.Link href="#home " >Blog</Nav.Link>
            <Nav.Link href="#home " >Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar