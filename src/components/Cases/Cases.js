import React, { forwardRef } from 'react';
import './Cases.css';

const Cases = forwardRef((props, ref) => {
  const caseStudies = [
    {
      id: 1,
      title: "Fusión empresarial exitosa",
      client: "Electrodomésticos Modernos S.A.",
      description: "Nuestro equipo asesoró en la fusión de dos grandes cadenas de electrodomésticos, resultando en un crecimiento del 25% en su valor de mercado."
    },
    {
      id: 2,
      title: "Defensa de patente tecnológica",
      client: "Innovaciones Digitales LTDA",
      description: "Defendimos con éxito la patente de un nuevo dispositivo inteligente, asegurando la exclusividad del producto en el mercado global."
    },
    {
      id: 3,
      title: "Litigio internacional de propiedad intelectual",
      client: "Creadores de Contenido Global",
      description: "Ganamos un caso de alto perfil protegiendo los derechos de autor de un conocido creador de contenido frente a infracciones internacionales."
    },
    {
      id: 4,
      title: "Acuerdo de indemnización laboral",
      client: "Construcciones y Diseños",
      description: "Negociamos un acuerdo de indemnización para un grupo de empleados que aseguró compensaciones justas sin recurrir a litigio."
    }
  ];

  return (
    <div ref={ref} className="cases">
      <h2>Casos Destacados</h2>
      {caseStudies.map((caseStudy) => (
        <div key={caseStudy.id} className="case">
          <h3>{caseStudy.title}</h3>
          <hr className="divider" />
          <h4>Cliente: {caseStudy.client}</h4>
          <p>{caseStudy.description}</p>
        </div>
      ))}
    </div>
  );
});

export default Cases;
