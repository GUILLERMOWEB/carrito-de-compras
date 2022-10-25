import React, { useEffect } from "react";
import useStore from "../store/index";
import "../App.css";
import "../Styles/Products.List.css";
import ProductNabvar from "./ProductNabvar";
import { CARDCONTENT } from "./CardContent/Content";
import ModalFunko from "./modal/ModalFunko";


function ProductsList() {
  const { ProductAdd, DataFecth } = useStore();

  
  return (
    <div>

      <ProductNabvar />
      <div className="Fondo products">
        <p className="TextoFondo">Bienvenidos a</p>
        <p className="TextoFunko">FUNKOS</p>
        <p className="TextoArgentina">ARGENTINA</p>

        {CARDCONTENT.map((product) => (
          <div className="product__card flex__between" key={product.Id}>
            <img className="product__img" src={product.Img} alt="" />
            <p className="product__name">{product.ProductName}</p>
            <p>Precio : U$${product.Price}</p>


            <button className="product__btn" onClick={() => ProductAdd(product)} >
              <ModalFunko />

            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
// <button className="product__btn" onClick={() => ProductAdd(product)}>
export default ProductsList;
