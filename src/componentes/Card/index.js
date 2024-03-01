import "./Card.css"

export const Card = ({nome, tipo, imagem, corDoCabecalho}) => {
    return(
        <div className="card">
            <div className="cabecalho" style={{backgroundColor: corDoCabecalho}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{tipo}</h5>
            </div>
        </div>
    )
}