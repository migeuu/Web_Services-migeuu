import React from "react";
import "../styles/list.scss";

export function List({ employees }) {
  return (
    <section className="table">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Data Cadastro</div>
          <div className="col col-2">Cargo</div>
          <div className="col col-3">cpf</div>
          <div className="col col-4">nome</div>
          <div className="col col-5">estado</div>
          <div className="col col-6">salário</div>
          <div className="col col-7">status</div>
        </li>
        {employees.length > 0 &&
          employees.map((employee, index) => (
            <li key={index} className="table-row">
              <div className="col col-1" data-label="createdAt">
                {employee.createdAt}
              </div>
              <div className="col col-2" data-label="jobTitle">
                {employee.jobTitle}
              </div>
              <div className="col col-3" data-label="cpf">
                {employee.cpf}
              </div>
              <div className="col col-4" data-label="name">
                {employee.name}
              </div>
              <div className="col col-5" data-label="state">
                {employee.state}
              </div>
              <div className="col col-6" data-label="salary">
                {employee.salary}
              </div>
              <div className="col col-7" data-label="status">
                {employee.status}
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
