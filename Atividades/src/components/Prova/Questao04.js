import React, { useEffect, useState } from 'react';

const Questao04 = () => {
  // Estados para armazenar as capitais de maior e menor população
  const [maiorCapital, setMaiorCapital] = useState('');
  const [menorCapital, setMenorCapital] = useState('');

  // Promise simulando uma chamada de API
  const fetchData = () => {
    return new Promise((resolve) => {
      resolve([
        { capital: ['Dublin'], population: 4994724 },
        { capital: ['Nicosia'], population: 1207361 },
        { capital: ['Madrid'], population: 47351567 },
      ]);
    });
  };

  // useEffect para carregar os dados da Promise ao montar o componente
  useEffect(() => {
    const loadCapitals = async () => {
      try {
        const data = await fetchData();

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

    loadCapitals();
  }, []);

  return (
    <div>
      <p>Capital com maior população: {maiorCapital}</p>
      <p>Capital com menor população: {menorCapital}</p>
    </div>
  );
};

// Exportando Questao04 como padrão
export default Questao04;
