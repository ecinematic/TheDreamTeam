const Employee = require("../lib/employee");

describe('Employee', () => {
    it('should create an object', () => {
      const employee = new Employee();
      expect(typeof employee).toEqual("object");
    });

    it('should return name', () => {
        const testName = "Manny";
        const employee = new Employee(testName);
        expect(employee.name).toEqual(testName);
    });

    it('should return id', () => {
        const testID = 5;
        const employee = new Employee("Manny", testID);
        expect(employee.id).toEqual(testID);
    });

    it('should return email', () => {
        const testEmail = "manny@yahoo.com";
        const employee = new Employee("Manny", 5, testEmail);
        expect(employee.email).toEqual(testEmail);
    });

    it('should return name from getName()', () => {
        const testName = "Manny";
        const employee = new Employee(testName);
        expect(employee.getName()).toEqual(testName);
    });

    it('should return id from getID()', () => {
        const testID = 5;
        const employee = new Employee("Manny", testID);
        expect(employee.getID()).toEqual(testID);
    });

    it('should return email from getEmail()', () => {
        const testEmail = "manny@yahoo.com";
        const employee = new Employee("Manny", 5, testEmail);
        expect(employee.getEmail()).toEqual(testEmail);
    });

    it('should return Employee string when getRole() is called', () => {
        const employee = new Employee();
        expect(employee.getRole()).toEqual("Employee");
    });

});

