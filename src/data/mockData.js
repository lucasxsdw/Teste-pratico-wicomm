// Importação dos assets necessários para as listas
import imgChinelo from "../assets/imgChinelo.svg";
import imgTenis from "../assets/imgTenis.svg";
import imgModelo from "../assets/img.svg";

import logoConverse from "../assets/logoConverse.svg";
import logoOlympikus from "../assets/logoOlympikus.svg";
import modeloConverse from "../assets/modeloConverse.svg";
import modeloOlympikus from "../assets/modeloOlympikus.svg";
import marca from "../assets/marca.svg";

import tenisMizuno from "../assets/tenisMizuno.svg";
import gostei from "../assets/gostei.svg";

import logoHome from "../assets/logoHome.svg";
import logoCarrinho from "../assets/logoCarrinho.svg";
import logoDs from "../assets/logoDs.svg";
import logoCard from "../assets/logoCard.svg";
import logoUser from "../assets/logoUser.svg";

export const listaProdutosMasculinos = [
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

export const tamanhosProdutos = [33, 34, 35, 36];

export const listaDeFotos = [
  { id: 1, titulo: "Chinelos", img: imgChinelo },
  { id: 2, titulo: "Tênis", img: imgTenis },
  { id: 3, titulo: "Modelo", img: imgModelo },
];

export const listaMarcas = [
  { id: 4, img: modeloConverse, logo: logoConverse },
  { id: 5, img: modeloOlympikus, logo: logoOlympikus },
  { id: 6, img: marca },
];

export const imgensNavBar = [
  { id: 7, img: logoHome, desc: "Ícone home" },
  { id: 8, img: logoCarrinho, desc: "Ícone carrinho" },
  { id: 9, img: logoDs, desc: "Ícone DI SANTINNI" },
  { id: 10, img: logoCard, desc: "Ícone cartão de compra " },
  { id: 11, img: logoUser, desc: "Ícone usuário" },
];