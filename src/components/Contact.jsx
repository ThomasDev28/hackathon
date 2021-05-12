import React from "react";
import { useState } from "react";
import "./Contact.css";
import Popup from './Popup'

const ContactForm = () => {
    
    const [popupVisible, setPopupVisible] = useState(false);
const PopupVisibleClick = () => {
    console.log("Hello");
    // e.preventDefault();
    setPopupVisible(!popupVisible);
  };

  return (
    <form className="contact-form">
      <h2>Contactez nous les Terriens !</h2>
      <div className="form-content">
        <input type="text" name="name" placeholder="nom *" />
        <input type="text"  name="company" placeholder="sexe " />
        <input type="text" name="phone" placeholder="téléphone *" />
          <input type="mail" placeholder="email *" />
        <div className="email-content">
        </div>
      </div>
      <button onClick={() => {
          PopupVisibleClick()
      }} className="button" type="button">Envoyer</button>
      <div className="form-message"></div>
      {popupVisible && <Popup PopupVisibleClick={PopupVisibleClick} />}
    </form>
  );
};

export default ContactForm;
