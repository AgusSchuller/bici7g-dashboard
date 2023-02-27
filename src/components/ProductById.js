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
      .then((product) => {//console.log(product)
        setProductData(product.data);
        //console.log(product.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(productData.Imagen)


  return (
    <div>
      <h2 className="title">Detalle del Producto</h2>
      <nav className="card">
        <h2>Id de Producto:</h2>
        <h2>{productData.id}</h2>
        <h3>Nombre del Producto:</h3>
        <h3>{productData.Nombre}</h3>
        <h3>Descripción del Producto:</h3>
        <h4>{productData.Descripcion}</h4>
        {/* <figure>
        <img src=`D:\Dropbox\004-Programacion\Digital House\Curso Full Stack\Proyectos\grupo_7_bicis7g\public\img\bicis\${productData.Imagen}` alt="foto-de-bici" />
        </figure> */}
         
      </nav>
      <br/>      
      <div className="links-container">
        <a href={`/products`}>Volver a Productos</a>
        <a href={`/`}>Volver al Home</a>
      </div>
    </div>
  );
}

export default ProductById;
