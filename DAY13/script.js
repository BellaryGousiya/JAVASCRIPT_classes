const student = 
{
    name :"Gousiya",
    age :22,
    skill :"JAVASCRIPT",
    address:{
        street : "BTM 2nd Stage",
        city : "BLA",
        state :"KRT",
    },

    introduce: function(){
        console.log(`Hi I am ${this.name}`);
        console.log(`I am ${this.age} years old`);
        console.log(`I have a skill of ${this.skill}`);
    },
    celebrateBirthday : function()
    {
        this.age++;
        console.log(`I am celebrating my BDay am Now I turned ${this.age} `);
    },
};


student.introduce();
student.celebrateBirthday();
console.log(student.address);
console.log(student.address.state);

