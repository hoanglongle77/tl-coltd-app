import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navigation.css";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="header-content bg-body-tertiary">
      <Container className="navbar-wrapper">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
              Trang chủ
            </Nav.Link>
            <Nav.Link as={Link} to="/thong-tin-chung">
              Giới thiệu
            </Nav.Link>
            <Nav.Link as={Link} to="/san-pham">
              Sản phẩm
            </Nav.Link>
            <Nav.Link as={Link} to="/tin-tuc-du-an">
              Dự án
            </Nav.Link>
            <Nav.Link as={Link} to="/tu-van">
              Tư vấn
            </Nav.Link>
            <Nav.Link as={Link} to="/lien-he">
              Liên hệ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
