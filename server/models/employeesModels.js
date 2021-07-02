import mongoose from "mongoose";

const employeesSchema = new mongoose.Schema({
  createdAt: {
    type: String,
    default: new Date().toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    }),
  },
  jobTitle: {
    type: String,
    required: [true, "Campo não pode ficar vazio"],
  },
  cpf: {
    type: Number,
    required: [true, "Campo não pode ficar vazio"],
    unique: true,
    match: [/^\d{11}$/, "Campo inválido, deve conter 11 dígitos"],
  },
  name: {
    type: String,
    required: [true, "Campo não pode ficar vazio"],
  },
  state: {
    type: String,
    required: [true, "Campo não pode ficar vazio"],
    match: [
      /^[A-Z]{2}/,
      "Campo inválido, deve ser uma sigla com duas letras em maiúsculo",
    ],
  },
  salary: {
    type: Number,
    required: [true, "Campo não pode ficar vazio"],
  },
  status: {
    type: String,
    default: "ATIVO",
    match: [
      /(^ATIVO$|^BLOQUEADO$|^INATIVO$)/,
      'Campo inválido, aceita apenas os valores "ATIVO", "BLOQUEADO" ou "INATIVO"',
    ],
  },
});

export default mongoose.model("EmployeesModel", employeesSchema);
