import React from "react";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartwidget from "../Cartwidget/Cartwidget";
import { Link } from "react-router-dom";


const NavBar = () => {

    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to='/'>
            DrumOffice
          </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">

      <Link to='/categoria/baterias'>Baterias</Link>
      <Link to='/categoria/redoblantes'>Redoblantes</Link>
      <Link to='/categoria/banquetas'>Banquetas</Link>
      <Link to='/categoria/baquetas'>Baquetas</Link>
      <Link to='/categoria/platillos'>Platillos</Link>
      </Nav>
    <Link to='carrito'>
      <Cartwidget />
    </Link>

  </Navbar.Collapse>
  </Container>
</Navbar>
    
    );

}

export default NavBar;