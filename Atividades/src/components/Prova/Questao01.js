import React from "react";

const Questao01A = () => {
  // Objeto lista que contém vários objetos com propriedades 'a', 'b' e 'c'
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 },
  ];

  // Chamando o componente Questao01B e passando 'lista' como props
  return <Questao01B lista={lista} />;
};

// Questao01B é um componente funcional declarado usando uma function
function Questao01B(props) {
  // Usamos o método map para iterar sobre cada objeto em 'lista'
  return (
    <div>
      {props.lista.map((item, index) => (
        // Para cada objeto, calculamos o maior valor entre 'a', 'b' e 'c'
        <p key={index}>
          O maior valor do objeto {index + 1} é{" "}
          {Math.max(item.a, item.b, item.c)}
        </p>
      ))}
    </div>
  );
}

// Exportando Questao01A como padrão
export default Questao01A;
