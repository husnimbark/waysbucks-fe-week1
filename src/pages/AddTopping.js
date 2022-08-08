import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../assets/Bucks/bucks-1.png";
import NavbarAdmin from "../components/navbar/NavbarAdmin";
import InputGroup from "react-bootstrap/InputGroup";

export default function AddTopping() {
  return (
    <>
      <NavbarAdmin />
      <Container className="mt-5">
        <Row>
          <Col sm={7}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <h1 className="text-danger">Toping</h1>
                <Form.Label></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Name Toping"
                  className="border border-danger"
                />
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Price"
                  className="border border-danger"
                />
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Photo Product"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="border border-danger"
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    className="border border-danger"
                  >
                    Click
                  </Button>
                </InputGroup>
              </Form.Group>
              <Button variant="danger" type="submit" className="w-100">
                Add Product
              </Button>
            </Form>
          </Col>
          <Col sm={5}>
            <img src={Product} alt="Product" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
