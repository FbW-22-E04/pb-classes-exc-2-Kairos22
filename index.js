// 1. Employee Classes
class Employee {
    constructor(id, firstname, lastname, taxId, salary){
        this.i = id;
        this.f = firstname;
        this.l = lastname;
        this.t = taxId;
        this.s = salary;
    }


generatePaySlip(){
    console.log(`Employee ID: ${this.i}`);
    console.log(`Name: ${this.f} ${this.l}`);
    console.log(`Tax ID: ${this.t}`);
    console.log(`Pay: ${(this.s / 12).toFixed(2)}`);
}

}

let emp1 = new Employee(1, "Basil", "Kulukundis", 234, 5550);
let emp2 = new Employee(2, "Avalon", " ó Ceallaigh", 54, 4799);
let emp3 = new Employee(3, "Carlos", "Mavroleon", 007, 9999);

emp1.generatePaySlip();
emp2.generatePaySlip();
emp3.generatePaySlip();
console.log('----------------------------1. Employee Classes');

// 2. Manager Class
class Manager extends Employee {
    constructor(id, firstname, lastname, taxId, salary){
        super (id, firstname, lastname, taxId, salary);

        this.managedEmployees = []
    }

}