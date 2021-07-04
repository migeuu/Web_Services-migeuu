import { StatusCodes } from "http-status-codes";
import EmployeesModel from "../models/employeesModels.js";

const getEmployeesByName = async (request, response) => {
  try {
    const { name } = request.params;
    const employees = await EmployeesModel.find({ name });
    notFound(employees, status, response, message);
    if (employees.length === 0) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json("Não foram encontrados(as) funcionários(as) com esse nome");
    }
    return response.status(StatusCodes.OK).json(employees);
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};

async function getEmployeesByCPF(request, response) {
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
      .send(error.message);
  }
}

const getEmployeesByJobTitle = async (request, response) => {
  try {
    const { jobTitle } = request.params;
    const employees = await EmployeesModel.find({ jobTitle });
    if (employees.length === 0) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json("Não há funcionários(as) com esse cargo");
    }
    return response.status(StatusCodes.OK).json(employees);
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};

const getEmployeesByState = async (request, response) => {
  try {
    const { state } = request.params;
    const employees = await EmployeesModel.find({ state });
    if (employees.length === 0) {
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
      .send(error.message);
  }
};
const getEmployeesBySalary = async (request, response) => {
  try {
    const { salary } = request.params;
    const employees = await EmployeesModel.find({ salary });
    if (employees.length === 0) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json("Não há funcionários(as) com esse valor de salário");
    }
    return response.status(StatusCodes.OK).json(employees);
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};

const getEmployeesByStatus = async (request, response) => {
  try {
    const { status } = request.params;
    const employees = await EmployeesModel.find({
      status: status.toUpperCase(),
    });
    if (employees.length === 0) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json("Não há funcionários(as) com esse status");
    }
    return response.status(StatusCodes.OK).json(employees);
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};

const getEmployeesByCreatAt = async (request, response) => {
  try {
    const { date } = request.query;
    const employees = await EmployeesModel.find({ createdAt: date });
    if (employees.length === 0) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json("Não há funcionários(as) cadastrados nesse dia");
    }
    return response.status(StatusCodes.OK).json(employees);
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
};

const deleteByCPF = async (request, response) => {
  try {
    const { cpf } = request.params;
    await EmployeesModel.findOneAndDelete({ cpf });
    return response.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(error.message);
  }
};

const create = async (request, response) => {
  try {
    const { createdAt, jobTitle, cpf, name, state, salary, status } =
      request.body;

    const createEmployee = await EmployeesModel.create({
      createdAt,
      jobTitle,
      cpf,
      name,
      state,
      salary,
      status: status.toUpperCase(),
    });
    return response.status(StatusCodes.CREATED).json(createEmployee._id);
  } catch (error) {
    console.error(error);
    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(error.message);
  }
};

export {
  getEmployeesByName,
  getEmployeesByCPF,
  getEmployeesByJobTitle,
  getEmployeesByState,
  getEmployeesBySalary,
  getEmployeesByStatus,
  getEmployeesByCreatAt,
  deleteByCPF,
  create,
};
