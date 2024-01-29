import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ refs }) => {
  const [show, setShow] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const offsetTop = ref.current.offsetTop;
      const offset = 70;
      window.scrollTo({
        top: offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };
  

  return (
    <header className={`header ${show ? '' : 'hidden'}`}>
      <Link to="/" onClick={() => scrollToSection(refs.homeRef)}>
        <img src="/assets/fotos/logo.jpg" alt="Logo del Bufete" className="header-logo" />
      </Link>
      <nav className="header-nav">
        <ul>
          <li onClick={() => scrollToSection(refs.servicesRef)}>Servicios</li>
          <li onClick={() => scrollToSection(refs.teamRef)}>Nuestro Equipo</li>
          <li onClick={() => scrollToSection(refs.casesRef)}>Casos</li>
          <li onClick={() => scrollToSection(refs.contactRef)}>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
