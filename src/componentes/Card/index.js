import { AiFillCloseCircle } from "react-icons/ai";
import "./Card.css"

export const Card = ({card, corDoCabecalho, aoDeletar}) => {
    return(
        <div className="card">
            <AiFillCloseCircle size={50} onClick={() => aoDeletar(card.id)} className="deletar"/>
            <div className="cabecalho" style={{backgroundColor: corDoCabecalho}}>
                <img src={card.imagem} alt={card.nome}/>
            </div>
            <div className="rodape">
                <h4>{card.nome}</h4>
                <h5>Custo em elixir: {card.elixir}</h5>
                <h6>Tipo: {card.tipo}</h6>
                
            </div>
        </div>
    )
}