const FuncoesInternas = () => {

    let numero1 = 2
    let numero2 = 7
    let numerin = 3.1456342


    function somar(x, y){
        return x + y
    }

    const dividir = (x, y) => x / y

    const subtrair = (x, y) => {
        return x - y
    }

    function multiplicar(x, y){
        return x * y
    }


    return (
        <div>
            <h1> Calculadora</h1>
            <h3> O resultado da soma é {somar(numero1, numero2)}</h3>
            <h3> O resultado da subtração é {subtrair(numero1, numero2)}</h3>
            <h3> O resultado da divisão é {dividir(numero2, numero1).toFixed(2)}</h3>
            <h3> O resultado da multiplicação é {multiplicar(numero1, numero2)} </h3>
            <h3> {numerin.toFixed(3)}</h3>
        </div>
    )
}

export default FuncoesInternas