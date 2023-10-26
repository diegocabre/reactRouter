import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg" bg="dark" variant="dark">
      <Container className="container">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <div>
        <Navbar.Brand href="/">Happy Cake</Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
