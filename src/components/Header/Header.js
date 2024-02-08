import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ refs }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // Oculta el header al desplazarse hacia abajo
      } else {
        setShow(true); // Muestra el header al desplazarse hacia arriba
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const offsetTop = ref.current.offsetTop;
      window.scrollTo({
        top: offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`header ${show ? "" : "hidden"}`}>
      <Link to="/" onClick={() => scrollToSection(refs.homeRef)}>
        <img
          src="/assets/fotos/logo_negro.png"
          alt="Logo del Bufete"
          className="header-logo"
        />
      </Link>
      <nav className="header-nav">
        <ul>
          <li
            onClick={() => scrollToSection(refs.servicesRef)}
            style={{ cursor: "pointer" }}
          >
            SERVICIOS
          </li>
          <li
            onClick={() => scrollToSection(refs.teamRef)}
            style={{ cursor: "pointer" }}
          >
            NUESTRO EQUIPO
          </li>
          <li
            onClick={() => scrollToSection(refs.casesRef)}
            style={{ cursor: "pointer" }}
          >
            CASOS
          </li>
          <li
            onClick={() => scrollToSection(refs.contactRef)}
            style={{ cursor: "pointer" }}
          >
            CONTACTO
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
