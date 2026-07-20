import "./CarrosselProdutos.css";
import { BotaoSeta } from "../BotaoSeta/BotaoSeta";
import { CarrosselImg } from "../CarrosselMarcas/CarrosselImg";
import { listaDeFotos } from "../../data/mockData";
import setaEsquerda from "../../assets/setaEsquerda.svg";
import setaDireita from "../../assets/setaDireita.svg";

export function CarrosselProdutos({ onAdicionar }) {
  return (
    <section className="produtos-section">
      <h2>Nossos produtos</h2>

      <div className="card-section">
        <BotaoSeta
          iconeSeta={setaEsquerda}
          textoAlt={"Rolar produtos para a esquerda"}
          classePosicao="posicao-produto-esq"
        />

        <CarrosselImg dadosCarrossel={listaDeFotos} tipoCarrossel="produtos" onAdicionar={onAdicionar} />

        <BotaoSeta
          iconeSeta={setaDireita}
          textoAlt={"Rolar produtos para a direita"}
          classePosicao="posicao-produto-dir"
        />
      </div>
    </section>
  );
}