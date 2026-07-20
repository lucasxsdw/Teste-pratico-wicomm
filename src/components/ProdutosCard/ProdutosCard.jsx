import "./ProdutosCard.css";

export function ProdutosCard({ dadosProdutos, variante = "normal" }) {
  return (
    <>
      {dadosProdutos.map((produto) => {
        return (
          <div className={`card-produto-completo ${variante}`} key={produto.id}>
            <div className="desc-produto">
              <div className="icones">
                <h3 className="procentagem-desconto-produto">
                  {produto.porcentagemDesconto}
                </h3>
                <img
                  src={produto.iconeGostei}
                  alt={produto.iconDesc}
                  className="icone-coracao"
                />
              </div>

              <img
                src={produto.imgProduto}
                alt={produto.descricao}
                className="imagem-tenis"
              />
            </div>

            <div className="info-produto">
              <h4 className="nome-marca-produto">{produto.marca}</h4>
              <h3 className="desc-item">{produto.descricao}</h3>

              <p className="preco-antigo-produto">{produto.precoAntigo}</p>
              <p className="preco-atual-produto">{produto.precoAtual}</p>
              <p className="preco-clube">
                <span className="valor-destaque">{produto.valorClube}</span>
                {produto.textoClube}
              </p>
              <p className="texto-parcelamento">
                ou{" "}
                <span className="destaque-parcela">
                  {produto.parcelamentoDestaque}
                </span>{" "}
                sem juros
              </p>

              <button className="botao-comprar"  type="button"  >Comprar agora</button>
            </div>
          </div>
        );
      })}
    </>
  );
}