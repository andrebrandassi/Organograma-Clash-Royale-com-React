import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"
import Banner from "./componentes/Banner";
import { Formulario } from "./componentes/Formulario";
import { Raridade } from "./componentes/Raridade";
import { Footer } from "./componentes/Footer";

function App() {
  const [raridades, setRaridades] = useState([
    {
      id: uuidv4(),
      nome: "Comum",
      cor: "#CCCCCC",
    },
    {
      id: uuidv4(),
      nome: "Rara",
      cor: "#f0730f",
    },
    {
      id: uuidv4(),
      nome: "Épica",
      cor: "#D121F1",
    },
    {
      id: uuidv4(),
      nome: "Lendária",
      cor: "#7CFDBB",
    },
    {
      id: uuidv4(),
      nome: "Campeão",
      cor: "#F0D52B",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: "Mega Cavaleiro",
      elixir: "7",
      tipo: "Tropa",
      imagem:
        "https://3.bp.blogspot.com/-FZDIiY9YgIQ/WT6q0dvOX-I/AAAAAAAA1UI/h0PoTthQdOkyef9SqiOjFWNTQqsab8z6ACLcB/s1600/megacavaleiro-clash-royale.png",
      raridade: "Lendária",
    },

    {
      id: uuidv4(),
      nome: "Barril de Goblins",
      elixir: "3",
      tipo: "Feitiço",
      imagem:
        "https://1.bp.blogspot.com/-JCq-wPM_YKI/V4ASyzkmE3I/AAAAAAAAqxg/CAsEI-qrVRoBFxm33wJ8xbbpF_kCDXLzwCLcB/s1600/barril-de-goblins-clash-royale-carta-epica.png",
      raridade: "Épica",
    },

    {
      id: uuidv4(),
      nome: "Bruxa",
      elixir: "5",
      tipo: "Tropa",
      imagem: "https://www.deckshop.pro/img/card_ed/Witch.png",
      raridade: "Épica",
    },
  ];

  const [cartas, setCartas] = useState({});

  const aoDeletarCarta = (raridadeId, cartaId) => {
    setCartas((prevCartas) => ({
      ...prevCartas,
      [raridadeId]: prevCartas[raridadeId].filter(
        (carta) => carta.id !== cartaId
      ),
    }));
  };

  function mudaCortime(cor, id) {
    setRaridades(
      raridades.map((raridade) => {
        if (raridade.id === id) {
          raridade.cor = cor;
        }
        return raridade;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        raridades={raridades.map((raridade) => raridade.nome)}
        cartaCadastrada={(carta) =>
          setCartas((prevCartas) => ({
            ...prevCartas,
            [carta.raridade]: [...(prevCartas[carta.raridade] || []), carta],
          }))
        }
      />
      {raridades.map((raridade, index) => (
        <Raridade
          key={index}
          raridade={raridade}
          cartas={cartas[raridade.nome] || []}
          aoDeletar={(cartaId) => aoDeletarCarta(raridade.nome, cartaId)}
          mudaCor={mudaCortime}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
