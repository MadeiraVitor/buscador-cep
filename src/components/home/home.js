import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import baseUrl from "../../services/cep";
import { Main } from "./style"

export const Home = () => {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {

    if (input === '') {
      alert('Para buscar digite um CEP')
      return;
    }

    const response = await fetch(`${baseUrl}/${input}/json`)
    return await response.json().then(function (data) {
      setCep(data)
      setInput("")
    })
  }

  return (
    <Main>
      <h1 className="title">Busque seu CEP</h1>

      <div className="container-input">
        <input type="text" placeholder="Digite seu CEP" value={input} onChange={(event) => setInput(event.target.value)} />

        <button className="button-search" onClick={handleSearch}>
          <FiSearch size={25} color="#000000" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <div className="info">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </div>
      )}

    </Main>
  );
}