import React, { useEffect, useState, useMemo } from "react";
import { getByCPF } from "../service/requestAPI";
import { Header } from "../components/Header";
import { List } from "../components/List";
import "../styles/search.scss";

export function CPF() {
  const [cpf, setCpf] = useState(null),
    [valueInput, setValueInput] = useState(""),
    [data, setData] = useState(""),
    desabled = useMemo(() => testCPF(valueInput), [valueInput]);

  function getCpf(event) {
    event.preventDefault();
    setCpf(valueInput);
  }
  function testCPF(value) {
    const regex = /^\d{11}$/;
    return !regex.test(value);
  }

  const fetchdata = async () => {
    if (cpf) {
      const results = await getByCPF(cpf);
      const { message } = results;
      if (message) {
        setData(message);
      } else {
        setData(results);
      }
    }
  };
  useEffect(() => {
    fetchdata();
  }, [cpf]);
  return (
    <div id="search-content">
      <Header title={"CPF deve ter 11 dígitos"} />
      <main>
        <form>
          <input
            type="text"
            maxLength="11"
            value={valueInput}
            onChange={({ target }) => setValueInput(target.value)}
          />
          <button disabled={desabled} onClick={getCpf}>
            Pesquisar
          </button>
        </form>
        {typeof data === "string" ? <p> {data} </p> : ""}
        {typeof data[0] === "object" ? <List employees={data} /> : ""}
      </main>
    </div>
  );
}
