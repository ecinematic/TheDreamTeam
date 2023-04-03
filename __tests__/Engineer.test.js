const Engineer = require("../lib/engineer.js");

describe('Engineer', () => {
    it('should create an object', () => {
      const engineer = new Engineer();
      expect(typeof engineer).toEqual("object");
    });

    it('should return name', () => {
        const testName = "Manny";
        const engineer = new Engineer(testName);
        expect(engineer.name).toEqual(testName);
    });

    it('should return id', () => {
        const testID = 5;
        const engineer = new Engineer("Manny", testID);
        expect(engineer.id).toEqual(testID);
    });

    it('should return email', () => {
        const testEmail = "manny@yahoo.com";
        const engineer = new Engineer("Manny", 5, testEmail);
        expect(engineer.email).toEqual(testEmail);
    });

    it('should return name from getName()', () => {
        const testName = "Manny";
        const engineer = new Engineer(testName);
        expect(engineer.getName()).toEqual(testName);
    });

    it('should return id from getID()', () => {
        const testID = 5;
        const engineer = new Engineer("Manny", testID);
        expect(engineer.getID()).toEqual(testID);
    });

    it('should return email from getEmail()', () => {
        const testEmail = "manny@yahoo.com";
        const engineer = new Engineer("Manny", 5, testEmail);
        expect(engineer.getEmail()).toEqual(testEmail);
    });

    it('should return Employee string when getRole() is called', () => {
        const engineer = new Engineer();
        expect(engineer.getRole()).toEqual("Engineer");
    });

    it('should return GitHub when getGithub() is called', () => {
        const testGitHub = "https://github.com/ecinematic";
        const engineer = new Engineer("Manny", 5, "manuel@yahoo.com", "https://github.com/ecinematic");
        expect(engineer.getGithub()).toEqual(testGitHub);
    });

});