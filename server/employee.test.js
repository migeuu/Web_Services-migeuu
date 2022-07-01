// Importing supertest as the requester of data
import request from "supertest";

// Importing our app so supertest can query data
import app from "./index";

// All the queries below are made in localhost enviroment with placeholder data "funcionarios.json"

// Setting a longer timeout so jest doesn't get in the way
jest.setTimeout(10000);

describe("API Services", () => {
  // Returns a list of employees by NAME queried
  it("return employee by NAME", async () => {
    const res = await request(app).get("/employee?name=Afonso");
    console.log(res._body[0]);
    expect(res._body[0]).toHaveProperty("name");
    expect(res._body[0].name).toBe("Bernie Afonso");
  });

  // Returns a employee with the CPF queried
  it("return employee by CPF", async () => {
    const res = await request(app).get("/employee?cpf=72523904624");
    expect(res._body).toHaveProperty("cpf");
    expect(res._body.cpf).toBe("72523904624");
  });

  // Returns a list of employees by TITLE queried
  it("return employee by TITLE", async () => {
    const res = await request(app).get("/employee?jobTitle=Analista");
    expect(res._body[0]).toHaveProperty("jobTitle");
    expect(res._body[0].jobTitle).toContain("Analista");
  });

  // Returns a list of employees by REGISTRATION DATE queried
  it("return employee by REGISTRATION DATE", async () => {
    const res = await request(app).get("/employee?date=19%2F04%2F2017");
    expect(res._body[0]).toHaveProperty("createdAt");
    expect(res._body[0].createdAt).toContain("19/04/2017");
  });

  // Returns the quantity of employees by STATE queried
  it("return employee by STATE", async () => {
    const res = await request(app).get("/employee?state=SC");
    expect(res._body).toHaveProperty("SC");
    expect(res._body.SC).toBe(15);
  });

  // Returns the quantity of employees by SALARY queried
  it("return employee by SALARY", async () => {
    const res = await request(app).get("/employee?salary=4361.90");
    expect(res._body[0]).toHaveProperty("salary");
    expect(res._body[0].salary).toBe("4361.90");
  });
});
