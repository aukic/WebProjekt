import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Breadcrumb,
  Card,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import ListCards from "./components/Cards";
import { Route, Router, Routes } from "react-router-dom";
import Details from "./components/Details";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          expand="sm"
          collapseOnSelect
        ></Navbar>
        <Container>
          <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            expand="sm"
            collapseOnSelect
            className="mt-3"
            style={{ zIndex: 1 }}
          >
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
              <Nav className="d-flex flex-row justify-content-center">
                <Nav.Link href="#cars">Cars</Nav.Link>
                <Nav.Link href="#motorcycles">Motorcycles</Nav.Link>
                <Nav.Link href="#vans">Vans</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Filter />
          <ListCards />
        </Container>
      </header>
    </div>
  );
}

export default App;
