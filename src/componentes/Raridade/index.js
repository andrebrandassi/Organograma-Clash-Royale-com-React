import { Card } from "../Card"
import "./Raridade.css"

export const Raridade = ({nome, cor1 ,cor2, cartas}) => {

    const mainColor  = {color : cor1, borderColor: cor1}
    const background = {backgroundColor:cor2}

    return(
       cartas.length > 0 && <section className="raridade" style={background}>
            <h3 style={mainColor}>{nome}</h3>
            <div className="cards">
            {cartas.map(carta => <Card 
                corDoCabecalho={cor1}     
                key={carta.nome}
                nome={carta.nome}
                tipo={carta.tipo}
                imagem={carta.imagem}
            />)}
            </div>
        </section>
    )
}