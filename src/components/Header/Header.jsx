import "./Header.css";
import iconeLupa from "../../assets/lupa.svg";
import logoDiSantini from "../../assets/ds-logo.svg";
import iconeCarrinho from "../../assets/carrinho.svg";

export function Header({ quantidade = 0 }) {
  return (
    <header className="header_container">
      <img src={iconeLupa} alt="Pesquisar" className="icon-search" />
      <img src={logoDiSantini} alt="Logo Di Santinni" className="icon-logo" />

      <div className="carrinho-wrapper">
        <img
          src={iconeCarrinho}
          alt="Carrinho de compras"
          className="icon-cart"
        />
        <span className="badge-carrinho">1</span> {/* Número fixo aqui */}
      </div>
    
    </header>
  );
}