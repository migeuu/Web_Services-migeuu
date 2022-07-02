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
import { CreateMenu } from "./pages/CreateMenu";
import { CreateEmployee } from "./pages/CreateEmployee";
import { UpdateEmployee } from "./pages/UpdateEmployee";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchMenu} />
        <Route exact path="/search/cpf" component={CPF} />
        <Route exact path="/search/name" component={Name} />
        <Route exact path="/search/job-title" component={JobTitle} />
        <Route exact path="/search/status" component={Status} />
        <Route exact path="/search/salary" component={Salary} />
        <Route exact path="/search/date" component={Date} />
        <Route exact path="/search/state" component={State} />
        <Route exact path="/create" component={CreateMenu} />
        <Route exact path="/create/employee" component={CreateEmployee} />
        <Route exact path="/update/employee" component={UpdateEmployee} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
