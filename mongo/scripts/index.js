const yargs = require("yargs");
const fs = require("fs");
const { generateEmployees } = require("./employees");
const argv = yargs
  .command("amount", "Decides the number of claims to generate", {
    amount: {
      description: "The amount to generate",
      alias: "a",
      type: "number",
    },
  })
  .help()
  .alias("help", "h").argv;

if (argv.hasOwnProperty("amount")) {
  const amount = argv.amount;
  const employees = generateEmployees(amount);

  const jsonObj = JSON.stringify(employees);
  fs.writeFileSync("employeedata.json", jsonObj);
}
