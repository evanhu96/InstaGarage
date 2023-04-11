import { useState } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Auth from "../utils/auth";

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      expanded={expanded}
      className="flex-column border-end"
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        marginTop: "20px",
        position: "fixed",
      }}
    >
      <Navbar.Brand href="/">InstaGarage</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          {!Auth.loggedIn() ? (
            <>
              <Nav.Link
                as={NavLink}
                to="/login"
                onClick={() => setExpanded(false)}
              >
                Login
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/signup"
                onClick={() => setExpanded(false)}
              >
                Signup
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link
                as={NavLink}
                to="/profile"
                onClick={() => setExpanded(false)}
              >
                Profile
              </Nav.Link>
            </>
          )}
          <Nav.Link
            eventKey="link-2"
            as={NavLink}
            to="/"
            onClick={() => setExpanded(false)}
          >
            Timeline
          </Nav.Link>
          <Nav.Link as={NavLink} to="/post" onClick={() => setExpanded(false)}>
            Post
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/addFriend"
            onClick={() => setExpanded(false)}
          >
            Add a Friend
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/addFriend"
            onClick={() => setExpanded(false)}
          >
            Friend List
          </Nav.Link>
          {Auth.loggedIn() && (
            <Nav.Link onClick={logout} href="#">
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
