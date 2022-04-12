const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () =>{
        it("Should create an employee object", () =>{
            const newEmployee = new Employee("Bob", "1", "bob@gmail.com");
            expect(typeof(newEmployee)).toBe("object");
        })
    })

    it("Should return the employee name when getName() is called", () =>{
        const newEmployee = new Employee("Bob", "1", "bob@gmail.com");
        expect(newEmployee.getName()).toEqual("Bob");
    })

    it("Should return the employee id when getId() is called", () =>{
        const newEmployee = new Employee("Bob", "1", "bob@gmail.com");
        expect(newEmployee.getId()).toEqual("1");
    })

    it("Should return the employee email when getEmail() is called", () =>{
        const newEmployee = new Employee("Bob", "1", "bob@gmail.com");
        expect(newEmployee.getEmail()).toEqual("bob@gmail.com");
    })

    it("Should return the employee's role when getRole() is called", () =>{
        const newEmployee = new Employee("Bob", "1", "bob@gmail.com");
        expect(newEmployee.getRole()).toEqual("Employee");
    })
});