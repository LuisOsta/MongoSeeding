const faker = require("faker");
const localuser = require("../localuser.json");
const generateEmployees = (amount) => {
  let employees = [];
  for (x = 0; x < amount; x++) {
    employees.push(createEmployee());
  }
  employees.push(createEmployee(localuser));
  return employees;
};

const createEmployee = (user) => {
  const companyDepartments = [
    "Marketing",
    "Finance",
    "Operations Management",
    "Human Resources",
    "IT",
  ];
  const employeeDepartment =
    companyDepartments[Math.floor(Math.random() * companyDepartments.length)];
  const employee = {
    name: faker.name.findName(),
    title: faker.name.jobTitle(),
    department: employeeDepartment,
    joined: faker.date.past(),
    ...user,
  };
  return employee;
};

module.exports = {
  generateEmployees,
};
