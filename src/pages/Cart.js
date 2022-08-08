import React from "react";
import { Container, Button } from "react-bootstrap";
import Trash from "../assets/Icons/trash.png";
import Bucks from "../assets/Bucks/bucks-1.png";
import NavbarUser from "../components/navbar/NavbarUser";

export default function Cart() {
  return (
    <>
      <NavbarUser />
      <Container>
        <div className="mt-5 f-1 mb-5 text-red">
          <h2>My Cart</h2>
          <p>Review Your Order</p>
        </div>
      </Container>
      <Container className="d-flex gap-5">
        <div className="col mb-5 py-4 px-2 border-2 border-top border-dark border-bottom d-grid gap-3">
          <div className="d-flex">
            <div className="w-25">
              <img src={Bucks} alt="book" className="w-100" />
            </div>

            <div className="f-2 w-100 no-border p-3 w-75">
              <div className="flex-row d-flex">
                <h5 className="card-title col f-1 text-red">
                  Ice Coffee Palm Sugar
                </h5>
                <p>
                  <img className="col" src={Trash} alt="trash"></img>
                </p>
              </div>
              <p className="card-text fw-bold price-color fs-7 text-red">
                Rp.27.000
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-5 d-grid gap-3 h-50">
          <div className="d-flex border-2 border-top border-dark border-bottom px-2">
            <div className="pt-4 w-100">
              <div className="row">
                <p className="col text-red">Sub Total</p>
                <p className="col text-end text-red">Sub Total</p>
              </div>

              <div className="row">
                <p className="col text-red">Qty.</p>
                <p className="col text-end text-red">Qty.</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="row">
              <p className="card-text col fw-bold price-color text-red">
                Total
              </p>
              <p className="card-text col text-end fw-bold price-color text-red">
                Total
              </p>
            </div>
            <div className="d-flex justify-content-end mt-3">
              <Button className="btn-danger w-50 text-red">Pay</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
