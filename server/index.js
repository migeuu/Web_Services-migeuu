import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import employeesRoute from "./routes/employees.js";
dotenv.config();

const { MONGODB_URL, PORT } = process.env;

if (!MONGODB_URL) {
  throw new Error(
    "Defina uma variável de ambiente com nome MONGODB_URL no arquivo .env.local"
  );
}

if (!PORT) {
  throw new Error(
    "Defina uma variável de ambiente com nome PORT no arquivo .env.local"
  );
}

const app = express();

app.use("/employees", employeesRoute);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))
  )
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

mongoose.set("useFindAndModify", false);
