import React from "react";
import "../styles/header.scss";

export function Header({ title }) {
  return (
    <header className="headerContainer">
      <h1>{title}</h1>
    </header>
  );
}
