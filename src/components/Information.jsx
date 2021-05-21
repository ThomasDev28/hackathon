import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Information.css";

export default function Information({ pictures }) {
  const params = useParams();
  const picture = pictures[parseInt(params.index)];

  return (
    <div className="info-planete">
      <img className="info-img" src={picture.image} alt={picture.name} />
      <div className="info-txt">
        <h2>{picture.title}</h2>
        <h3>{picture.description}</h3>
        <h4>{picture.dateCreation}</h4>
      </div>
    </div>
  );
}
