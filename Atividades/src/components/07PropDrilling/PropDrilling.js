const CompA = () => {

    let FuncaodeC = null

    function ReceberRefC(ref){
        FuncaodeC = ref
    }

    return (
        <div>
            <CompB acaodeD = {FuncaodeC}/>
            <CompC enviarRefparaA = {ReceberRefC}/>
        </div>
    )
}

const CompB = ({acaodeD}) => {
    return (
        <div>
            <button onClick={()=>acaodeD}>Disparar acao em D</button>
        </div>
    )
}

const CompC = (enviarRefparaA) => {

    let FuncaodeD = null

    function ReceberRefD(ref){
        FuncaodeD = ref
        enviarRefparaA(FuncaodeD)
    }

    return (
        <div>
            <CompD enviarRefparaC = {ReceberRefD}/>
        </div>
    )
}

const CompD = ({enviarRefparaC}) => {

    function acaoemD(){
        alert("Estou em D")
    }

    enviarRefparaC(acaoemD)


    return (
        <div>
            
        </div>
    )
}

export {CompA, CompB, CompC, CompD}