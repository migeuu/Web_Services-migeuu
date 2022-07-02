import React, { useState } from "react";
import { Header } from "../components/Header";
import { validate } from "gerador-validador-cpf";

export function CreateEmployee() {
  const [employeeData, setEmployeeData] = useState({
    status: "",
    createdAt: new Date().toLocaleDateString(),
    jobTitle: "",
    cpf: "",
    name: "",
    state: "",
    salary: "",
  });

  const handleChange = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div id="search-content">
      <Header title={"Criar um funcionário "} />
      <main>
        <form>
          <input
            type="text"
            name="name"
            value={employeeData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="CPF"
            value={employeeData.cpf}
            onChange={({ e }) => {
              const validCpf = validate(e.target.value);
              if (validCpf) {
                handleChange(e);
              }
            }}
            required
          />
          <input
            type="text"
            name="jobTitle"
            value={employeeData.jobTitle}
            onChange={handleChange}
            required
          />
        </form>
      </main>
    </div>
  );
}
