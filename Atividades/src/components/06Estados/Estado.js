import {useState} from "react"

const Estado = () => {

    //let contador = 0
    let [contador, setContador] = useState(0)

    const IncrementarContador = () => {
        //contador ++
        setContador(contador => contador + 1)
    }

    const DecrementarContador = () => {
        //contador ++
        setContador(contador => contador - 1)
    }

    return (        
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={() => IncrementarContador()}>Incrementar</button>
            <button onClick={() => DecrementarContador()}>Decrementar</button>
        </div>
    )
}

export default Estado