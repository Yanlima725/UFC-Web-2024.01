const Produto = ({nome, categoria, valor}) => {

    //let objJSON = { nome:"Yan", idade: 21, Curso: "SI", notas: {nota1:3, nota2:9}}

// Desestruturação
//     const {nome, categoria, valor} = props
//     return (
//         <div>
//             {/*<h1>{objJSON.notas.nota1}</h1>*/}
//             <h3>Nome: {nome}</h3>
//             <h3>Categoria: {categoria}</h3>
//             <h3>Preço: {valor}</h3>
//         </div>
//     )
// }

// Maneira normal
//     return (
//         <div>
//             {/*<h1>{objJSON.notas.nota1}</h1>*/}
//             <h3>Nome: {props.nome}</h3>
//             <h3>Categoria: {props.categoria}</h3>
//             <h3>Preço: {props.valor}</h3>
//         </div>
//     )
// }

    return (
        <div>
            {/*<h1>{objJSON.notas.nota1}</h1>*/}
            <h3>Nome: {nome}</h3>
            <h3>Categoria: {categoria}</h3>
            <h3>Preço: {valor}</h3>
        </div>
    )
}
export default Produto