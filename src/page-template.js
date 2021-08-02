const generateManager = () => {
    const { employeeName, id, email, officeNumber} = data;
    return `<div class="card">
            <div class="card-header">
                <h4 id="employeeName">${employeeName}</h5>
                    <p id="role">Manager</p>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: <span id="id">${id}</span></li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${email}">${email}</a></span></li>
                    <li class="list-group-item">Office number: <span id="officeNumber">${officeNumber}</span></li>
                </ul>
            </div>
        </div>`
};

const generateEngineer = engineerData => {
    for (let index = 0; index < engineerData.length; index++) {
        const { employeeName, id, email, github } = engineerData;

        return `<div class="card">
                <div class="card-header">
                    <h4 id="employeeName">${employeeName}</h5>
                        <p id="role">Engineer</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span id="id">${id}</span></li>
                        <li class="list-group-item">Email: <span id="email"><a href="mailto:${email}">${email}</a></span></li>
                        <li class="list-group-item">GitHub site: <span id="github"><a href="https://github.com/${github}" target="_blank">${github}</a></span></li>
                    </ul>
                </div>
            </div>`

    }
};

const generateIntern = () => {
    for (let index = 0; index < internData.length; index++) {
        const { employeeName, id, email, school } = internPrompt;

        return `<div class="card">
                <div class="card-header">
                    <h4 id="employeeName">${employeeName}</h5>
                        <p id="role">Engineer</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span id="id">${id}</span></li>
                        <li class="list-group-item">Email: <span id="email"><a href="mailto:${email}">${email}</a></span></li>
                        <li class="list-group-item">School: <span id="school">${school}</span></li>
                    </ul>
                </div>
            </div>`

    }
};

module.exports = templateData => {
    console.log(templateData);
    // const { manager, engineer, intern, ...header } = generateHTML;
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Bootcamp, Inc. -- Our Team</title>
    </head>
    <body>
        <div class="container">
            <header>Bootcamp, Inc. -- Our Team</header>
            <div id="employeeTeam">
            ${generateManager()}
            ${generateEngineer()}
            ${generateIntern()}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"></script>
    </body>
    </html>`
    
}


// const generateHTML = () => {
// console.log('This will be an HTML page!')

