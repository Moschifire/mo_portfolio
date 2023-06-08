import React from 'react';
import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import "./Header.css";

const Header = () => {

  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <logo className="logo">MOSCHIFIRE</logo>
            <Nav.Link href="#home" className={activeLink == "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink == "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink == "contact" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("contact")}>Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header