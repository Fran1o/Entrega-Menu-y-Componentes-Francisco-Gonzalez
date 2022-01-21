import React from "react";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Cartwidget from "../Components/Cartwidget";



const NavBar = () =>{
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Drum Office</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <NavDropdown title="Baterias" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/2.1">Acusticas</NavDropdown.Item>
        <NavDropdown.Item href="#action/2.2">Electricas</NavDropdown.Item>    
      </NavDropdown>
    <Nav.Link href="#features">Redoblantes</Nav.Link>
      <Nav.Link href="#features">Baquetas</Nav.Link>
      <Nav.Link href="#pricing">Banquetas</Nav.Link>
      <NavDropdown title="Platillos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Zildjian</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sabian</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Istanbul</NavDropdown.Item>        
      </NavDropdown>
    </Nav>
    <Nav>
      
      <Nav.Link eventKey={2} href="#memes">
        <Cartwidget />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default NavBar;