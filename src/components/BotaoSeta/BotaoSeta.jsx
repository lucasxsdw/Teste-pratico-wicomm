import "./BotaoSeta.css";

export function BotaoSeta({ iconeSeta, textoAlt, classePosicao }) {
  return (
    <button className={`botao-base ${classePosicao}`}>
      <img src={iconeSeta} alt={textoAlt} />
    </button>
  );
}