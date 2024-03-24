import { useContext } from "react"
import { ColorTheme } from "./MyColorContext"

const FunctionContextB = () => {

    const {bkgB} = useContext(ColorTheme)
    
    return (
        <ColorTheme.Consumer>
        <div>
            <h1 style = {{backgroundColor: bkgB}}>
                Contexto B
            </h1>
        </div>
        </ColorTheme.Consumer>
    )
}
export default FunctionContextB