import { useState } from 'react';
import Banner from './componentes/Banner';
import { Formulario } from './componentes/Formulario';
import { Raridade } from './componentes/Raridade';

function App() {

  const raridades = [
    {
      nome: "Comum",
      cor1: "#C6BFD4",
      cor2: "#C6BFD444",
    },
    {
      nome: "Rara",
      cor1: "#f0730f",
      cor2: "#f0730f66",
    },
    {
      nome:  "Épica",
      cor1: "#D121F1",
      cor2: "#D121F166",
    },
    {
      nome: "Lendária",
      cor1: "#8CE4FF",
      cor2: "#8CE4FF66",
    },
    {
      nome: "Campeões",
      cor1: "#F0D52B",
      cor2: "#F0D52B66",
    }
  ]

  const [cartas,setCartas]  = useState([])

  const novaCartaCadastrada = (carta) => {
    console.log(carta)
    setCartas([...cartas, carta])
  }

  return (

    <div className="App">
      <Banner/>
      <Formulario raridades={raridades.map(raridade => raridade.nome)} cartaCadastrada={carta => novaCartaCadastrada(carta)}/>
      {raridades.map(raridade => <Raridade key={raridade.nome} nome={raridade.nome} cor1={raridade.cor1} cor2={raridade.cor2} cartas={cartas.filter(carta => carta.raridade === raridade.nome)}/>)}
    </div>
  );
}

export default App;

// criar local para armazenar lista de cartas
// fazer o formulario ouvir o evento de cadastrar as cartas
// e armazenar os cadatros fora do formulario (app)
