import { Routes, Route, Outlet } from "react-router-dom";

import { Navigation, Footer, Banner, Sidebar } from "./components";
import {
  Home,
  About,
  Products,
  Projects,
  Advise,
  Contact,
  Error,
} from "./pages";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./app.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="thong-tin-chung" element={<About />} />
          <Route path="san-pham" element={<Products />} />
          <Route path="tin-tuc-du-an" element={<Projects />} />
          <Route path="tu-van" element={<Advise />} />
          <Route path="lien-he" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Banner />
      <Navigation />
      <Container className="main-content" fluid>
        <Row>
          <Col className="section-left" xs={12} sm={12} md={5} xl={4}>
            <Sidebar />
          </Col>
          <Col className="section-right" xs={12} sm={12} md={7} xl={8}>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

function HomeLayout() {
  return (
    <>
      <Banner />
      <Navigation />
      <Container className="news-section">News</Container>
      <Container className="main-content" fluid>
        <Row>
          <Col className="section-left" xs={12} sm={12} md={5} xl={4}>
            <Sidebar />
          </Col>
          <Col className="section-right" xs={12} sm={12} md={7} xl={8}>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
