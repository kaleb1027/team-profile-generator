const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () =>{
        it("Should create an intern object", () =>{
            const newIntern = new Intern("Bob", "1", "bob@gmail.com");
            expect(typeof(newIntern)).toBe("object");
        })
    })

    it("Should return the Intern's name when getName() is called", () =>{
        const newIntern = new Intern("Bob", "1", "bob@gmail.com");
        expect(newIntern.getName()).toEqual("Bob");
    })

    it("Should return the Intern's id when getId() is called", () =>{
        const newIntern = new Intern("Bob", "1", "bob@gmail.com");
        expect(newIntern.getId()).toEqual("1");
    })

    it("Should return the Intern's email when getEmail() is called", () =>{
        const newIntern = new Intern("Bob", "1", "bob@gmail.com");
        expect(newIntern.getEmail()).toEqual("bob@gmail.com");
    })

    it("Should return the Intern's role when getRole() is called", () =>{
        const newIntern = new Intern("Bob", "1", "bob@gmail.com");
        expect(newIntern.getRole()).toEqual("Intern");
    })

    it("Should return the Intern's school when getSchool() is called", () =>{
        const newIntern = new Intern("Bob", "1", "bob@gmail.com", "UPenn");
        expect(newIntern.getSchool()).toEqual("UPenn");
    })
});