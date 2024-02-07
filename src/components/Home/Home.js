import React, { Component, forwardRef } from "react";
import "./Home.css";

class HomeInner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainText: "NUESTRO OBJETIVO: BRINDAR EL MEJOR SERVICIO A NUESTROS CLIENTES",
      textOpacity: 1,
      selectedOption: 0,
      options: [
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

  renderMainText = () => {
    const { selectedOption, options } = this.state;
    const keywordStyles = [{ color: '#adb5b7' }, { color: '#adb5b7' }, { color: '#adb5b7' }]; // Estilos para cada palabra clave
    const keywords = ["objetivo:", "equipo", "legales"]; // Palabras clave

    const textParts = options[selectedOption].text.split(new RegExp(`(${keywords[selectedOption]})`, 'i')).map((part, index) =>
      part.toLowerCase() === keywords[selectedOption].toLowerCase() ? <span key={index} style={keywordStyles[selectedOption]}>{part}</span> : part
    );

    return <h1>{textParts}</h1>;
  };

  render() {
    const { textOpacity } = this.state;
    const backgroundStyle = this.state.options[this.state.selectedOption].backgroundColor;

    return (
      <div className="home" style={{ background: backgroundStyle, transition: 'background 0.5s ease-in-out' }}>
        <div className="home-content-left" style={{ opacity: textOpacity, transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}>
          {this.renderMainText()}
        </div>
      </div>
    );
  }
}

const Home = forwardRef((props, ref) => <HomeInner {...props} ref={ref} />);
export default Home;
