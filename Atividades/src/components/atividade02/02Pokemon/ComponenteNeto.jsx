import { useContext } from "react"
import { ContextoInteiro } from "./ContextoInteiro"

const ComponenteNeto = () => {
    
    const numero = useContext(ContextoInteiro)
    return (
        <div>
            <h3>Componente Neto</h3>
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 2}.png`}
                alt = "Pokemon"
                width={200}
            />
        </div>
    )
}

export default ComponenteNeto