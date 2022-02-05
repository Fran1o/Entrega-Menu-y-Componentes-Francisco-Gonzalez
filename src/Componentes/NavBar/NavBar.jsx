import React from "react";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartwidget from "../Cartwidget/Cartwidget";
import { Link } from "react-router-dom";
import styles from '../../CSS/navBar.module.css';


const NavBar = () => {

    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className={styles.navBar} to='/'>
            DrumOffice
          </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">

      <Link className={styles.navBar} to='categoria/novedades'>Novedades</Link>
      <Link className={styles.navBar} to='/categoria/baterias'>Baterias</Link>
      <Link className={styles.navBar} to='/categoria/redoblantes'>Redoblantes</Link>
      <Link className={styles.navBar} to='/categoria/banquetas'>Banquetas</Link>
      <Link className={styles.navBar} to='/categoria/baquetas'>Baquetas</Link>
      <Link className={styles.navBar} to='/categoria/platillos'>Platillos</Link>
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