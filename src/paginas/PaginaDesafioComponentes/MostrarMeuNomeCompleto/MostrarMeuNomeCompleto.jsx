import React from 'react';


const MostrarMeuNomeCompleto = ({ nome, sobrenome }) => {
  return (
    <div>
      <p>O meu nome completo é: {nome} {sobrenome}</p>
    </div>
  );
};

export default MostrarMeuNomeCompleto;
