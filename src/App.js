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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="thong-tin-chung" element={<About />} />
          <Route path="san-pham" element={<Products />} />
          <Route path="tin-tuc-du-an" element={<Projects />} />
          <Route path="tu-van" element={<Advise />} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Banner />
      <Navigation />
      <Container className="main-content">
        <Row>
          <Col xs={12} sm={7} md={6} xl={4}>
            <Sidebar />
          </Col>
          <Col xs={12} sm={5} md={6} xl={8}>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
