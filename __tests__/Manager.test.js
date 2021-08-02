const Manager = require('../lib/Manager.js');
const { test, expect } = require("@jest/globals");

test('extends the Employee class to a new Manager object and checks for @ in email address', () => {
    const manager = new Manager('Phil',1,'phil@example.com',200);

    expect(manager.employeeName).toBe('Phil');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toMatch(/@example.com/);
    expect(manager.officeNumber).toEqual(expect.any(Number));
})  