const Employee = require('../lib/Employee.js');
const { test, expect } = require("@jest/globals");

test('creates a new Employee object and checks for @ in email address', () => {
    const employee = new Employee('Herb',0,'herb@example.com');

    expect(employee.employeeName).toBe('Herb');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toMatch(/@example.com/);
})  