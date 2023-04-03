const Intern = require("../lib/intern.js");

describe('Intern', () => {
    it('should create an object', () => {
      const intern = new Intern();
      expect(typeof intern).toEqual("object");
    });

    it('should return name', () => {
        const testName = "Manny";
        const intern = new Intern(testName);
        expect(intern.name).toEqual(testName);
    });

    it('should return id', () => {
        const testID = 5;
        const intern = new Intern("Manny", testID);
        expect(intern.id).toEqual(testID);
    });

    it('should return email', () => {
        const testEmail = "manny@yahoo.com";
        const intern = new Intern("Manny", 5, testEmail);
        expect(intern.email).toEqual(testEmail);
    });

    it('should return name from getName()', () => {
        const testName = "Manny";
        const intern = new Intern(testName);
        expect(intern.getName()).toEqual(testName);
    });

    it('should return id from getID()', () => {
        const testID = 5;
        const intern = new Intern("Manny", testID);
        expect(intern.getID()).toEqual(testID);
    });

    it('should return email from getEmail()', () => {
        const testEmail = "manny@yahoo.com";
        const intern = new Intern("Manny", 5, testEmail);
        expect(intern.getEmail()).toEqual(testEmail);
    });

    it('should return Employee string when getRole() is called', () => {
        const intern = new Intern();
        expect(intern.getRole()).toEqual("Intern");
    });

    it('should return school when getSchool() is called', () => {
        const testSchool = "UT Austin";
        const intern = new Intern("Manny", 5, "manuel@yahoo.com", "UT Austin");
        expect(intern.getSchool()).toEqual(testSchool);
    });

});