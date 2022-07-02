import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function CreateMenu() {
  return (
    <div id="menu-content">
      <Header
        title={
          "Escolha se deseja criar ou atualizar os dados de um funcionário"
        }
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
