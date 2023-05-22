import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function ModalMovie({targetMovie,handleClose,handleShow,show,handleUpdate}) {
const [inputValue,setInputValue]=useState("")
function handleAddToDatabase(){
  handleClose();
    axios.post(`${process.env.REACT_APP_DATABASE}`,inputValue)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  };

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
   
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          Update your Comments
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e)=>handleUpdate(e,targetMovie)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Comments</Form.Label>
        <Form.Control type="text" placeholder="new Comment" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
        </Modal.Body>
     
 
      </Modal>
    </div>
  );
  
}

export default ModalMovie