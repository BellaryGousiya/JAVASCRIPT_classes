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

 class Manager extends Employee{
    constructor(name,salary,teamSize)
    {
        super(name,"Management",salary);
    }

    calculateBonus(){
        return this.salary *0.3;
    }
 }
 const e1=new Employee("General","Admin",100000);
 const d1=new Developer("kaif",60000,"JS");
 const m1=new Manager("Harshit",100000,50);

 console.log(e1.calculateBonus());
 console.log(d1.calculateBonus());
 console.log(m1.calculateBonus());
 