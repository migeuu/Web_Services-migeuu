import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import "../styles/menu.scss";

export function SearchMenu() {
  return (
    <div id="menu-content">
      <Header
        title={"Escolha um atributo para realizar a pesquisa de funcionários"}
      />
      <main>
        <div>
          <Link to={"/pesquisar/cpf"}>CPF</Link>
        </div>
        <div>
          <Link to={"/pesquisar/name"}>Nome</Link>
        </div>
        <div>
          <Link to={"/pesquisar/cargo"}>Cargo</Link>
        </div>
        <div>
          <Link to={"/pesquisar/state"}>Quantidade por estado</Link>
        </div>
        <div>
          <Link to={"/pesquisar/salary"}>Salário</Link>
        </div>
        <div>
          <Link to={"/pesquisar/date"}>Data de cadastro</Link>
        </div>
        <div>
          <Link to={"/pesquisar/status"}>Status</Link>
        </div>
      </main>
    </div>
  );
}
