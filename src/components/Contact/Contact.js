import React, { forwardRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

class ContactInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      location: "",
      termsAccepted: false,
      formFeedback: "",
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.termsAccepted) {
      this.setState({
        formFeedback:
          "Debes aceptar los términos y condiciones para enviar el formulario.",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_sr6vv6m",
        "template_62qyw6y",
        event.target,
        "8zQSMF-sS2MygAn0-"
      )
      .then(
        (result) => {
          this.setState({
            name: "",
            lastname: "",
            email: "",
            phone: "",
            location: "",
            termsAccepted: false,
            formFeedback: "Se ha enviado el correo correctamente ✓",
          });
        },
        (error) => {
          this.setState({
            formFeedback:
              "Error al enviar el correo. Por favor, inténtalo de nuevo.",
          });
        }
      );
  };

  render() {
    return (
      <div ref={this.props.forwardedRef} className="contact-page">
        <div className="locations-section">
          <h2>Encuéntranos</h2>
          <p>
            Visita nuestras oficinas en una de las siguientes direcciones o
            ponte en contacto con nosotros de la forma que te resulte más
            cómoda.
          </p>
          <div className="locations">
            <div className="location">
              <h3>Barcelona</h3>
              <p>
                <strong>Dirección:</strong> Pau Claris, 139 | 08009
              </p>
              <p>
                <strong>Teléfono:</strong> +34 93 487 11 26
              </p>
              <p>
                <strong>Email:</strong> barcelona@dllbogados.com
              </p>
            </div>
            <div className="location">
              <h3>Madrid</h3>
              <p>
                <strong>Dirección:</strong> Castellana, 140, 8° A | 28046
              </p>
              <p>
                <strong>Teléfono:</strong> +34 91 562 13 86
              </p>
              <p>
                <strong>Email:</strong> madrid@dllabogados.com
              </p>
            </div>
            <div className="location">
              <h3>Sabadell</h3>
              <p>
                <strong>Dirección:</strong> Carrer de Sol i Padris, 120, 5° A |
                08201
              </p>
              <p>
                <strong>Teléfono:</strong> +34 92 262 28 32
              </p>
              <p>
                <strong>Email:</strong> sabadell@dllabogados.com
              </p>
            </div>

            <div className="location">
              <h3>Paris</h3>
              <p>
                <strong>Dirección:</strong> Avenue des Champs-Élysées, 14, 2° C
                | 75008
              </p>
              <p>
                <strong>Teléfono:</strong> +34 92 552 28 46
              </p>
              <p>
                <strong>Email:</strong> paris@dllabogados.com
              </p>
            </div>
          </div>
        </div>
        <div className="contact-form-section">
          <h2>Escríbenos</h2>
          <p>
            Rellena el siguiente formulario con tus datos de contacto para que
            podamos contactar contigo.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
                placeholder="Nombre"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleChange}
                required
                placeholder="Apellido"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
                placeholder="Correo electrónico"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="Teléfono (opcional)"
              />
            </div>

            <div className="form-group">
              <select
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
                required
              >
                <option value="" disabled hidden>
                  Elige una ubicación
                </option>
                <option value="Barcelona">Barcelona</option>
                <option value="Madrid">Madrid</option>
                <option value="Sabadell">Sabadell</option>
                <option value="Paris">París</option>
              </select>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={this.state.termsAccepted}
                  onChange={this.handleChange}
                  required
                />
                Acepto los Términos y Condiciones
              </label>
            </div>

            <button type="submit">Enviar</button>
            {this.state.formFeedback && (
              <div className="form-feedback">{this.state.formFeedback}</div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

const Contact = forwardRef((props, ref) => (
  <ContactInner {...props} forwardedRef={ref} />
));

export default Contact;
