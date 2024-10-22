import React from 'react';


const MostrarDivisao = ({ num1, num2 }) => {
 
  const divisao = num2 !== 0 ? (num1 / num2) : 'Divisão por zero não permitida';

  return (
    <div>
      <p>A divisão de {num1} / {num2} é: {divisao}</p>
    </div>
  );
};

export default MostrarDivisao;
