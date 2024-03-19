//import Planeta from "./Planeta"
import React from "react"

const SistemaSolar = (/*props*/ {children, galaxia}) => {
    return (
        <div>
            <h2>Sistema Solar</h2>
            <hr />
            {/* <Planeta
                nome = "Mercurio"
                tipo = "Rochoso"
                ordem = "1"
            />
            <hr />
            <Planeta
                nome = "Terra"
                tipo = "Rochoso"
                ordem = "3"
            />
            <hr />
            <Planeta
                nome = "Marte"
                tipo = "Rochoso"
                ordem = "4"
            /> */}
            {React.Children.map(
                children,
                ( elemento ) => {
                    return React.cloneElement(elemento, {galaxia})
                }
            )}
        </div>
    )
}
export default SistemaSolar