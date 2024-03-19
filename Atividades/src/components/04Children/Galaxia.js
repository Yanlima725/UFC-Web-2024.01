import SistemaSolar from "./SistemaSolar"
import Planeta from "./Planeta"

const Galaxia = ({nome}) => {
    return (
        <div>
            <h1>Galáxia: {nome}</h1>
            <SistemaSolar>
      <Planeta
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
            />
      </SistemaSolar>
        </div>
    )
}
export default Galaxia