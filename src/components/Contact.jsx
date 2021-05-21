import React from "react";
import { useState } from "react";
import "./Contact.css";
import Popup from "./Popup";

const ContactForm = () => {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sexe, setSexe] = useState("");
  // const isMail = (x) => {
  //   let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
  //   if (x.target.value === regex) {
  //     x = true;
  //   } else {
  //     x = false;
  //   }
  // };

  // const isName = (e) => {
  //   if (e.target.value.lentgh > 3) {
  //     e = true;
  //   } else {
  //     e = false;
  //   }
  // };

  const [popupVisible, setPopupVisible] = useState(false);
  const PopupVisibleClick = () => {
    let verificationEmail = new RegExp ( "^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z]{2,4}$");
    console.log(verificationEmail.test(email))
    if (prenom.length >= 4 && verificationEmail.test(email)) {
      setPopupVisible(true);
      setEmail("");
      setPrenom("");
      setTelephone("");
      setSexe("");
    } else{
      if(popupVisible){
        setPopupVisible(false)
      }else{

        alert('Veuillez remplir les champs requis correctement "*"');
      }
      }
  };

  return (
    <form className="contact-form">
      <h2>Contactez nous les Terriens !</h2>
      <div className="form-content">
        <input
          type="text"
          name="name"
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="nom * (4 caractères minimum)"
          value={prenom}
        />
        <input
          type="text"
          name="sexe"
          placeholder="sexe "
          onChange={(e) => setSexe(e.target.value)}
          value={sexe}
        />
        <input
          type="text"
          name="phone"
          placeholder="téléphone"
          onChange={(e) => setTelephone(e.target.value)}
          value={telephone}
        />
        <input
          className="mon-email"
          type="mail"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email *"
          value={email}
        />
        <div className="email-content"></div>
      </div>
      <button
        onClick={() => {
          PopupVisibleClick();
        }}
        className="button"
        type="button"
      >
        Envoyer
      </button>
      <div className="form-message"></div>
      {popupVisible && <Popup PopupVisibleClick={PopupVisibleClick} />}
    </form>
  );
};

export default ContactForm;
