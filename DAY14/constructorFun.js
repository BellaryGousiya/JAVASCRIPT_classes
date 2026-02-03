function Student(name,age,skill)
{
    this.name =name;
    this.age =age;
    this.skill=skill;
    //Student.prototype.introduce=function()
    this.introduce =function()
    {
        console.log(`Hi I am ${this.name} I am ${this.age} years old`);
        console.log(`I have ${this.skill} skill`); 
    }
};

const s1 = new Student("Gousiya", 23, "JAVASCRIPT");
s1.introduce();