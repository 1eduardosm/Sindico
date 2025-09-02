import React from 'react';
import Edit from './Edit'

function Start ({ sectionRef }) {
  return (
    <div className="Start" ref={sectionRef}>
      <div className="Fundo">
        <img src="/fundo.png" alt="Fundo" />
      </div>
      <div className="Inicio">
        <div className="InicioTitulo">
          <Edit />
        </div>
        <div className="InicioDescritivo"></div>
        <div className="InicioCards"></div>
      </div>
    </div>
  );
}
export default Start;