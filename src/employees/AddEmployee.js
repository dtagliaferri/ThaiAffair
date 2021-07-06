import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import initialEmployee from "./initialEmployee";
import Form from "react-bootstrap/Form";

const AddEmployee = (props) => {
  const sizeButton = props.update ? "sm" : "lg";
  const labelButton = props.update ? "Edit" : "Add new employee";
  const modalTitle = props.update ? "Edit Employee" : "Add new employee";
  const blankEmployee = initialEmployee();
  const [show, setShow] = useState(false);
  const [values, setValues] = useState(blankEmployee);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = (e) => {
    e.preventDefault();
    props.updateEmployee(values);
    handleClose();
    setValues({ ...blankEmployee });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <Button variant="primary" size={sizeButton} onClick={handleShow}>
        {labelButton}
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="myForm">
            <Form.Group className="mb-3" controlId="form.ControlName">
              <Form.Label>Employee</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleInputChange}
                value={values.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.ControlCell">
              <Form.Label>Cellphone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="cellphone"
                name="cell"
                onChange={handleInputChange}
                value={values.cell}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAdd} form="myForm">
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEmployee;
