import React from 'react';


const MostrarSoma = ({ num1, num2 }) => {
  
  const soma = num1 + num2;

  return (
    <div>
      <p>A soma de {num1} + {num2} é: {soma}</p>
    </div>
  );
};

export default MostrarSoma;
