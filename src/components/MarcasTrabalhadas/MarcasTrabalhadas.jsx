import "./MarcasTrabalhadas.css";
import { ProdutosCard } from "../ProdutosCard/ProdutosCard";
import { listaProdutosMasculinos } from "../../data/mockData";
import modeloTenis from "../../assets/modeloTenis.svg";

export function MarcasTrabalhadas() {
  return (
    <section className="marcas-container">
      <h3 className="nossas-marcas">Nossas marcas</h3>
      <div className="carrossel-marca">
        <h3 className="nome-marca">Mizuno</h3>
        <h3 className="nome-marca">Adidas</h3>
        <h3 className="nome-marca">Olimpikus</h3>
        <h3 className="nome-marca">Fila</h3>
        <h3 className="nome-marca">Kenner</h3>
      </div>

      <div className="barra-marca">
        <div className="barra-marca-flutuante"></div>
      </div>

      <div className="img-modelos-mizunos">
        <img src={modeloTenis} alt="Modelos de Tênis mizuno" />
      </div>

      <div className="container-marca">
        <div className="card-marca">
          <ProdutosCard
            dadosProdutos={listaProdutosMasculinos}
            variante="destaque"
          />
          <ProdutosCard
            dadosProdutos={listaProdutosMasculinos}
            variante="destaque"
          />
        </div>
      </div>
    </section>
  );
}