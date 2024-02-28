import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}`

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
            value={props.valor}
            onChange={props.alterado} 
            required={props.obrigatorio}
             placeholder={placeholderModificada}
             />
        </div>
    )
}

export default CampoTexto


// Pegar valor digitado e guardar em um local
// fazer o valor digitado no input aparecer no console

/* 
<input eventRecebeMundanca(aconteceuUmaMudanca)>

aconteceuUmaMudanca 
    imprimirNoConsole(valor recebido pelo input)
  */

// gravar valor digitado no input e imprimir no console
// atribuir uma variavel onde sera salvo o valor do input 
// fazer com que a variavel seja alterada quando digitar no input
// imprimir variavel alterada no console
/* 
var valor = ""

aconteceuUmaMudanca
    valor = valor recebido pelo input
    imprimirNoConsele(valor)
    
*/

// fazer o valor digitado e salvo na variavel aparecer na DOM
// usar um gancho para salvar o estado atual do valor e o eatado do valor que sera alterado
// passar a função para cada componente