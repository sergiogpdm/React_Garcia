import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Oficinas</h3>
          <ul>
            <li>Barcelona</li>
            <li>Madrid</li>
            <li>Sabadell</li>
            <li>París</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Somos DLL</h3>
          <ul>
            <li>Únete a nuestro equipo</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Internacional</h3>
          <ul>
            <li>Cobertura internacional</li>
            <li>Asian Desk</li>
            <li>French Desk</li>
            <li>Latam Desk</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Actualidad</h3>
          <ul>
            <li>Artículos y noticias</li>
            <li>Eventos</li>
            <li>Descargables</li>
            <li>Vídeos y podcasts</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" style={{ cursor: "pointer" }}>
        <p>
          Aviso Legal / Política de Privacidad / Política de Cookies / Canal
          ético
        </p>
      </div>
      <div className="footer-media" style={{ cursor: "pointer" }}>
        <img
          src="/assets/fotos/instagram.png"
          alt="Logo del Bufete"
          className="footer-bottom-icons"
        />
        <img
          src="/assets/fotos/facebook.png"
          alt="Logo del Bufete"
          className="footer-bottom-icons"
        />
        <img
          src="/assets/fotos/x.png"
          alt="Logo del Bufete"
          className="footer-bottom-icons"
        />
      </div>

      <div className="footer-logo">
        <img
          src="/assets/fotos/logo1gpdm.png"
          alt="logo de gpdm"
          className="footer-bottom-icon"
        ></img>
      </div>
    </footer>
  );
};

export default Footer;
