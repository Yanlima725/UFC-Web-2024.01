import { useContext } from "react"
import ComponenteNeto from "./ComponenteNeto"
import { ContextoInteiro } from "./ContextoInteiro"

const ComponenteFilho = () => {

    const numero = useContext(ContextoInteiro)
    return (
        <div>
            <h3>Componente Filho</h3>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 1}.png`}
                alt = "Pokemon"
                width={200}
            />
            <ComponenteNeto />
        </div>
    )
}

export default ComponenteFilho