import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
/* Exportação do component Formulario */
export const Formulario = (props) => {
  /* Lista de opções para o select */

  /* hooks para alteração do valor do estado dos inputs */
  const [nome, setNome] = useState("");
  const [tipo, settipo] = useState("");
  const [elixir, setElixir] = useState("")
  const [imagem, setImagem] = useState("");
  const [rari, setRari] = useState("")

  /* Função para chamar as alterações do valor do estado dos inputs */
  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };
  const handleChangeTipo = (event) => {
    settipo(event.target.value);
  };
  const handleChangeElixir = (event) =>{
    setElixir(event.target.value)
  }
  const handleChangeImagem = (event) => {
    setImagem(event.target.value);
  };
  const handleChangeRaridade = (event) =>{
    setRari(event.target.value)
  }

  /* Função do envento onSubmit para envio do formulario */
  const aoSalvar = (e) => {
    e.preventDefault();
    const novaCarta = {
      id: uuidv4(),
      nome,
      tipo,
      elixir,
      imagem,
      raridade: rari,
    };
    props.cartaCadastrada(novaCarta);
    setNome("");
    settipo("");
    setElixir("");
    setImagem("");
    setRari("");
  };
  
  /* JSX do Formulario */
  return (
    <section className="formulario">
      {/* Abertura do formulario com evento onSubmit */}
      <form onSubmit={aoSalvar}>
        <h2>Adicione uma carta a coleção</h2>
        {/* Componentes do input */}
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome da carta"
          valor={nome}
          alterado={handleChangeNome}
        />
        <CampoTexto
          obrigatorio={true}
          label="Tipo"
          placeholder="Digite o tipo de carta Ex: Aerea"
          valor={tipo}
          alterado={handleChangeTipo}
        />
        <CampoTexto
          obrigatorio={true}
          label="Elixir"
          placeholder="Digite o custo em elixir"
          valor={elixir}
          alterado={handleChangeElixir}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          alterado={handleChangeImagem}
        />
        {/* Componente do select */}
        <ListaSuspensa obrigatorio={true} label="Raridade" itens={props.raridades}
           valor={rari}
           alterado={handleChangeRaridade}
        />
        {/* Botao para ativar o envento submit do formulario */}
        <Botao>Adicionar Carta</Botao>
        {/* Fechamento do formulario */}
      </form>
    </section>
  );
};
