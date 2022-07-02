import React from "react";
import { Header } from "../components/Header";

export function CreateEmployee() {
  return (
    <div id="search-content">
      <Header title={"Criar um funcionário "} />
      <main>
        {/* <form>
          <input
            type="text"
            value={valueInput}
            onChange={({ target }) => setValueInput(target.value)}
          />
          <button disabled={desabled} onClick={getDate}>
            Pesquisar
          </button>
        </form>
        {typeof data === "string" ? <p> {data} </p> : ""}
        {typeof data[0] === "object" ? <List employees={data} /> : ""} */}
      </main>
    </div>
  );
}
