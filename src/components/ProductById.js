import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductById() {
  const params = useParams();
  //console.log(params);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/products/${params.id}`)
      .then((response) => response.json())
      .then((product) => {
        setProductData(product.data);
        //console.log(product.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(productData)

  return (
    <div>
      <h2 className="title">Detalle del Producto</h2>
      <nav className="card">
        <h2>Id de Producto: {productData.id}</h2>
        <h3>Nombre del Producto: {productData.Nombre}</h3>
        <h4>Descripción del Producto: {productData.Descripcion}</h4>
        <h4>Talla: {productData.Talla}</h4>
      </nav>
      <br />
      <br />
      <div class="links-container">
        <a href={`/products`}>Volver a Productos</a>
        <a href={`/`}>Volver al Home</a>
      </div>
    </div>
  );
}

export default ProductById;
