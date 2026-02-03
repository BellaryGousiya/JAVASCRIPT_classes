class Demo
{
     constructor(name)
     {
        if(this.constructor === Demo)
        {
            throw new Error("Cannot abstraction ")
        }
     }
}

