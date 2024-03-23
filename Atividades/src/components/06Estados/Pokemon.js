import { useState } from "react"

const Pokemon = () => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"

    const [contador, setContador] = useState(1)

    const Incrementar = () => {
        setContador(contador => contador + 1)
    }

    const Decrementar = () => {
        if(contador - 1 < 0) return
        setContador((contador => {
            return contador - 1
        }))
    }

    return (
        <div>
            <h2>ID: {contador}</h2>
            <img 
                src = {url+contador+".png"}
                alt = "Pokemon"
                width = {200}
            />
            <button onClick={() => Incrementar()}>Prox Pokemon</button>
            <button onClick={() => Decrementar()}>Post Pokemon</button>
        </div>
    )
}

export default Pokemon