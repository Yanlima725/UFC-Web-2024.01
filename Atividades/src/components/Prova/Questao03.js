import React, { useEffect, useState } from 'react';

const Questao03 = () => {
  // Estados para armazenar as capitais de maior e menor população
  const [maiorCapital, setMaiorCapital] = useState('');
  const [menorCapital, setMenorCapital] = useState('');

  // Função assíncrona para buscar dados de países da API
  const fetchData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=capital,population');
      const data = await response.json();

      // Encontrando a capital com maior e menor população
      const maior = data.reduce((prev, current) => (prev.population > current.population ? prev : current));
      const menor = data.reduce((prev, current) => (prev.population < current.population ? prev : current));

      // Atualizando os estados com as capitais encontradas
      setMaiorCapital(maior.capital[0]);
      setMenorCapital(menor.capital[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect para carregar os dados ao montar o componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Capital com maior população: {maiorCapital}</p>
      <p>Capital com menor população: {menorCapital}</p>
    </div>
  );
};

// Exportando Questao03 como padrão
export default Questao03;
