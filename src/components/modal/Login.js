import { useState , useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext'

function Login({ show ,handleLogin , handleClose, switchRegister}) {

  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)
    console.log(state);
    const [getData, setGetData] = useState({
        email : "",
        password : "",
    })


    const ChangeInput = (e) => {
        setGetData({
            ...getData,
            [e.target.name] : e.target.value     
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        const email = document.getElementById('emailInput').value
        const password = document.getElementById('passwordInput').value

        dispatch({
            type:'LOGIN_SUCCESS',
            payload: {
                email,
                password,
            }
        })

        if(state.user.email !== "laksa@mail.com" || "husni@mail.com" || "admin@mail.com") {
            Alert('Masukkan alamat email dengan benar')
        }
       
    }

  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Body className="">
        <div className="justify-content-center">
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
            <div className="mb-3 f-1 fs-2 fw-bold text-red">Login</div>
           
            
            <Form onSubmit={HandleSubmit}>
              <div>
                <input
                  autoFocus
                  type="email"
                  placeholder="Email"
                  id="emailInput"
                onChange={ChangeInput}
          
                  name="email"
                  className="form-control py-2 mt-4 f-2 border border-danger"
                />
              </div>
              <div>
                <input
                  autoFocus
                  type="password"
                  placeholder="Password"
                   onChange={ChangeInput}
                   id="passwordInput"
                 
                  name="password"
                  className="form-control py-2 mt-4 f-2 border border-danger"
                />
              </div>
        
            <div className="d-grid gap-2 mt-5 pb-3">
              <Button
              
                className="btn-danger f-2 fw-bold"
                type="submit"
              >
                Login
              </Button>
            </div>
            </Form>

            <div>
              <p className="f-2">
                Don't have an account ?<button className="bg-white border-0 fw-bold" onClick={switchRegister}>Register</button>
              </p>
              
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
