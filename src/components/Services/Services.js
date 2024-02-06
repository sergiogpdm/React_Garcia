import React, { forwardRef } from "react";
import "./Services.css";

const Services = forwardRef((props, ref) => {
  return (
    <>
      <div className="services-header">
        <h2>¿QUÉ SERVICIOS OFRECEMOS?</h2>
      </div>
      <div ref={ref} style={{ height: "70px", marginTop: "-70px" }}></div>
      <div ref={ref} className="services-container">
        <div className="service">
          <i className="icon-business-support" />
          <h3>Business Support</h3>
          <p>
            Asesoramiento integral a empresas: fiscal, contable, laboral y
            outsourcing
          </p>
        </div>

        <div className="service">
          <i className="icon-administrative-law" />
          <h3>Derecho Administrativo</h3>
          <p>Asesoramiento en procedimientos administrativos</p>
        </div>

        <div className="service">
          <i className="icon-insurance-law" />
          <h3>Derecho de Seguros</h3>
          <p>Asesoramiento integral a compañías aseguradoras y de reaseguros</p>
        </div>

        <div className="service">
          <i className="icon-labor-law" />
          <h3>Derecho Laboral</h3>
          <p>Defensa de los derechos de los trabajadores y de las empresas</p>
        </div>

        <div className="service">
          <i className="icon-criminal-law" />
          <h3>Derecho Penal</h3>
          <p>
            Representación legal en casos criminales y defensa ante acusaciones
            penales
          </p>
        </div>

        <div className="service">
          <i className="icon-criminal-law" />
          <h3>Derecho Penal</h3>
          <p>
            Representación legal en casos criminales y defensa ante acusaciones
            penales
          </p>
        </div>

        <div className="service">
          <i className="icon-family-law" />
          <h3>Derecho de Familia</h3>
          <p>
            Asesoramiento y representación legal en asuntos de derecho de
            familia, como divorcios y custodia de niños
          </p>
        </div>

        <div className="service">
          <i className="icon-real-estate-law" />
          <h3>Derecho Inmobiliario</h3>
          <p>
            Asistencia legal en transacciones inmobiliarias, contratos de
            arrendamiento y disputas de propiedades
          </p>
        </div>

        <div className="service">
          <i className="icon-intellectual-property-law" />
          <h3>Derecho de Propiedad Intelectual</h3>
          <p>
            Asesoramiento legal en cuestiones de propiedad intelectual, como
            patentes, marcas comerciales y derechos de autor
          </p>
        </div>
      </div>
    </>
  );
});

export default Services;
