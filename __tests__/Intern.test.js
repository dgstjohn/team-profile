const Intern = require('../lib/Intern.js');
const { test, expect } = require("@jest/globals");

test('extends the Employee class to a new Intern object and checks for @ in email address', () => {
    const intern = new Intern('Cam',3,'cam@example.com','UConn');

    expect(intern.employeeName).toBe('Cam');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toMatch(/@example.com/);
    expect(intern.school).toEqual(expect.any(String));
})  