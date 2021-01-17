import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modal.css";

const CustomModal = ({
  buttonText,
  contentText,
  headingText,
  yesText,
  noText,
  onSuccess,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitFunction = () => {
    handleClose();
    onSuccess && onSuccess();
  };
  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        {buttonText}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{headingText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{contentText}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => submitFunction(e)}>
            {yesText || "Save"}
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            {noText || "Close"}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CustomModal;
