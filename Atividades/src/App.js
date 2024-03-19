//import HelloWorld from "./components/01HelloWorld/HelloWorld";
//import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
//import Loja from "./components/03Props/Loja";
//import {MeusDados as MD, Meusdados as MDV1, meusdados as MDV2} from "./components/atividade00/01MeusDados";
//import Meusdadosprops from "./components/atividade00/02MeusDados";
//import Temperatura from "./components/atividade00/03Temperatura";
//import SistemaSolar from "./components/04Children/SistemaSolar";
//import Planeta from "./components/04Children/Planeta";
//import Galaxia from "./components/04Children/Galaxia";
//import ComPai from "./components/05ComPaiFilho/ComPai";
import Pai from "./components/atividade01/questao01/01Pai";
import * as PC from "./components/atividade01/02MeuPC.jsx";
import {
  Hero,
  Enemy,
  Arena,
  World,
} from "./components/atividade01/03Batalha.jsx";

function App() {
  return (
    <div>
      <h1>Web Aulas</h1>
      <hr />
      <Pai />
      <hr />
      <PC.PlacaMae nome="CLS" valor="600" />
      <hr />
      <PC.Memoria nome="HyperX" valor="200" />
      <hr />
      <PC.PlacaDeVideo nome="RTX 3060 TI" valor="3000" />
      <hr />
      <World>
        <Arena arena = "Arena Castelão">
          <Hero
            name="Erick Pulga"
            img="https://s2-ge.glbimg.com/RyJIvyGWJgn-sz8JFeg4PL0jclg=/0x0:1599x1066/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/y/k/rnaMJkQrmAwQgatByrKA/whatsapp-image-2023-03-29-at-23.44.55.jpeg"
          />
          <Enemy
            name="Globo"
            img="https://teletime.com.br/wp-content/uploads/2019/11/globo-jornalismo-e1573271440167.jpg"
          />
        </Arena>
      </World>
    </div>
  );
}

export default App;
