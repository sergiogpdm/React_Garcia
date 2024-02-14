import React, { useState, useEffect, forwardRef } from "react";
import "./Home.css";

const HomeInner = forwardRef((props, ref) => {
  const [mainText, setMainText] = useState("NUESTRO OBJETIVO: BRINDAR EL MEJOR SERVICIO A NUESTROS CLIENTES");
  const [textOpacity, setTextOpacity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(0);
  const options = [
    {
      text: "NUESTRO OBJETIVO: BRINDAR EL MEJOR SERVICIO A NUESTROS CLIENTES",
      backgroundColor: "linear-gradient(to bottom, #000000, #c9dee3)",
    },
    {
      text: "SOMOS EL EQUIPO QUE TE ACOMPAÑA DE PRINCIPIO A FIN",
      backgroundColor: "linear-gradient(to bottom, #000000, #c9dee3)",
    },
    {
      text: "INFÓRMATE DE LAS NOVEDADES LEGALES EN NUESTROS EVENTOS",
      backgroundColor: "linear-gradient(to bottom, #000000, #c9dee3)",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeContent();
    }, 5000); // Tiempo de cambio

    return () => clearInterval(intervalId);
  }, [selectedOption]);

  const changeContent = () => {
    setTextOpacity(0);
    setTimeout(() => {
      const newIndex = (selectedOption + 1) % options.length;
      setSelectedOption(newIndex);
      setMainText(options[newIndex].text);
      setTextOpacity(1);
    }, 500);
  };

  const renderMainText = () => {
    // Define estilos para las palabras destacadas en modo claro
    const lightModeKeywordStyles = [
      { color: "#adb5b7" },
      { color: "#adb5b7" },
      { color: "#adb5b7" },
    ];
  
    // Define estilos para las palabras destacadas en modo oscuro
    const darkModeKeywordStyles = [
      {
        color: "#000000",
        textShadow: `
          1px 1px 0 #c9dee3, -1px -1px 0 #c9dee3, 
          -1px 1px 0 #c9dee3, 1px -1px 0 #c9dee3, 
          0px 1px 0 #c9dee3, 0px -1px 0 #c9dee3, 
          -1px 0px 0 #c9dee3, 1px 0px 0 #c9dee3`
      },
      {
        color: "#000000",
        textShadow: `
          1px 1px 0 #c9dee3, -1px -1px 0 #c9dee3, 
          -1px 1px 0 #c9dee3, 1px -1px 0 #c9dee3, 
          0px 1px 0 #c9dee3, 0px -1px 0 #c9dee3, 
          -1px 0px 0 #c9dee3, 1px 0px 0 #c9dee3`
      },
      {
        color: "#000000",
        textShadow: `
          1px 1px 0 #c9dee3, -1px -1px 0 #c9dee3, 
          -1px 1px 0 #c9dee3, 1px -1px 0 #c9dee3, 
          0px 1px 0 #c9dee3, 0px -1px 0 #c9dee3, 
          -1px 0px 0 #c9dee3, 1px 0px 0 #c9dee3`
      }
    ];
  
    // Selecciona el conjunto de estilos basado en si el modo oscuro está activo
    const keywordStyles = darkMode ? darkModeKeywordStyles : lightModeKeywordStyles;
  
    const keywords = ["objetivo:", "equipo", "legales"]; // Palabras clave a destacar
  
    // Divide y formatea el texto principal basándose en la palabra clave
    const textParts = options[selectedOption].text
      .split(new RegExp(`(${keywords[selectedOption]})`, "i"))
      .map((part, index) =>
        part.toLowerCase() === keywords[selectedOption].toLowerCase() ? (
          <span key={index} style={keywordStyles[selectedOption]}>
            {part}
          </span>
        ) : (
          part
        )
      );
  
    return <h1>{textParts}</h1>;
  };

  // Considerando el modo oscuro
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => setDarkMode(e.matches);
    matcher.addEventListener('change', onChange);

    return () => matcher.removeEventListener('change', onChange);
  }, []);

  const backgroundStyle = darkMode
    ? "linear-gradient(to bottom, #000000, #193043)" // Gradiente actualizado para modo oscuro
    : options[selectedOption].backgroundColor; // Modo claro

  return (
    <div
      className="home"
      style={{
        background: backgroundStyle,
        transition: "background 0.5s ease-in-out",
      }}
      ref={ref}
    >
      <div
        className="home-content-left"
        style={{
          opacity: textOpacity,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {renderMainText()}
      </div>
    </div>
  );
});

const Home = forwardRef((props, ref) => <HomeInner {...props} ref={ref} />);

export default Home;
