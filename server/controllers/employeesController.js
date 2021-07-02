import { StatusCodes } from "http-status-codes";
import EmployeesModel from "../models/employeesModels.js";

const getEmployeesByName = async (request, response) => {
  try {
    const { name } = request.params;
    const employees = await EmployeesModel.find({ name });

    if (!employees) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json("Não foram encontrados(as) funcionários(as) com esse nome");
    }
    return response.status(StatusCodes.OK).json(employees);
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
};

const getEmployeesByCPF = async (request, response) => {
  try {
    const { cpf } = request.params;
    const employee = await EmployeesModel.findOne({ cpf });
    if (!employee) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json("Não foi encontrado(a) funcionário(a) com esse CPF");
    }
    return response.status(StatusCodes.OK).json(employee);
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
};

const getEmployeesByJobTitle = async (request, response) => {
  try {
    const { jobTitle } = request.params;
    const employees = await EmployeesModel.find({ jobTitle });
    if (!employees) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json("Não há funcionários(as) com esse cargo");
    }
    return response.status(StatusCodes.OK).json(employees);
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
};

const getEmployeesByState = async (request, response) => {
  try {
    const { state } = request.params;
    const employees = await EmployeesModel.find({ state });
    if (!employees) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json("Não há funcionários(as) cadastrados nessa sigla de estado");
    }
    return response
      .status(StatusCodes.OK)
      .json({ [`${state}`]: employees.length });
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
};
const getEmployeesBySalary = async (request, response) => {
  try {
    const { salary } = request.params;
    const employees = await EmployeesModel.find({ salary });
    if (!employees) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json("Não há funcionários(as) com esse valor de salário");
    }
    return response.status(StatusCodes.OK).json(employees);
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
};

const getEmployeesByStatus = async (request, response) => {
  try {
    const { status } = request.params;
    const employees = await EmployeesModel.find({ status });
    if (!employees) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json("Não há funcionários(as) com esse status");
    }
    return response.status(StatusCodes.OK).json(employees);
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
};

export {
  getEmployeesByName,
  getEmployeesByCPF,
  getEmployeesByJobTitle,
  getEmployeesByState,
  getEmployeesBySalary,
  getEmployeesByStatus,
};
