import { useState } from "react";
import "./styles.css";

//
export default function App() {
  const [nome, setNome] = useState("Eduardo");
  const [endereco, setEndereco] = useState("Avenida são joão");
  const [isOk, setIsOk] = useState(false);

  const handleNome = (event) => {
    const evento = event.target.value;
    setNome(evento);
  };

  const handleEndereco = (event) => {
    const evento = event.target.value;
    setEndereco(evento);
  };

  const handleButton = () => {
    setIsOk(!isOk);
  };

  return (
    <div className="App">
      <h1>Ola: {nome}</h1>
      <input type="text" value={nome} onChange={handleNome}></input>
      <h1>Seu endereco é: {endereco}</h1>
      <input type="text" value={endereco} onChange={handleEndereco}></input>
      {isOk ? <h1>Está ok para ser mostrado</h1> : <h1>Não está ok</h1>}

      <button onClick={handleButton}>Chamar função </button>
    </div>
  );
}
