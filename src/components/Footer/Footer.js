import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import "./footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer-wrapper">
      <Container className="footer-top-section">
        <Row className="row-wrapper">
          <Col m={2} sm={4} lg={2}>
            <Container className="logo-container">
              <img src={logo} alt="Truong Long Company" />
            </Container>
          </Col>
          <Col m={6} sm={12} lg={6}>
            <Container fluid className="footer-title">
              <p>Công ty xây lắp sản xuất và thương mại dịch vụ Trường Long</p>
            </Container>
            <Container fluid className="section-information-left">
              <Table responsive className="information-table">
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faBuilding}
                        style={{ color: "#ffffff" }}
                        size="2xl"
                      />
                    </td>
                    <td>
                      <strong>VĂN PHÒNG GIAO DỊCH</strong>
                      <p>Đường Số 02, KCN Hòa Cầm, Quận Cẩm Lệ, Tp. Đà Nẵng</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table responsive className="information-table">
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faAddressBook} size="2xl" />
                    </td>
                    <td>
                      <strong>LIÊN HỆ</strong>
                      <p>Email: info@truonglongcoltd.com</p>
                      <p>Email: info@truonglongcoltd.com</p>
                      <p>Email: info@truonglongcoltd.com</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <p id="business-register">Đăng ký kinh doanh</p>
            </Container>
          </Col>
          <Col m={4} sm={12} lg={4}>
            <Container fluid className="section-information-right">
              <Container fluid className="visible-element"></Container>
              <Table responsive className="information-table">
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faIndustry}
                        style={{ color: "#ffffff" }}
                        size="2xl"
                      />
                    </td>
                    <td>
                      <td>
                        <strong>FACTORY</strong>
                        <p>
                          Đường Số 02, KCN Hòa Cầm, Quận Cẩm Lệ, Tp. Đà Nẵng
                        </p>
                      </td>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table responsive className="information-table">
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#ffffff" }}
                      />
                    </td>
                    <td>
                      <td>
                        <strong>CHÍNH SÁCH BÁN HÀNG</strong>
                        <ul>
                          <li>
                            <Link>Chính sách chung</Link>
                          </li>
                          <li>
                            <Link>Chính sách bảo mật và thông tin</Link>
                          </li>
                          <li>
                            <Link>Liên hệ góp ý với Truong Long</Link>
                          </li>
                          <li>
                            <Link>Sơ đồ trang web</Link>
                          </li>
                        </ul>
                      </td>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer-bottom-section">
        <h6>
          Copyright 2023 &copy; <strong>Truong Long Company</strong>
        </h6>
      </Container>
    </Container>
  );
};

export default Footer;
