const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () =>{
        it("Should create a manager object", () =>{
            const newManager = new Manager("Bob", "1", "bob@gmail.com");
            expect(typeof(newManager)).toBe("object");
        })
    })

    it("Should return the Manager's name when getName() is called", () =>{
        const newManager = new Manager("Bob", "1", "bob@gmail.com");
        expect(newManager.getName()).toEqual("Bob");
    })

    it("Should return the Manager's id when getId() is called", () =>{
        const newManager = new Manager("Bob", "1", "bob@gmail.com");
        expect(newManager.getId()).toEqual("1");
    })

    it("Should return the Manager's email when getEmail() is called", () =>{
        const newManager = new Manager("Bob", "1", "bob@gmail.com");
        expect(newManager.getEmail()).toEqual("bob@gmail.com");
    })

    it("Should return the Manager's role when getRole() is called", () =>{
        const newManager = new Manager("Bob", "1", "bob@gmail.com");
        expect(newManager.getRole()).toEqual("Manager");
    })

    it("Should return the Manager's office number when getOffice() is called", () =>{
        const newManager = new Manager("Bob", "1", "bob@gmail.com", "A2");
        expect(newManager.getOffice()).toEqual("A2");
    })
});