const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

const employees = [];

let isTeamComplete = false;