const PlacaMae = (props) => {
    const {nome, valor} = props
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Valor: {valor}</h3>
        </div>
    )
}

const Memoria = (props) => {
    return (
        <div>
            <h3>Nome: {props.nome}</h3>
            <h3>Valor: {props.valor}</h3>
        </div>
    )
}

const PlacaDeVideo = (props) =>{
    return (
        <div>
            <h3>Nome: {props.nome}</h3>
            <h3>Valor: {props.valor}</h3>
        </div>
    )
}

export {PlacaMae, Memoria, PlacaDeVideo}