import "./CarrosselTamanhos.css";
import { BotaoSeta } from "../BotaoSeta/BotaoSeta";
import { tamanhosProdutos } from "../../data/mockData";
import setaEsquerda from "../../assets/setaEsquerda.svg";
import setaDireita from "../../assets/setaDireita.svg";

function ListaDeTamanhos() {
  return (
    <div className="tamanhos-pista">
      {tamanhosProdutos.map((tam) => (
        <div className="tamanhos-card" key={tam}>
          <span>{tam}</span>
        </div>
      ))}
    </div>
  );
}

export function CarrosselTamanhos() {
  return (
    <section className="tamanhos-section">
      <h3>Compre por Tamanho</h3>

      <div className="tamanhos-container">
        <BotaoSeta
          iconeSeta={setaEsquerda}
          textoAlt={"Rolar tamanhos para a esquerda"}
          classePosicao="posicao-tamanho-esq"
        />

        <ListaDeTamanhos />

        <BotaoSeta
          iconeSeta={setaDireita}
          textoAlt={"Rolar tamanhos para a direita"}
          classePosicao="posicao-tamanho-dir"
        />
      </div>
    </section>
  );
}