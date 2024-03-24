import { useState } from "react"
import ComponenteFilho from "./ComponenteFilho"
import { ContextoInteiro } from "./ContextoInteiro"

const ComponenteAvo = () => {

    const [numero, setNumero] = useState(1)

    const NextPokemon = () => {
        setNumero(numero => numero + 1)
    }

    return (
        <div>
            <h3>Componente Avo</h3>
            <ContextoInteiro.Provider value = {numero}>
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    alt="Pokemon"
                    width={200}
                />
                <button onClick={() => NextPokemon()}>Próx</button>
                <ComponenteFilho />
            </ContextoInteiro.Provider>
        </div>
    )
}

export default ComponenteAvo