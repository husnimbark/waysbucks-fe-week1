import React, { useContext } from "react";
import {
  Container,
  Navbar as NavbarComp,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import BucksLogo from "../../assets/logo.svg";
import BlankProfile from "../../assets/blank-profile.jpeg";

import { UserContext } from "../../context/UserContext";

function NavbarAdmin(props) {
  const [_, dispatch] = useContext(UserContext);
  const navigate = useNavigate();

  const Logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <NavbarComp expand="lg">
      <Container>
        <NavbarComp.Brand as={Link} to="/transaction">
          <img
            src={BucksLogo}
            className="img-fluid mt-1"
            style={{ width: "50px", height: "50px" }}
            alt="brand"
          />
        </NavbarComp.Brand>

        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto dropdown-toggle::after">
            <NavDropdown
              className="dropdown"
              eventkey={1}
              title={
                <div className="ms-auto f-2">
                  <img
                    className="rounded-circle border border-3 me-2 mb-1"
                    style={{ width: "35px", height: "35px" }}
                    src={BlankProfile}
                    alt="UserPic"
                  />
                  Admin
                </div>
              }
            >
              <Nav.Link
                as={Link}
                to="/add-bucks"
                className={
                  props?.title === "Book-List"
                    ? `text-navbar-active`
                    : `text-navbar`
                }
              >
                Add Bucks
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/add-topping"
                className={
                  props?.title === "Book-List"
                    ? `text-navbar-active`
                    : `text-navbar`
                }
              >
                Add Topping
              </Nav.Link>

              <Nav.Link onClick={Logout} className="text-navbar">
                Logout
              </Nav.Link>
            </NavDropdown>
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
  );
}

export default NavbarAdmin;
