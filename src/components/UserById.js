import React from "react";
import "../../src/App.css";
import { useState, useEffect } from "react";

function UserById() {

    
    
  return (
    <div>
      <h2 className="title">Detalle de Usuario</h2>
      
      <a className="App-link-volver" href={`/`}>
        Volver al Home
      </a>
    </div>
  );

}

export default UserById;