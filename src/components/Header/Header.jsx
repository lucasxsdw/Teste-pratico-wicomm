import "./Header.css";
import iconeLupa from "../../assets/lupa.svg";
import logoDiSantini from "../../assets/ds-logo.svg";
import iconeCarrinho from "../../assets/carrinho.svg";

export function Header() {
  return (
    <header className="header_container">
      <img src={iconeLupa} alt="Pesquisar" className="icon-search" />
      <img src={logoDiSantini} alt="Logo Di Santinni" className="icon-logo" />
      <img
        src={iconeCarrinho}
        alt="Carrinho de compras"
        className="icon-cart"
      />
    </header>
  );
}