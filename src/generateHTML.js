const fs = require("fs");
const path = require("path");

const templateDirectory = path.resolve(__dirname, "../templates");

const generateHTML = (employees) => {
    const HTML = [];
    //filtered by role and pushed into HTML array
    
    HTML.push(employees.filter((employee) => employee.getRole() === "Manager").map((manager) => renderManager(manager)));
    
    HTML.push(employees.filter((employee) => employee.getRole() === "Engineer").map((engineer) => renderEngineer(engineer)));
    
    HTML.push(employees.filter((employee) => employee.getRole() === "Intern").map((intern) => renderIntern(intern)));

    return renderFullMarkdown(HTML.join(""));
};

