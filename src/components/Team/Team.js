import React, { useState } from 'react';
import './Team.css';

const regionsData = {
  España: [
    { name: "Carmen Rodríguez", title: "Abogada Senior" },
    { name: "Miguel Ángel Torres", title: "Abogado de Derecho Laboral" },
    { name: "Laura Jiménez", title: "Abogada de Derecho de Familia" },
    { name: "Carlos Hernández", title: "Abogado de Propiedad Intelectual" }
  ],
  Asia: [
    { name: "Li Wei", title: "Abogada Senior" },
    { name: "Haruto Nakamura", title: "Especialista en Derecho Internacional" },
    { name: "Ananya Singh", title: "Abogada de Derecho Coroporativo" },
    { name: "Min-jun Kim", title: "Abogado de Litigios" }
  ],
  Francia: [
    { name: "Émilie Dubois", title: "Abogada Senior" },
    { name: "Lucas Martin", title: "Abogado de Derecho Ambiental" },
    { name: "Chloé Bernard", title: "Abogada de Propiedad Intelectual" },
    { name: "Maxime Petit", title: "Abogado de Derecho Penal" }
  ],
  Latam: [
    { name: "Sofía Gómez", title: "Abogada Senior" },
    { name: "Juan Martinez", title: "Abogado de Derecho Civil" },
    { name: "Valentina Ortiz", title: "Abogada de Derecho Comercial" },
    { name: "Diego Rivera", title: "Abogado de Derechos Humanos" }
  ]
};

const Team = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const toggleRegion = (region) => {
    setSelectedRegion(selectedRegion === region ? null : region);
  };

  return (
    <div className="team">
      <h2>NUESTRO EQUIPO</h2>
      {Object.keys(regionsData).map((region) => (
        <div key={region}>
          <div className="region-title" onClick={() => toggleRegion(region)}>
            {region}
          </div>
          <div className={`employees ${selectedRegion === region ? 'show' : 'hide'}`}>
            {regionsData[region].map((employee, index) => (
              <div key={index} className="employee-card">
                <div className="employee-name">{employee.name}</div>
                <div className="employee-title">{employee.title}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
