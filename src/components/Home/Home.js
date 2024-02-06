import React, { Component, forwardRef } from "react";
import "./Home.css";

class HomeInner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainText: "NUESTRO OBJETIVO: BRINDAR EL MEJOR SERVICIO A NUESTROS CLIENTES",
      backgroundColor: "#193043",
      textOpacity: 1,
      selectedOption: 0,
      options: [
        {
          text: "NUESTRO OBJETIVO: BRINDAR EL MEJOR SERVICIO A NUESTROS CLIENTES",
          backgroundColor: "#193043",
        },
        {
          text: "SOMOS EL EQUIPO QUE TE ACOMPAÑA DE PRINCIPIO A FIN",
          backgroundColor: "#193043",
        },
        {
          text: "INFÓRMATE DE LAS NOVEDADES LEGALES EN NUESTROS EVENTOS",
          backgroundColor: "#193043",
        },
      ],
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.changeContent();
    }, 5000); // tiempo de cambio
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  changeContent = () => {
    // Primero, disminuimos la opacidad a 0 para iniciar el efecto de desvanecimiento
    this.setState({ textOpacity: 0 }, () => {
      // Esperamos un poco antes de cambiar el contenido y restaurar la opacidad
      setTimeout(() => {
        this.setState((prevState) => {
          const newIndex = (prevState.selectedOption + 1) % prevState.options.length;
          return {
            selectedOption: newIndex,
            mainText: prevState.options[newIndex].text,
            backgroundColor: prevState.options[newIndex].backgroundColor,
            textOpacity: 1, // Restauramos la opacidad a 1 para completar el efecto
          };
        });
      }, 500); // Tiempo de espera para simular la transición
    });
  };

  // Método para renderizar el texto principal con la palabra clave coloreada
  renderMainText = () => {
    const { selectedOption, options } = this.state;
    const keywordStyles = [{ color: '#6d7d87' }, { color: '#6d7d87' }, { color: '#6d7d87' }]; // Estilos para cada palabra clave
    const keywords = ["objetivo:", "equipo", "legales"]; // Palabras clave

    const textParts = options[selectedOption].text.split(new RegExp(`(${keywords[selectedOption]})`, 'i')).map((part, index) =>
      part.toLowerCase() === keywords[selectedOption].toLowerCase() ? <span key={index} style={keywordStyles[selectedOption]}>{part}</span> : part
    );

    return <h1>{textParts}</h1>;
  };

  render() {
    const { backgroundColor, textOpacity } = this.state;

    return (
      <div className="home" style={{ backgroundColor: backgroundColor, transition: 'background-color 0.5s ease-in-out' }}>
        <div className="home-content-left" style={{ opacity: textOpacity, transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}>
          {this.renderMainText()}
        </div>
      </div>
    );
  }
}

const Home = forwardRef((props, ref) => <HomeInner {...props} ref={ref} />);
export default Home;
