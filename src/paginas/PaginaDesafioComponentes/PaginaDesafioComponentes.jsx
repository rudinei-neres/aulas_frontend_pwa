import React from 'react';
import MostrarSoma from './MostrarSoma/MostrarSoma';
import MostrarSubtracao from './MostrarSubtracao/MostrarSubtracao';
import MostrarDivisao from './MostrarDivisao/MostrarDivisao';
import MostrarMultiplicacao from './MostrarMultiplicacao/MostrarMultiplicacao';
import MostrarMeuNomeCompleto from './MostrarMeuNomeCompleto/MostrarMeuNomeCompleto';
import MostrarProduto from './MostrarProduto/MostrarProduto';
import MostrarNumerosPares from './MostrarNumerosPares/MostrarNumerosPares';
import Principal from '../../comum/componentes/Principal/Principal';


const PaginaDesafioComponentes = () => {

    const produto = {
        nome: 'TV Samsung 55"',
        preco: 2999.90,
        estoque: 345,
      };

      const numeros = [1, 8, 13, 16, 21, 24, 29, 32, 37, 40, 45, 48];

  return (
    <Principal titulo="voltar" voltarPara="/" >

      <div>
    <h1>Desafio de Componentes</h1>
    <p>Esta é a página onde o desafio de componentes será resolvido.</p>
  
    <MostrarSoma num1={11} num2={12} />

    <MostrarSubtracao num1={10} num2={2} />

    <MostrarDivisao num1={50} num2={10} />

    <MostrarMultiplicacao num1={10} num2={10} />

    <MostrarMeuNomeCompleto nome="Rudinei" sobrenome="Cousseau Ferreira Neres" />

    <MostrarProduto produto={produto} />

    <MostrarNumerosPares numeros={numeros} />


  </div>
  </Principal>
    
  );
};

export default PaginaDesafioComponentes;