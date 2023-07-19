import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <Container className="hotline-side">
      <Container className="title d-flex flex-row justify-content-center align-items-center ">
        <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />{" "}
        <p>Hỗ trợ trực tuyến</p>
      </Container>
      <Container className="block">
        <ListGroup as="ul" className="contact-sell-information">
          <ListGroup.Item as="li" disabled>
            <FontAwesomeIcon icon={faPhone} size="lg" />
            <p>Tổng đài: 0906557799</p>
          </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            <FontAwesomeIcon icon={faPhone} size="lg" />
            <p>Chăm sóc khách hàng: 0906557799</p>
          </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            <FontAwesomeIcon icon={faPhone} size="lg" />
            <p>Báo cáo sự cố: 0906557799</p>
          </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <p>Email: info@truonglongcoltd.com </p>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </Container>
  );
};

export default Sidebar;
