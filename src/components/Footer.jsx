import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>

        <div className="mes-icons">
        <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        <a href="https://github.com/"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="Developpeur">Sylvain | Thomas | Alexander</div>
        <div className="footer-bas">
        <div className="footer-nom">
            <h2>STA</h2> 
            <i class="far fa-registered"></i>
        </div>
        <div className="footer-droit-auteur">
            <p>StarHome est une société française de tourisme spatial fondée en 2021 par les STA®.</p>
        </div>

        </div>
        </footer>
    )
}
