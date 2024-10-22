import React from 'react';


const MostrarMultiplicacao = ({ num1, num2 }) => {
  
  const multiplicacao = num1 * num2;

  return (
    <div>
      <p>A multiplicação de {num1} * {num2} é: {multiplicacao}</p>
    </div>
  );
};

export default MostrarMultiplicacao;
