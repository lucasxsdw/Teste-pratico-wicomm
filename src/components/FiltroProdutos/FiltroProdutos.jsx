import "./FiltroProdutos.css";
import { ProdutosCard } from "../ProdutosCard/ProdutosCard";
import { listaProdutosMasculinos } from "../../data/mockData";

export function FiltroProdutos() {
  return (
    <section className="filtro-section">
      <div className="carrossel-filtro">
        <h3 className="nomes-filtros-red">Masculino</h3>
        <h3 className="nomes-filtros">Feminino</h3>
        <h3 className="nomes-filtros">Infantil</h3>
        <h3 className="nomes-filtros">Baby</h3>
        <h3 className="nomes-filtros">Lançamento</h3>
      </div>

      <div className="barra-filtro">
        <div className="barra-filtro-flutuante"></div>
      </div>

      <div className="container-produtos">
        <div className="card-produtos">
          <ProdutosCard
            dadosProdutos={listaProdutosMasculinos}
            variante="normal"
          />
          <ProdutosCard
            dadosProdutos={listaProdutosMasculinos}
            variante="normal"
          />
        </div>
      </div>
    </section>
  );
}