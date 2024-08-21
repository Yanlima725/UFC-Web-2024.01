import React, { useState } from 'react';

const Questao02 = () => {
  // Usando o useState para controlar se a imagem é frontal ou traseira
  const [isFrontal, setIsFrontal] = useState(true);

  // Função que alterna o estado da imagem entre frontal e traseira
  const toggleImage = () => {
    setIsFrontal(!isFrontal);
  };

  return (
    <div>
      {/* Renderizando a imagem com base no estado */}
      <img
        src={
          isFrontal
            ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
            : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
        }
        alt="Pokemon"
      />
      {/* Botão que alterna a imagem ao ser clicado */}
      <button onClick={toggleImage}>Alternar Imagem</button>
    </div>
  );
};

// Exportando Questao02 como padrão
export default Questao02;
