const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const generateHTML = require("./src/generateHTML.js");

const employees = [];

let isTeamComplete = false;

const validInput = (userInput) => {
    if (userInput === "") {
        return "A valid response is required";
    } else {
        return true;
    }
};

//initialize app
const init = async() => {
    await createManager();

while (!isTeamComplete) {
    const employeeQuestion = [
        {
        type: "list",
        message: "Please select the employee type you wish to add:",
        name: "employeeType",
        choices: [
            {name: "Engineer", value: "engineer", short: "Engineer"},
            {name: "Intern", value: "intern", short: "intern"},
            {name: "None", value: "none", short: "None"}
        ],
        },
    ];

    const {employeeType} = await inquirer.prompt(employeeType);

    if (employeeType === "none") {
        isTeamComplete = true;
    } else {
        if (employeeType === "engineer") {
            await createEngineer();
        }
    if (employeeType === "intern") {
        await createIntern();
    }
}
};

const HTML = generateHTML(employees);
fs.writeFileSync("team.html", HTML, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("HTML file was created");
    }
});
};

const createManager = async() => {
    const managerQuestions = [
        {type: "input", message: "Enter Manager Name", name: "name", validate: validInput,},
        {type: "input", message: "Enter ID", name: "id", validate: validInput,},
        {type: "input", message: "Enter Office Number", name: "officeNumber", validate: validInput,},
        {type: "input", message: "Enter Email", name: "email", validate: validInput,}     
    ];

    const managerAnswers = await inquirer.prompt(managerQuestions);
    const manager = new Manager(managerAnswers);
    employees.push(manager);
};


init();