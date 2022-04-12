const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () =>{
        it("Should create an engineer object", () =>{
            const newEngineer = new Engineer("Bob", "1", "bob@gmail.com");
            expect(typeof(newEngineer)).toBe("object");
        })
    })

    it("Should return the engineer's name when getName() is called", () =>{
        const newEngineer = new Engineer("Bob", "1", "bob@gmail.com");
        expect(newEngineer.getName()).toEqual("Bob");
    })

    it("Should return the engineer's id when getId() is called", () =>{
        const newEngineer = new Engineer("Bob", "1", "bob@gmail.com");
        expect(newEngineer.getId()).toEqual("1");
    })

    it("Should return the engineer's email when getEmail() is called", () =>{
        const newEngineer = new Engineer("Bob", "1", "bob@gmail.com");
        expect(newEngineer.getEmail()).toEqual("bob@gmail.com");
    })

    it("Should return the engineer's role when getRole() is called", () =>{
        const newEngineer = new Engineer("Bob", "1", "bob@gmail.com");
        expect(newEngineer.getRole()).toEqual("Engineer");
    })

    it("Should return the engineer's GitHub when getGithub() is called", () =>{
        const newEngineer = new Engineer("Bob", "1", "bob@gmail.com", "bob-1");
        expect(newEngineer.getGithub()).toEqual("bob-1");
    })
});