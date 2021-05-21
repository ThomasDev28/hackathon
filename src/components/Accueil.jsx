import React from "react";
import "./Accueil.css";
import Destination from "./Destination";

export default function Accueil() {
  return (
    <div className="home_container">
       <div className="img_earth"><img
          className="rotate_earth"
          src="img/earth_entire_m-p-800_0.png"
          alt="terre vue de l'espace"/></div>
      <div className="home_text"><h1 className="home_title">HOME</h1>
      <p className="home_p">Star Home offers a planetary overview experience <br/>that will reconnect
        Humans and the stars
      </p></div>
      < Destination />
        
    </div>
  );
}
