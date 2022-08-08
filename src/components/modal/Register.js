import { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Register({ show, handleRegister, handleClose, switchLogin }) {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);
  console.log(state);
  const [getData, setGetData] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const ChangeInput = (e) => {
    setGetData({
      ...getData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const fullname = document.getElementById("fullnameInput").value;

    dispatch({
      type: "REGISTER_SUCCESS",
      payload: {
        email,
        password,
        fullname,
      },
    });

    if (state.isRegister == true) {
      navigate(show);
      Alert("Register Success!");
    } else {
      Alert("Register Success!");
    }
  };

  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Body className="text-dark">
        <div className=" justify-content-center">
          <div className="card-auth p-4">
            <div
              className="d-flex justify-content-end fs-3 fa-2x"
              aria-hidden="true"
              onClick={handleClose}
            >
              <button className="bg-white border-0 fw-bold">
                <Icon.XLg />
              </button>
            </div>

            <div className="mb-3 f-1 fs-2 fw-bold text-red">Register</div>

            <Form onSubmit={HandleSubmit}>
              <div>
                <input
                  type="name"
                  placeholder="Full Name"
                  name="name"
           
                  onChange={ChangeInput}
                  className="form-control py-2 mt-4 f-2 border border-danger"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
              
                  onChange={ChangeInput}
                  className="form-control py-2 mt-4 f-2 border border-danger"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
  
                  onChange={ChangeInput}
                  className="form-control py-2 mt-4 f-2 border border-danger"
                />
              </div>

              <div className="d-grid gap-2 mt-5 pb-3">
                <Button className="btn btn-danger f-2 fw-bold" type="submit">
                  Register
                </Button>
              </div>
            </Form>
            <div>
              <p className="f-2">
                Already have an account?
                <button
                  className="bg-white border-0 fw-bold"
                  onClick={switchLogin}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Register;
