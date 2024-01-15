// Mini Activity:
// Import all necessary react-bootstrap modules in one line
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
// - Modules are treated as objects and object deconstruction may be applied in order to shorten the syntax when importing modules from same packages

import { useContext } from "react";
import UserContext from "../UserContext";

export default function AppNavbar() {
  // state
  // const [user, setUser] = useState(localStorage.getItem("access"));
  // console.log(user);

  const { user } = useContext(UserContext);

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          GadgetCo.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products">
              Product
            </Nav.Link>
            {user.id !== null ? (
              user.isAdmin === true ? (
                <>
                  <Nav.Link as={NavLink} to="/addProduct">
                    AddProduct
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/profile">
                    Profile
                  </Nav.Link>

                  <Nav.Link as={NavLink} to="/logout">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/cart">
                    Cart
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/logout">
                    Logout
                  </Nav.Link>
                </>
              )
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}