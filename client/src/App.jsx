import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { SearchMenu } from "./pages/SearchMenu";
import { CPF } from "./pages/SearchCPF";
import { Name } from "./pages/SearchName";
import { JobTitle } from "./pages/SearchJobTitle";
import { Status } from "./pages/SearchStatus";
import { Salary } from "./pages/SearchSalary";
import { Date } from "./pages/SearchDate";
import { State } from "./pages/SearchState";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pesquisar" component={SearchMenu} />
        <Route exact path="/pesquisar/cpf" component={CPF} />
        <Route exact path="/pesquisar/name" component={Name} />
        <Route exact path="/pesquisar/jobTitle" component={JobTitle} />
        <Route exact path="/pesquisar/status" component={Status} />
        <Route exact path="/pesquisar/salary" component={Salary} />
        <Route exact path="/pesquisar/date" component={Date} />
        <Route exact path="/pesquisar/state" component={State} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
