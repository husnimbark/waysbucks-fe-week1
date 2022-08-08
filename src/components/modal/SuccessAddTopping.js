import { Modal } from "react-bootstrap";

function SuccessAddTopping({ show }) {
  return (
    <Modal show={show} centered>
      <Modal.Body className="text-dark">
        <p>The product is successfully added to the Topping</p>
      </Modal.Body>
    </Modal>
  );
}

export default SuccessAddTopping;
