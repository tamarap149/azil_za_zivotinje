import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>

          <LinkContainer to="/">
            <Navbar.Brand>
              🐾 Animal Shelter
            </Navbar.Brand>
          </LinkContainer>

          <Nav className="ms-auto">

            <LinkContainer to="/">
              <Nav.Link>Početna</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/animals">
              <Nav.Link>Životinje</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
              <Nav.Link>Prijava</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/register">
              <Nav.Link>Registracija</Nav.Link>
            </LinkContainer>

          </Nav>

        </Container>
      </Navbar>
    </header>
  );
}

export default Header;