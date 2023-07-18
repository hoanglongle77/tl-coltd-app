import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Banner from "../Banner/Banner";
import "./navigation.css";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
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
            <NavDropdown title="Sản phẩm" id="basic-nav-dropdown ">
              <NavDropdown.Item href="#action/3.1">
                Cột Đèn Chiếu Sáng
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Chế Tạo Máy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Gia Công Xạ Điện
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Kết Cấu Thép
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Mạ Kẽm Điện Phân
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Phụ Kiện Viễn Thông
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Sơn Tĩnh Điện
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Trụ Anten</NavDropdown.Item>
            </NavDropdown>
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
