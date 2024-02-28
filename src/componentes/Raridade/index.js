import "./Raridade.css"

export const Raridade = ({nome, cor1 ,cor2}) => {

    const mainColor  = {color : cor1, borderColor: cor1}
    const background = {backgroundColor:cor2}

    return(
        <section className="raridade" style={background}>
            <h3 style={mainColor}>{nome}</h3>
        </section>
    )
}