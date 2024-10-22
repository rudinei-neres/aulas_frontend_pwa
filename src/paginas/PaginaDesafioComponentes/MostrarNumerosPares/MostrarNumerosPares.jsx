import React from 'react';


const MostrarNumerosPares = ({ numeros }) => {
 
  const numerosPares = numeros.filter(numero => numero % 2 === 0);

  return (
    <div>
      <h3>Números Pares</h3>
      <ul>
        {numerosPares.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default MostrarNumerosPares;
