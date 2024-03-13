import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const textColor = { color: "#DDDDDD" };
  const circleStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#333333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#12191D" }}>
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center">
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

          {/* User profile option */}
          <div style={circleStyle}>
            <FontAwesomeIcon icon={faUser} style={{ color: "#DDDDDD" }} />
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
