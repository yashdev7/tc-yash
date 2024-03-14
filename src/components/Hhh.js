import NavDropdown from "react-bootstrap/NavDropdown";
import { Navbar, Nav, Button, Container, Col, NavLink } from "react-bootstrap";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hhh() {
  const circleStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#F6B26B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#12191D" }}>
      <Container fluid>
        <Nav className="ml-auto">
          <Button variant="" size="lg">
            <FontAwesomeIcon icon={faBars} style={{ color: "#C6D2D9" }} />
          </Button>
        </Nav>

        <Navbar.Brand
          href="#"
          style={{ color: "#F6B26B", fontWeight: "bold" }}
          className="m-2 p-1"
        >
          TimeChronos
        </Navbar.Brand>

        <Col className="d-flex align-items-center justify-content-end">
          {/* User Text  */}
          <Navbar.Brand
            href="#"
            className="m-2 p-1"
            style={{ color: "#009E0F" }}
          >
            Admin's Workspace
          </Navbar.Brand>

          {/* User profile option */}
          <NavLink style={circleStyle} className="p-3">
            <FontAwesomeIcon icon={faUser} style={{ color: "#FFFFFF" }} />
          </NavLink>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Hhh;
