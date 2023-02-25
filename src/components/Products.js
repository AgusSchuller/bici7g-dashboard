import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("se monto el componente users");
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => { //console.log(data.data.products)
        setProducts(data.data.products);
       // console.log(data.data.products)
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    console.log("se actualizo el componente");
  }, [products]);

  useEffect(() => {
    return () => console.log("se desmonto el componente");
  }, []);
  //console.log(proucts);
  return (
    <div>
      <h2 className="title">Listado de Bicicletas</h2>

      <ul>
        {products.length === 0 && <p>Cargando</p>}
        {products.map((producto, i) => {
          return (
            <div key={i} className="card">
              <br />
              <h2>ID Producto: {producto.id}</h2>
              <h3>Nombre Producto: {producto.name}</h3>
              <h3>Descripción: {producto.description}</h3>
              <br />
            </div>
          );
        })}
      </ul>
      <a className="App-link-volver" href={`/`}>
        Volver al Home
      </a>
    </div>
    );
}

export default Products;
