class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log(employeeName);
    }
    getId() {
        console.log(id);
    }
    getEmail() {
        console.log(email);
    }
    getRole() {
        return {
            employeeName,
            id,
            email
        };
    }
};

module.exports = Employee;