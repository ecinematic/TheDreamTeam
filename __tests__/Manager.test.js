const Manager = require("../lib/manager.js");

describe('Manager', () => {
    it('should create an object', () => {
      const manager = new Manager();
      expect(typeof manager).toEqual("object");
    });

    it('should return name', () => {
        const testName = "Manny";
        const manager = new Manager(testName);
        expect(manager.name).toEqual(testName);
    });

    it('should return id', () => {
        const testID = 5;
        const manager = new Manager("Manny", testID);
        expect(manager.id).toEqual(testID);
    });

    it('should return email', () => {
        const testEmail = "manny@yahoo.com";
        const manager = new Manager("Manny", 5, testEmail);
        expect(manager.email).toEqual(testEmail);
    });

    it('should return name from getName()', () => {
        const testName = "Manny";
        const manager = new Manager(testName);
        expect(manager.getName()).toEqual(testName);
    });

    it('should return id from getID()', () => {
        const testID = 5;
        const manager = new Manager("Manny", testID);
        expect(manager.getID()).toEqual(testID);
    });

    it('should return email from getEmail()', () => {
        const testEmail = "manny@yahoo.com";
        const manager = new Manager("Manny", 5, testEmail);
        expect(manager.getEmail()).toEqual(testEmail);
    });

    it('should return Employee string when getRole() is called', () => {
        const manager = new Manager();
        expect(manager.getRole()).toEqual("Manager");
    });

    it('should return office number when getOfficeNumber() is called', () => {
        const testOfficeNumber = 3;
        const manager = new Manager("Manny", 5, "manuel@yahoo.com", 3);
        expect(manager.getOfficeNumber()).toEqual(testOfficeNumber);
    });

});