import React, { useContext } from "react";
import {
  Container,
  Navbar as NavbarComp,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import BucksLogo from "../../assets/logo.svg";
import BlankProfile from "../../assets/blank-profile.jpeg";
import CartIcon from "../../assets/Icons/cart.png";
import UserIcon from "../../assets/Icons/user.svg";
import LogoutIcon from "../../assets/Icons/logout.svg";

import { UserContext } from "../../context/UserContext";

function NavbarUser(addCart, props) {
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
        <NavbarComp.Brand as={Link} to="/homepage">
          <img
            src={BucksLogo}
            className="img-fluid mt-1"
            style={{ width: "50px", height: "50px" }}
            alt="brand"
          />
        </NavbarComp.Brand>

        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/cart"
              className={
                props?.title === "Cart" ? `text-navbar-active` : `text-navbar`
              }
            >
              <img
                className="mt-1"
                src={CartIcon}
                alt="cart"
                style={{ width: "24px", height: "26px" }}
              ></img>
            </Nav.Link>

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
                  User
                </div>
              }
            >
              <Nav.Link
                as={Link}
                to="/profile"
                className={
                  props?.title === "Profile"
                    ? `text-navbar-active`
                    : `text-navbar`
                }
              >
                <img src={UserIcon} style={{ width: "20px", height: "20px" }} />{" "}
                Profile
              </Nav.Link>

              <Nav.Link onClick={Logout} className="text-navbar">
                <img
                  src={LogoutIcon}
                  style={{ width: "20px", height: "20px" }}
                />
                Logout
              </Nav.Link>
            </NavDropdown>
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
  );
}

export default NavbarUser;
