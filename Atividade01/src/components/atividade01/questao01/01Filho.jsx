import React from "react"

const Filho = (props) => {

    const {altura, peso} = props
    const IMC = () => peso / (altura*altura)

    const mensagemIMC = (imc) => {
        if (imc < 18) {
            return <h3>Abaixo do peso</h3>;
          } else if (imc > 25) {
            return <h3>Acima do peso</h3>;
          } else {
            return <h3>Peso ideal</h3>;
          }
    }

    const imc = IMC()

    return (
        <div>
            <h3>IMC: {imc.toFixed(2)}</h3>
            {mensagemIMC(imc)}
        </div>
    )
}

export default Filho