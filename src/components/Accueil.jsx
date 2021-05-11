import React from "react";
import './Accueil.css';

export default function Accueil({ name, image }) {
  return (
    <div className="container-acceuil">
      <h1>{name}</h1>
      <img src={image} alt={name}/>
    </div>
  );
}
