const Employee = require('../lib/Employee.js');
const { test, expect } = require("@jest/globals");

test('creates a new Employee object and checks for @ in email address', () => {
    const employee = new Employee('Phil',1,'phil@example.com');

    expect(employee.employeeName).toBe('Phil');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toMatch(/@/);
})  