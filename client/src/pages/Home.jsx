import React from "react";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/home.scss";

export function Home() {
  return (
    <div id="home-content">
      <Header title={"Web Service"} />
      <main>
        <div>
          <Link to={"/pesquisar"}>Pesquisar</Link>
        </div>
      </main>
    </div>
  );
}
