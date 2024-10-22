import React from 'react';


const MostrarSubtracao = ({ num1, num2 }) => {
  
  const subtracao = num1 - num2;

  return (
    <div>
      <p>A subtração de {num1} - {num2} é: {subtracao}</p>
    </div>
  );
};

export default MostrarSubtracao;
