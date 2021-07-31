const Engineer = require('../lib/Engineer.js');
const { test, expect } = require("@jest/globals");

test('extends the Employee class to a new Engineer object and checks for @ in email address', () => {
    const engineer = new Engineer('Jaime',2,'jaime@example.com','monterocjaime');

    expect(engineer.employeeName).toBe('Jaime');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toMatch(/@example.com/);
    expect(engineer.github).toEqual(expect.any(String));
})  