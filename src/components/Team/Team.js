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
    { name: "Carmen Rodríguez", title: "Abogada Senior" },
    { name: "Miguel Ángel Torres", title: "Abogado de Derecho Laboral" },
    { name: "Laura Jiménez", title: "Abogada de Derecho de Familia" },
    { name: "Carlos Hernández", title: "Abogado de Propiedad Intelectual" }
  ],
  Francia: [
    { name: "Carmen Rodríguez", title: "Abogada Senior" },
    { name: "Miguel Ángel Torres", title: "Abogado de Derecho Laboral" },
    { name: "Laura Jiménez", title: "Abogada de Derecho de Familia" },
    { name: "Carlos Hernández", title: "Abogado de Propiedad Intelectual" }
  ],
  Latam: [
    { name: "Carmen Rodríguez", title: "Abogada Senior" },
    { name: "Miguel Ángel Torres", title: "Abogado de Derecho Laboral" },
    { name: "Laura Jiménez", title: "Abogada de Derecho de Familia" },
    { name: "Carlos Hernández", title: "Abogado de Propiedad Intelectual" }
  ]
};

const Team = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const toggleRegion = (region) => {
    setSelectedRegion(selectedRegion === region ? null : region);
  };

  return (
    <div className="team">
      <h2>Nuestro Equipo</h2>
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
