import "./App.css";
import { Header } from "./components/Header/Header";
import { BannerPrincipal } from "./components/BannerPrincipal/BannerPrincipal";
import { CarrosselProdutos } from "./components/CarrosselProdutos/CarrosselProdutos";
import { CarrosselTamanhos } from "./components/CarrosselTamanhos/CarrosselTamanhos";
import { CarrosselMarcas } from "./components/CarrosselMarcas/CarrosselMarcas";
import { FiltroProdutos } from "./components/FiltroProdutos/FiltroProdutos";
import { MarcasTrabalhadas } from "./components/MarcasTrabalhadas/MarcasTrabalhadas";
import { Novidades } from "./components/Novidades/Novidades";
import { NavBar } from "./components/NavBar/NavBar";

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