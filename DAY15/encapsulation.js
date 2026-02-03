class Employee
{
    name;
    department;
    #salary;
    constructor(name,department,salary)
    {
        this.name=name;
        this.department=department;
        this.#salary=salary;
    }
    //GETTER
    get salary()
    {
        return this.#salary;
    }
    //SETTER
    set salary(newSalary)
    {
        this.#salary=newSalary;
    }
    get Details(){
        console.log(`${this.name} || ${this.department} || ${this.#salary}`);
    }
    work(){
        console.log(`${this.name} is Working Hard in Office`);
    }

    calculateBonus(){
        return this.#salary *0.1;
    }
}

const e1=new Employee("Gousiya","DEV",50000);
console.log(e1.name);
console.log(e1.department);
console.log(e1.salary);

e1.work();
console.log(e1.calculateBonus());

e1.salary=70000;
console.log(e1.salary);


