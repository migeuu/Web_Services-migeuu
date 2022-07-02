import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function UpdateEmployee() {
  return (
    <div id="menu-content">
      <Header
        title={"Atualizar os dados de um funcionário (necessário inserir o ID)"}
      />
      <main>
        <div className="default-menu">
          <Link to={"/create/employee"}>Criar</Link>
          <Link to={"/update/employee"}>Atualizar</Link>
        </div>
      </main>
    </div>
  );
}
