import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

function UserById() {
  const params = useParams();
  // console.log(params);
  const setUser = useState([]);

  useEffect(() => {
    console.log("se monto el componente user");
    fetch(`http://localhost:3001/api/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        const userId = data;
        console.log(userId.data.Apellido);
      });
  }, []);

  return (
    <div>
      <h2 className="title">Detalle de Usuario</h2>

      <div>
        <h3>Nombre de Usuario: {}</h3>
        <h3>Apellido de Usuario: {}</h3>
        <h4>Email: {}</h4>
      </div>
      <a className="App-link-volver" href={`/`}>
        Volver al Home
      </a>
    </div>
  );
}

export default UserById;
