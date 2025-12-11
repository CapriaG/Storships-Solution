import React from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/StorshipsLogo.png";

function Header() {
  return (
    <header>
      {/* Barra superior */}
      <div className="top-bar">
        ¡COMPRÁ EN EL MUNDO, RECIBÍ EN CASA!
      </div>

      {/* Navbar principal */}
      <Navbar bg="white" expand="lg" className="shadow-sm">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Storships Logo"
              className="logo-header"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto nav-links">
              <Link to="services" smooth duration={500} className="nav-link">
                Servicios
              </Link>
              <Link to="calculator" smooth duration={500} className="nav-link">
                Calculadora
              </Link>
              <Link to="custom" smooth duration={500} className="nav-link">
                Personalizado
              </Link>
              <Link to="questions" smooth duration={500} className="nav-link">
                Preguntas
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;