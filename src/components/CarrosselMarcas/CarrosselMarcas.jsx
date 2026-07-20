import "./CarrosselMarcas.css";
import { CarrosselImg } from "./CarrosselImg";
import { listaMarcas } from "../../data/mockData";

export function CarrosselMarcas() {
  return (
    <section className="marcas-section">
      <div className="card-marcas">
        <CarrosselImg dadosCarrossel={listaMarcas} tipoCarrossel="marcas" />
      </div>
    </section>
  );
}