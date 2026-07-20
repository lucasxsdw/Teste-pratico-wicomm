export function CarrosselImg({ dadosCarrossel, tipoCarrossel }) {
  return (
    <>
      {dadosCarrossel.map((item) => {
        if (tipoCarrossel === "marcas") {
          return (
            <div className="marca-card" key={item.id}>
              <img
                src={item.img}
                alt={item.titulo}
                className="marca-img-fundo"
              />

              {item.logo && (
                <img
                  src={item.logo}
                  alt={`Logo ${item.titulo}`}
                  className="marca-logo"
                />
              )}

              <h3 className="marca-nome">{item.titulo}</h3>
            </div>
          );
        }

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