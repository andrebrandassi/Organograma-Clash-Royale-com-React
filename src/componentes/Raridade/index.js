import hexToRgba from 'hex-to-rgba';
import { Card } from "../Card";
import "./Raridade.css";

export const Raridade = ({ raridade, cartas, aoDeletar, mudaCor}) => {
  const mainColor = { color: raridade.cor, borderColor: raridade.cor };
  const background = {backgroundColor: hexToRgba(raridade.cor,'0.5')}
  return (
    cartas.length > 0 && (
      <section className="raridade" style={background}>
        <input
          value={mainColor}
          onChange={evento => mudaCor(evento.target.value, raridade.id)}
          type="color"
          className="input-color"
        />
        <h3 style={mainColor}>{raridade.nome}</h3>
        <div className="cards">
          {cartas.map((carta, index) => {
            return (
              <Card
                key={index}
                corDoCabecalho={raridade.cor}
                card={carta}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
