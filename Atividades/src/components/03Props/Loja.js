import Produto from "./Produto"

const Loja = () => {
    return (
        <div>
            <h1>Mercadinho Queiroz</h1>
            <hr />
            <Produto nome = "Máquina de lavar" categoria = "Eletrodomestico" valor = {2300}/>
            <hr />
            <Produto nome = "Os Incriveis" categoria = "Filme" valor = {5}/>
            <hr />
            <Produto nome = "Kaiak Oceano" categoria = "Perfume" valor = {50}/>

        </div>
    )
}

export default Loja