import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"
import FunctionContextD from "./FunctionContextD"
import { ColorTheme } from "./MyColorContext"

const FunctionContextA = () => {

    const Cores = {bkgA: "green", bkgB: "red", bkgC: "yellow", bkgD: "blue"}

    return (
        <div>
            <ColorTheme.Provider value = { Cores }>
                <h1 style = {{backgroundColor: Cores.bkgA}}>
                    Contexto A
                </h1>
                <FunctionContextB />
                <FunctionContextC />
                <FunctionContextD />
            </ColorTheme.Provider>
        </div>
    )
}
export default FunctionContextA