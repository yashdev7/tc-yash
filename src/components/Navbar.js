import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  Container,
} from "react-bootstrap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const textColor = { color: "#DDDDDD" };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#12191D" }}>
      <Container fluid>
        <div className="d-flex center">
          {/* Dropdown */}
          <Nav className="ml-auto">
            <Button variant="" size="lg">
              <FontAwesomeIcon icon={faBars} style={textColor} />
            </Button>
          </Nav>

          {/* Navbar brand (logo) */}
          <Navbar.Brand href="/">
            <img
              src="/timesheets_logo.png"
              style={{ width: "100%", maxWidth: "120px" }}
              alt=""
            />
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
