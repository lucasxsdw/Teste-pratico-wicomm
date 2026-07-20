export function CarrosselImg({ dadosCarrossel, tipoCarrossel}) {
  return (
    <>
      {dadosCarrossel.map((item) => {
        if (tipoCarrossel === "marcas") {
          return (
            <div className="marca-card" key={item.id}>
              <img
                src={item.img}
                alt={item.titulo || "Marca"}
                className="marca-img-fundo"
              />

              {item.logo && (
                <img
                  src={item.logo}
                  alt={`Logo ${item.titulo}`}
                  className="marca-logo"
                />
              )}
            </div>
          );
        }

        return (
          <div className="produto-card" key={item.id} > 
            <img src={item.img} alt={item.titulo} className="produto-img" />
            <h3 className="produto-tag">{item.titulo}</h3>
          </div>
        );
      })}
    </>
  );
}