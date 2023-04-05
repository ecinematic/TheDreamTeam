const generateHTML = (employees) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
</head>
<body>
${employees.map(employee => {
    let employeeRole = employee.getRole();
    let HTML = `<div class="card" style="width: 18rem;">
    <div class="card-header">
      Role: ${employeeRole}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${employee.name}</li>
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item">Email: ${employee.email}</li>`

      if (employeeRole === "Manager") {
        return `
        ${HTML}
        <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
        </ul>
      </div>
        `
      } 
      else if (employeeRole === "Engineer") {
        return `
        ${HTML}
        <li class="list-group-item">Github: ${employee.getGithub()}</li>
        </ul>
      </div>
        `
      }
      else if (employeeRole === "Intern") {
        return `
        ${HTML}
        <li class="list-group-item">School: ${employee.getSchool()}</li>
        </ul>
      </div>
        `
      }
})}
</body>
</html>
    `
}

module.exports = generateHTML;