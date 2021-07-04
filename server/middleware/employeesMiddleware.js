import { StatusCodes } from "http-status-codes";

const checkCPF = (request, response, next) => {
  const { cpf } = request.body;
  const regex = /^\d{11}$/;
  if (!regex.test(cpf)) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json("São 11 dígitos no campo cpf");
  }
  next();
};

const checkState = (request, response, next) => {
  const { state } = request.body;
  const regex = /^[A-Z]{2}/;

  if (!regex.test(state)) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json("Deve ser uma sigla com duas letras em maiúsculo");
  }
  next();
};

const checkName = (request, response, next) => {
  const { name } = request.params;
  const regex = /^\d+$/;
  if (regex.test(name)) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json("Esta pesquisa aceita apenas strings");
  }
  next();
};

const checkJobTitle = (request, response, next) => {
  const { jobTitle } = request.params;
  const regex = /^\d+$/;
  if (regex.test(jobTitle)) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json("Esta pesquisa aceita apenas strings");
  }
  next();
};

const checkSalary = (request, response, next) => {
  const { salary } = request.params;
  const regex = /^\d+$/;

  if (!regex.test(salary)) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json("Esta pesquisa aceita apenas numbers");
  }
  next();
};

const checkStatus = (request, response, next) => {
  const { status } = request.params;

  const regex = /(^ATIVO$|^BLOQUEADO$|^INATIVO$)/;

  if (!regex.test(status.toUpperCase())) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json("A pesquisa aceita apenas os valores ATIVO, BLOQUEADO ou INATIVO");
  }
  next();
};

const checkDate = (request, response, next) => {
  const { date } = request.query;
  const regex = /^(0[1-9]|[12][0-9]|3[01])[\/\-](0[1-9]|1[012])[\/\-]\d{4}$/;
  if (!regex.test(date)) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json("O valor para pesquisa deve ser no formato DD/MM/YYYY");
  }
  next();
};

const checkCPFtoDelete = (request, response, next) => {
  const { cpf } = request.params;
  const regex = /^\d{11}$/;
  if (!regex.test(cpf)) {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json("São 11 dígitos no campo cpf");
  }
  next();
};

export {
  checkCPF,
  checkState,
  checkName,
  checkJobTitle,
  checkSalary,
  checkStatus,
  checkDate,
  checkCPFtoDelete,
};
