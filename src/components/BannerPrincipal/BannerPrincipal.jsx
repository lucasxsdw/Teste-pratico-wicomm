import "./BannerPrincipal.css";

export function BannerPrincipal() {
  return (
    <>
      <section className="hero-banner">
        <div className="banner_content">
          <div className="topo-preco">
            <del className="preco-antigo">R$ 799,00</del>
            <div className="promo">20% OFF</div>
          </div>
          <h1 className="preco-atual">R$ 350,00</h1>
        </div>

        <a href="" className="confira-button">
          Confira
        </a>

        <div className="paginacao-container">
          <div className="ponto ativo"></div>
          <div className="ponto"></div>
          <div className="ponto"></div>
        </div>
      </section>

      <section className="barra-section">
        <h2>10% Na primeira compra</h2>
      </section>
    </>
  );
}