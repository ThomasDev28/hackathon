import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const hautDePage = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="container-nav">
      <div className="lignes">
        <div className="l1"></div>
        <div className="l2"></div>
      </div>
      <nav>
      <img src="img/StarHome.svg" alt="logo" />
        <ul>
          <li> <Link onClick={hautDePage} className="slide-line" to="/">Accueil</Link></li>
          <li> <Link onClick={hautDePage} className="slide-line" to="/cartes/jupiter">Planetes</Link></li>
          <li> <Link onClick={hautDePage} className="slide-line" to="/contact">Contact</Link></li>
         
        </ul>
      </nav>
      <div className="navbar-phone">
        <Link onClick={hautDePage} to="/">
          <i className="fas fa-home"></i>
        </Link>
        <Link onClick={hautDePage} to="/cartes/jupiter">
        <i class="fas fa-globe-americas"></i>
        </Link>
        <Link onClick={hautDePage} to="/contact">
          <i className="fas fa-phone"></i>
        </Link>
      </div>
    </div>
  );
}
