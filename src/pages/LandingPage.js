import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card } from "react-bootstrap";
import Jumbotron from "../assets/jumbotron.png";
import Bucks from "../assets/Bucks/bucks-1.png";
import Login from "../components/modal/Login";
import Register from "../components/modal/Register";
import { dataProduct } from "../../src/dummy/DataDummy";

export default function LandingPages() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseRegister = () => setShowRegister(false);

  function switchRegister() {
    handleCloseLogin();

    setShowRegister(true);
  }

  function switchLogin() {
    handleCloseRegister();

    setShowLogin(true);
  }
  return (
    <>
      <Navbar />

      <Container>
        <img
          className="mt-5 ms-2"
          src={Jumbotron}
          alt="Jumbotron"
          style={{ cursor: "pointer" }}
        ></img>
      </Container>

      <Container className="mb-5">
        <h2 className="text-start text-danger my-5 mx-2">
          <b>Let's Order</b>
        </h2>
        <Row className="gap-1 mx-2">
          {dataProduct.map((item, index) => (
            <Col className="mb-3 ">
              <Card
                className="rounded-3 bgCard text-decoration-none"
                style={{ width: "14rem", cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  onClick={() => {
                    setShowLogin(true);
                  }}
                />
                <Card.Body className="bg-card">
                  <Card.Title className="text-danger text-decoration-none">
                    {item.name}
                  </Card.Title>
                  <Card.Text className="text-danger text-decoration-none">
                    Rp {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Login
        show={showLogin}
        handleClose={handleCloseLogin}
        switchRegister={switchRegister}
      />

      <Register
        show={showRegister}
        handleClose={handleCloseRegister}
        switchLogin={switchLogin}
      />
    </>
  );
}
