const faker = require("faker");
const generateEmployees = (amount) => {
  let employees = [];
  for (x = 0; x < amount; x++) {
    employees.push(createEmployee());
  }
  return employees;
};

const createEmployee = () => {
  const companyDepartments = [
    "Marketing",
    "Finance",
    "Operations Management",
    "Human Resources",
    "IT",
  ];

  const employeeDepartment =
    companyDepartments[Math.random() * companyDepartments.length];
  const employee = {
    name: faker.name.findName(),
    title: faker.name.jobTitle(),
    department: employeeDepartment,
    joined: faker.date.past(),
  };

  return employee;
};

module.exports = {
  generateEmployees,
};
