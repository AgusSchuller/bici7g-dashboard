import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProductById() {
  const params = useParams();
  //console.log(params);
  const [productData, setProductData] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:3001/api/products/${params.id}`)
      .then((response) => response.json())
      .then((product) => {
        //console.log(product)
        setProductData(product.data);
        
        
        //console.log(product.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(productData.Modelo);
  
  

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`http://localhost:3001/img/bicis/${productData.Imagen}`}
        width="100%"
      />
      <Card.Body>
        <Card.Title>{productData.Nombre}</Card.Title>
        <Card.Text>{productData.Descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Id Producto: {productData.id}</ListGroup.Item>
        <ListGroup.Item>Modelo: {} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/products">Productos</Card.Link>
        <br />
        <Card.Link href="/">Home</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProductById;
