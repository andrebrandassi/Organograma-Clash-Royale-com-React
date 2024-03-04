import "./Esconder.css"

export const Esconder = ({esconder}) => {
    return(
        <div className="btn-mostrar">
            <h3>Coleção de Cartas</h3>
            <div className="menu-toggle">
               <button onClick={esconder}>
                {esconder ? "-" : "+"}
               </button>
            </div>
        </div>
    )
}