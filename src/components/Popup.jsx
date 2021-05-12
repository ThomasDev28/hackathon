import React, { useState } from "react";
import './Popup.css'

export default function Popup({PopupVisibleClick}) {


  return (
    <div className="container-popup">
        <div className="mon-popup">
        <i onClick={PopupVisibleClick} id="croix" className="fas fa-times"></i>
        <div className="popup-texte"><p>Nous avons bien reçu votre requete. Mon équipe composé que de moi-meme
          allons nous en occupé et espere vous voir tres bientot pour nous tenir compagnie</p></div>
        {/* <img id="popup-img" src="img/robot" alt="robot"></img> */}
        <div className="container-img"><img src="img/robot.png" alt="robot" /></div>
        </div>
      </div>
  );
}
