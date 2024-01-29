import React, { Component, forwardRef } from "react";
import "./Home.css";

class HomeInner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainText: "Nuestro objetivo: brindar el mejor servicio a nuestros clientes",
      backgroundColor: "#c9dee3",
      textOpacity: 0,
      selectedOption: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ textOpacity: 1 });
    }, 100);
  }

  changeContent = (newText, newBackgroundColor, optionIndex) => {
    this.setState({ textOpacity: 0 }, () => {
      setTimeout(() => {
        this.setState({
          mainText: newText,
          backgroundColor: newBackgroundColor,
          textOpacity: 1,
          selectedOption: optionIndex,
        });
      }, 500);
    });
  };

  renderOption = (text, backgroundColor, index) => {
    const isSelected = this.state.selectedOption === index;
    const optionClass = `clickable-option ${isSelected ? 'selected' : 'not-selected'}`;
    return (
      <p
        className={optionClass}
        onClick={() => this.changeContent(text, backgroundColor, index)}
      >
        {text}
      </p>
    );
  };

  render() {
    const { mainText, backgroundColor, textOpacity } = this.state;
    return (
      <div className="home" style={{ backgroundColor: backgroundColor, transition: 'background-color 0.5s ease-in-out' }}>
        <div className="home-content-left" style={{ opacity: textOpacity, transition: 'opacity 0.5s ease-in-out' }}>
          <h1 style={{ transition: 'opacity 0.5s ease-in-out' }}>{mainText}</h1>
          <button className="home-button">NUESTROS SERVICIOS</button>
        </div>
        <div className="home-content-right">
          {this.renderOption("Nuestro objetivo: brindar el mejor servicio a nuestros clientes", "#c9dee3", 0)}
          {this.renderOption("Somos el equipo que te acompaña de principio a fin", "#33D1FF", 1)}
          {this.renderOption("Infórmate de las novedades legales en nuestros eventos", "#8D33FF", 2)}
        </div>
      </div>
    );
  }
}

const Home = forwardRef((props, ref) => <HomeInner {...props} ref={ref} />);
export default Home;

