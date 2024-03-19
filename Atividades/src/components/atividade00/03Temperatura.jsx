const Temperatura = () => {

    let f = 18
    let c = 100
    let k = 45
    
    const celsiusParaFahrenheit = (celsius) => 9*celsius/5 + 32
    const fahrenheitParaCelsius = (fahrenheit) => (fahrenheit-32)*5/9
    function kelvin(k) {
        let c = k - 273
        let f = (k - 273)*9/5 + 32
        //return {celsius: c, fahrenheit: f}
        return {c, f}
    }
    return (
        <div>
            <h3>{c} Celsius para fahrenheit: {celsiusParaFahrenheit(c)}</h3>
            <h3>{f} Fahrenheit para celsius {fahrenheitParaCelsius(f)}</h3>
            <h3>{k} Kelvin para celsius e fahrenheit {kelvin(k).c} e {kelvin(k).f}</h3>
        </div>
    )
}

export default Temperatura