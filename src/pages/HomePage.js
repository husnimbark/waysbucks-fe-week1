import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import NavbarUser from "../components/navbar/NavbarUser";
import Jumbotron from "../assets/jumbotron.png";

import { dataProduct } from "../../src/dummy/DataDummy";
import { Link } from "react-router-dom";
import AddItem from "../components/modal/AddItem";
import { useNavigate } from "react-router-dom";
// import dataProduct from "../dummy/Drink";

export default function HomePage() {
  const [showAddItem, setShowAddItem] = useState(false);

  const handleCloseAddItem = () => setShowAddItem(false);

  const [drinks] = useState(dataProduct);
  console.log(drinks);
  const navigate = useNavigate();

  const navigateAddCart = (id) => {
    navigate("/add-cart/" + id);
  };

  return (
    <>
      <NavbarUser />

      <Container>
        <img
          className="mt-5 ms-4"
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
          {drinks.map((item, index) => (
            <Col className="mb-3 ">
              <Card
                className="rounded-3 bgCard text-decoration-none"
                style={{ width: "14rem", cursor: "pointer" }}
                // onClick={() => {
                //   setShowAddItem(true);
                // }}
                onClick={() => navigateAddCart(item?.id)}
              >
                <Card.Img variant="top" src={item.image} />
                <Card.Body className="bg-card">
                  <Card.Title className="text-danger text-decoration-none">
                    {item.name}
                  </Card.Title>
                  <Card.Text className="text-danger text-decoration-none">
                    Rp. {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <AddItem show={showAddItem} handleClose={handleCloseAddItem} />
    </>
  );
}
