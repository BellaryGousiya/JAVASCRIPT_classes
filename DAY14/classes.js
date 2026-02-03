class Student{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    introduce()
    {
        console.log(`Hi I am ${this.name} years old`);
        
    }
}

const s1 = new Student("Gousiya", 23, "JAVASCRIPT");
s1.introduce();