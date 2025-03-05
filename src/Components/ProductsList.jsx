import React, { useEffect } from "react";
import useStore from "../store/index";
import "../App.css";
import "../Styles/Products.List.css";
import { CARDCONTENT } from "./CardContent/Content";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



function ProductsList() {
  const { ProductAdd, DataFecth } = useStore();

  const [open, setOpen] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(null);
  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

  return (
    <div>
      <h2 id="products-home" className="products-section-title">Productos</h2>
      <div className="products">
        {CARDCONTENT.map((product) => (
          <div className="product__card flex__between" key={product.Id}>
            <img className="product__img" src={product.Img} alt="" />
            <p className="product__name">{product.ProductName}</p>
            <p>Precio : U$${product.Price}</p>
            <button className="product__btn" onClick={handleOpen}>
              Agregar Al Carrito
            </button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                {product.ProductName}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <img className="product__img" src={product.Img} alt="" />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {product.Description}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Tipo de producto: {product.ProductType}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Categoría: {product.Category}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                ¿Desea agregar a {product.ProductName} al carrito de compras?
                </Typography>
                
                <Button onClick={handleClose}>
                      Cerrar
                </Button>

                <Button onClick={() => ProductAdd(product)}>
                      Sí, agregar al Carrito
                </Button>

              </Box>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
