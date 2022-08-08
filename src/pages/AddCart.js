import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import addCart from "../css/addCart.css";
// import { dataTopping } from "../dummy/DataDummy";
import product1 from "../assets/product1.svg";
import Rp from "rupiah-format";
import { useParams } from "react-router-dom";
import dataTopping from "../dummy/Topping";
import dataDrinks from "../dummy/Drink";
import NavbarUser from "../components/navbar/NavbarUser";

const AddCart = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(dataTopping.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnchage = (position) => {
    const updateCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updateCheckedState);

    const totalPrice = updateCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + dataTopping[index].price;
      }
      return sum;
    }, 0);
    console.log(totalPrice);
    setTotal(totalPrice);
  };

  const id = useParams();
  const [topping] = useState(dataTopping);
  const [drinksDummy] = useState(dataDrinks);
  const [cartCounter, setCartCounter] = useState(0);
  const index = id.id - 1;
  const response = drinksDummy[index];

  const handleOnIncrease = () => {
    return setCartCounter(cartCounter + 1);
  };


  return (
    <Container>
      <NavbarUser props={cartCounter} />
      <Row id="row-detail-product">
        <Col className="detail-drink mt-5">
          <img
            id="detail-img-drink"
            className="mt-4 shadow-lg"
            src={response?.img}
            value={response?.img}
          />
        </Col>
        <Col id="right-side-addtpg" className="mt-5">
          <div className="title-detail-product">
            <p className="mt-4">{response?.name}</p>
          </div>
          <div className="price-drink">
            <p className="mt-2">{Rp.convert(response?.price)}</p>
          </div>
          <div className="toping-add">
            <p className="mt-5">Toping</p>
          </div>

          {/* MAPPING TOPPING */}
          <Row>
            {topping.map((item, index) => (
              <div key={index} className="topping-datas ms-4 col">
                <div className="img-data-toping toppings-list-item">
                  <div>
                    <input
                      type="checkbox"
                      className="poppingCheck"
                      style={{ display: "none" }}
                      id={`custom-checkbox-${index}`}
                      checked={checkedState[index]}
                      onChange={() => handleOnchage(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>
                      <img className="mb-3 cursor-pointer" src={item?.img} />
                    </label>

                    <p id="toping-name" className="mb-5">
                      {item?.name}
                    </p>
                  </div>
                </div>
                <div className="price-data-toping ms-4 mb-5" hidden>
                  <p>{item?.price}</p>
                </div>
              </div>
            ))}

            {/* END MAPPING */}

            <div className="sub-total d-flex mb-5">
              <div className="left-total">Total</div>
              <div className="right-total">{Rp.convert(27000 + total)}</div>
            </div>
            <div className="btn-add-cart mb-5 mt-2">
              <button className="mb-2" type="submit" onClick={handleOnIncrease}>
                Add Cart
              </button>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCart;
