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
        <Container className="d-flex flex-row">
          <Filter />
          <ListCards />
        </Container>
      </header>
    </div>
  );
}

export default App;
