import "./App.css";
import iconeLupa from "./assets/lupa.svg";
import logoDiSantini from "./assets/ds-logo.svg";
import iconeCarrinho from "./assets/carrinho.svg";
import fotoModelo from "./assets/fotoModelo.svg";
import imgChinelo from "./assets/imgChinelo.svg";
import imgTenis from "./assets/imgTenis.svg";
import imgModelo from "./assets/img.svg";
import setaDireita from "./assets/setaDireita.svg";
import setaEsquerda from "./assets/setaEsquerda.svg";

import logoConverse from "./assets/logoConverse.svg";
import logoOlympikus from "./assets/logoOlympikus.svg";
import modeloConverse from "./assets/modeloConverse.svg";
import modeloOlympikus from "./assets/modeloOlympikus.svg";
import marca from "./assets/marca.svg";

import tenisMizuno from "./assets/tenisMizuno.svg";
import gostei from "./assets/gostei.svg";
import modeloTenis from "./assets/modeloTenis.svg";

import modeloFeminina from "./assets/modeloFeminina.svg";

import logoHome from "./assets/logoHome.svg";
import logoCarrinho from "./assets/logoCarrinho.svg";
import logoDs from "./assets/logoDs.svg";
import logoCard from "./assets/logoCard.svg";
import logoUser from "./assets/logoUser.svg";

/* cabeçalho */
function Header() {
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

/*banner princial com textos flutuantes*/
function BannerPrincipal() {
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

/*carrossel de produtos */
function CarrosselProdutos() {
  return (
    <section className="produtos-section">
      <h2>Nossos produtos</h2>

      <div className="card-section">
        <BotaoSeta
          iconeSeta={setaEsquerda}
          textoAlt={"Rolar produtos para a esquerda "}
          classePosicao="posicao-produto-esq"
        />

        <CarrosselImg dadosCarrossel={listaDeFotos} tipoCarrossel="produtos" />

        <BotaoSeta
          iconeSeta={setaDireita}
          textoAlt={"Rolar produtos para a direita "}
          classePosicao="posicao-produto-dir" /*dinamico */
        />
      </div>
    </section>
  );
}

/*carrossel de tamanhos */
function CarrosselTamanhos() {
  return (
    <section className="tamanhos-section">
      <h3>Compre por Tamanho</h3>

      <div className="tamanhos-container">
        <BotaoSeta
          iconeSeta={setaEsquerda}
          textoAlt={"Rolar produtos para a esquerda "}
          classePosicao="posicao-tamanho-esq"
        />

        <ListaDeTamanhos />

        <BotaoSeta
          iconeSeta={setaDireita}
          textoAlt={"Rolar produtos para a direita "}
          classePosicao="posicao-tamanho-dir"
        />
      </div>
    </section>
  );
}

// carrossel marcas
function CarrosselMarcas() {
  return (
    <section className="marcas-section">
      <div className="card-marcas">
        <CarrosselImg dadosCarrossel={listaMarcas} tipoCarrossel="marcas" />
      </div>
    </section>
  );
}

// seção de filtro por idade,sexo..
function FiltroProdutos() {
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

//seçao marcas
function MarcasTrabalhadas() {
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
        <img src={modeloTenis} alt="Modelos de Têsnis mizuno" />
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

// novidade
function Novidades() {
  return (
    <>
      <section className="novidades-container">

        <div className="container-produtos-novidades">

          <div className="novidades-text">
          <h3>Novidades</h3>
        </div>
          <div className="card-produtos">
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
        

        
        <BotaoSeta
          iconeSeta={setaDireita}
          textoAlt={"Rolar produtos para a direita "}
          classePosicao="posicao-seta-dir"
        />


        <div className="container-img-modelo">
          <img src={modeloFeminina} alt="Foto modelo de uma feminina" />
        </div>
      </section>
    </>
  );
}

// footer
function NavBar() {
  return (
    <div className="container-navBar">
      <LogoNavBar />
    </div>
  );
}

//componenetes

const listaProdutosMasculinos = [
  {
    id: 7,
    porcentagemDesconto: "-20%",
    iconeGostei: gostei,
    iconDesc: "Gostei",
    imgProduto: tenisMizuno,
    marca: "MIZUNO",
    descricao: "Tênis Mizuno Wave Endeavor 3",
    precoAntigo: "R$ 799,00",
    precoAtual: "R$ 499,90",
    valorClube: "R$ 399,00",
    textoClube: " no Clube",
    parcelamentoDestaque: "5x de R$ 100,00",
  },
];

function ProdutosCard({ dadosProdutos, variante = "normal" }) {
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

              <button className="botao-comprar">Comprar agora</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
// Componente que renderiza a pista e os círculos de tamanhos dinamicamente
const tamanhosProdutos = [33, 34, 35, 36];
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

// Componente que mapeia os dados para renderizar os cards de imagem dos produtos
const listaDeFotos = [
  { id: 1, titulo: "Chinelos", img: imgChinelo },
  { id: 2, titulo: "Tênis", img: imgTenis },
  { id: 3, titulo: "Modelo", img: imgModelo },
];

const listaMarcas = [
  { id: 4, img: modeloConverse, logo: logoConverse },
  { id: 5, img: modeloOlympikus, logo: logoOlympikus },
  { id: 6, img: marca },
];

function CarrosselImg({ dadosCarrossel, tipoCarrossel }) {
  return (
    <>
      {dadosCarrossel.map((item) => {
        // 1. Estrutura Exclusiva para MARCAS
        if (tipoCarrossel === "marcas") {
          return (
            <div className="marca-card" key={item.id}>
              {/* Imagem de fundo */}
              <img
                src={item.img}
                alt={item.titulo}
                className="marca-img-fundo"
              />

              {/* Renderiza a logo apenas se o item possuir uma logo */}
              {item.logo && (
                <img
                  src={item.logo}
                  alt={`Logo ${item.titulo}`}
                  className="marca-logo"
                />
              )}

              {/* Título da marca */}
              <h3 className="marca-nome">{item.titulo}</h3>
            </div>
          );
        }

        // 2. Estrutura Exclusiva para PRODUTOS (Padrão)
        return (
          <div className="produto-card" key={item.id}>
            <img src={item.img} alt={item.titulo} className="produto-img" />
            <h3 className="produto-tag">{item.titulo}</h3>
          </div>
        );
      })}
    </>
  );
}

// Componente genérico para reaproveitamento dos botões de seta
function BotaoSeta({ iconeSeta, textoAlt, classePosicao }) {
  return (
    <button className={`botao-base ${classePosicao}`}>
      <img src={iconeSeta} alt={textoAlt} />
    </button>
  );
}

const imgensNavBar = [
  { id: 7, img: logoHome, desc: "Ícone home" },
  { id: 8, img: logoCarrinho, desc: "Ícone carrinho" },
  { id: 9, img: logoDs, desc: "Ícone DI SANTINNI" },
  { id: 10, img: logoCard, desc: "Ícone cartão de compra " },
  { id: 11, img: logoUser, desc: "Ícone usuário" },
];

function LogoNavBar() {
  return (
    <>
      {imgensNavBar.map((icone) => (
        <div className="container-icone-navBar" key={icone.id}>
          <img src={icone.img} alt={icone.desc} />
        </div>
      ))}
    </>
  );
}

// Componente raiz
function App() {
  return (
    <div className="app-container">
      <Header />
      <BannerPrincipal />
      <CarrosselProdutos />
      <CarrosselTamanhos />
      <CarrosselMarcas />
      <FiltroProdutos />
      <MarcasTrabalhadas />
      <Novidades />
      <NavBar />
    </div>
  );
}

export default App;
