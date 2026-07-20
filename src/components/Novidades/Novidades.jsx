import "./Novidades.css";
import { ProdutosCard } from "../ProdutosCard/ProdutosCard";
import { BotaoSeta } from "../BotaoSeta/BotaoSeta";
import { listaProdutosMasculinos } from "../../data/mockData";
import modeloFeminina from "../../assets/modeloFeminina.svg";
import setaDireita from "../../assets/setaDireita.svg";

export function Novidades() {
  return (
    <>
    <section className="novidades-container">
      <div className="container-produtos-novidades">
        <div className="novidades-text">
          <h3>Novidades</h3>
        </div>
        
        <div className="carrossel-produtos-container">
        <ProdutosCard
          dadosProdutos={listaProdutosMasculinos}
          variante="destaque"
         
        />
      </div>
      
      </div>

      <BotaoSeta
        iconeSeta={setaDireita}
        textoAlt={"Rolar produtos para a direita"}
        classePosicao="posicao-seta-dir"
      />


    </section>

     <div className="container-img-modelo">
        <img src={modeloFeminina} alt="Foto modelo de uma feminina" />
      </div>

      </>
  );
}
