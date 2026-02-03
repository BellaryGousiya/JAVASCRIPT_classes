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
    getDetails(){
        console.log(`${this.name} || ${this.department} || ${this.#salary}`);
    }
    work(){
        console.log(`${this.name} is Working Hard in Office`);
    }

    calculateBonus(){
        return this.#salary *0.1;
    }
}

class Developer extends Employee
{
    constructor(name,salary,language)
    {
        super(name,"Engineering",salary);
        this.language=language;
    }
    coding()
    {
        console.log(`${this.name} is coding in ${this.language}`);        
    }

    work()  //OVERRIDDEN
    {
        console.log(`${this.name} is writing ${this.language} code`);
    }

    calculateBonus() //OVERRIDEN
    {
        return this.salary*0.2;
    }

}

const d1=new Developer("Govardhan",80000,"JAVASCRIPT");
console.log(d1.language);
console.log(d1.calculateBonus);
d1.getDetails();
