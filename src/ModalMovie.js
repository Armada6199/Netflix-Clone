import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function ModalMovie({targetMovie,handleClose,handleShow,show}) {
const [inputValue,setInputValue]=useState("")
function handleAddToDatabase(){
  let sentData={
    title:targetMovie.title,
    comment:inputValue,
    relase_date:targetMovie.release_date,
    rating:Math.floor(targetMovie.vote_average)
  }
  handleClose();
    axios.post(`${process.env.REACT_APP_DATABASE}movies`,sentData)
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
          <img className='w-[100%] h-[400px]' src={`http://image.tmdb.org/t/p/w500/${targetMovie.poster_path}`} alt="movie IMG" />
        </Modal.Header>
        <Modal.Body>
        <Modal.Title>{targetMovie.title}</Modal.Title>
          {targetMovie.overview}
        </Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" onChange={(e)=>setInputValue(e.target.value)}
>
         Comment
        </InputGroup.Text>
        <Form.Control
          aria-label="Comment"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAddToDatabase()}>
            Add to database
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
  
}

export default ModalMovie