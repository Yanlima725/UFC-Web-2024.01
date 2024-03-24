import { useContext } from "react"
import { ColorTheme } from "./MyColorContext"

const FunctionContextC = () => {
    
    const {bkgC} = useContext(ColorTheme)
    
    return (
        <div>
            <h1 style = {{backgroundColor: bkgC}}>
                Contexto C
            </h1>
        </div>
    )
}
export default FunctionContextC