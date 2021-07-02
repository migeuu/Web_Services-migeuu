import express from "express";

import {
  getEmployeesByName,
  getEmployeesByCPF,
  getEmployeesByJobTitle,
  getEmployeesByState,
  getEmployeesBySalary,
  getEmployeesByStatus,
} from "../controllers/employeesController.js";

const router = express.Router();

router.get("/name/:name", getEmployeesByName);
router.get("/CPF/:cpf", getEmployeesByCPF);
router.get("/jobTitle/:jobTitle", getEmployeesByJobTitle);
router.get("/state/:state", getEmployeesByState);
router.get("/salary/:salary", getEmployeesBySalary);
router.get("/status/:status", getEmployeesByStatus);

/*
a. 
 Nome;b. 
 CPF;c. 
 Cargo;d. 
 Data de Cadastros;
 e. UF de Nascimento, de formaquantitativa;
 f. faixa salarial;
 g. Serviço que localiza/retorna funcionários porstatus;
*/
//router.post("/employees", salesController.getAllSales);
//router.delete("/employees/:cpf", salesController.getAllSales);

export default router;
