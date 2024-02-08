import React, { forwardRef } from "react";
import "./Cases.css";

const Cases = forwardRef((props, ref) => {
  const caseStudies = [
    {
      id: 3,
      title: "Litigio internacional de propiedad intelectual",
      client: "Creadores de Contenido Global",
      description:
        "Ganamos un caso de alto perfil que protegió los derechos de autor de un destacado creador de contenido frente a infracciones internacionales. Nuestro equipo legal trabajó diligentemente para rastrear a los infractores, presentar demandas en jurisdicciones relevantes y negociar acuerdos que sentaron un importante precedente en la protección de los derechos de autor a nivel internacional.",
    },
    {
      id: 2,
      title: "Defensa de patente tecnológica",
      client: "Innovaciones Digitales LTDA",
      description:
        "Defendimos con éxito la patente de un innovador dispositivo inteligente, garantizando su exclusividad en el mercado global. Nuestro equipo legal trabajó arduamente para proteger los derechos de propiedad intelectual y asegurar la posición única de nuestro cliente en la industria.",
    },
    {
      id: 1,
      title: "Fusión empresarial exitosa",
      client: "Electrodomésticos Modernos S.A.",
      description:
        "Nuestro equipo asesoró con éxito en la fusión de dos importantes cadenas de electrodomésticos, lo que resultó en un aumento del 25% en su valor de mercado. Esta operación estratégica permitió a nuestros clientes fortalecer su posición en la industria y lograr un crecimiento significativo en su valor corporativo.",
    },
    {
      id: 4,
      title: "Acuerdo de indemnización",
      client: "Construcciones y Diseños",
      description:
        "Negociamos con éxito un acuerdo de indemnización para un grupo de empleados, asegurando compensaciones justas sin necesidad de recurrir a litigios costosos y prolongados. Nuestra labor permitió resolver el asunto de manera eficiente y beneficiosa para ambas partes.",
    },
  ];

  return (
    <>
      <div ref={ref} className="cases">
        <h2>ALGUNOS DE NUESTROS CASOS</h2>
        <div className="case case-featured">
          <h3>{caseStudies[0].title}</h3>
          <hr className="divider" />
          <h4>Cliente: {caseStudies[0].client}</h4>
          <p>{caseStudies[0].description}</p>
        </div>

        <div className="info-icon">
          <div className="info-content">
            <h3>Sobre Nosotros</h3>
            <p>
              Líderes en la industria con más de 10 años de experiencia,
              ofrecemos soluciones estratégicas y asesoramiento legal integral.
              Nuestro compromiso es impulsar el éxito de nuestros clientes a
              través de la excelencia y la innovación.
            </p>
          </div>
        </div>
        {caseStudies.slice(1).map((caseStudy) => (
          <div key={caseStudy.id} className="case case-smaller">
            <h3>{caseStudy.title}</h3>
            <hr className="divider" />
            <h4>Cliente: {caseStudy.client}</h4>
            <p>{caseStudy.description}</p>
          </div>
        ))}
      </div>
    </>
  );
});

export default Cases;
