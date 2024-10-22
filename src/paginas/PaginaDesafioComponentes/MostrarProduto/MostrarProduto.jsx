import React from 'react';


const MostrarProduto = ({ produto }) => {
  return (
    <div>
      <h3>Produto:</h3>
      <p><strong>Nome:</strong> {produto.nome}</p>
      <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
      <p><strong>Qtd Estoque:</strong> {produto.estoque}</p>
    </div>
  );
};

export default MostrarProduto;

