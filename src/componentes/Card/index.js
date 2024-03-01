import "./Card.css"

export const Card = ({nome, tipo, elixir, imagem, corDoCabecalho}) => {
    return(
        <div className="card">
            <div className="cabecalho" style={{backgroundColor: corDoCabecalho}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>Custo em elixir: {elixir}</h5>
                <h6>Tipo: {tipo}</h6>
                
            </div>
        </div>
    )
}