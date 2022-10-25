
import React from 'react';
import { useState } from "react";
import { Modal } from "react-bootstrap";

import ProductNavbar1 from './ProductNavbar1';


const ModalFunko = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  return (

    <>
      <button className="product__btn" variant="primary" onClick={handleShow}>
        Comprar
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>    </Modal.Title>
        </Modal.Header>
        <Modal.Body>

  


        </Modal.Body>
        <Modal.Footer>

          <button className="product__btn" variant="secondary" onClick={handleClose}>
            Cancelar
          </button>

          <button className="product__btn" onClick={handleClose}>

            Agregar al Carrito
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
// <button className="product__btn" variant="primary" onClick={handleClose}>
//Agregar al Carrito
//</button>


export default ModalFunko