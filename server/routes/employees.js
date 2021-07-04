import express from "express";

import {
  create,
  getEmployeesByName,
  getEmployeesByCPF,
  getEmployeesByJobTitle,
  getEmployeesByState,
  getEmployeesBySalary,
  getEmployeesByStatus,
  getEmployeesByCreatAt,
  deleteByCPF,
} from "../controllers/employeesController.js";

import {
  checkCPF,
  checkState,
  checkName,
  checkJobTitle,
  checkSalary,
  checkStatus,
  checkDate,
  checkCPFtoDelete,
} from "../middleware/employeesMiddleware.js";

const router = express.Router();

router.post("/employees", checkCPF, create);
router.get("/employees/name/:name", checkName, getEmployeesByName);
router.get("/employees/CPF/:cpf", checkCPF, getEmployeesByCPF);
router.get(
  "/employees/jobTitle/:jobTitle",
  checkJobTitle,
  getEmployeesByJobTitle
);
router.get("/employees/state/:state", checkState, getEmployeesByState);
router.get("/employees/salary/:salary", checkSalary, getEmployeesBySalary);
router.get("/employees/status/:status", checkStatus, getEmployeesByStatus);
router.get("/employees/createdAt", checkDate, getEmployeesByCreatAt);
router.delete("/employees/:cpf", checkCPFtoDelete, deleteByCPF);

export default router;
