const scan =require("prompt-sync")();

class PINError extends Error{

}






class ATM
{
    atmPin = 7000;
    enteredPin;

    Input(){
        return Number(scan("Enter your ATM PIN: "));
    }

    validate()
    {
        if(this.atmPin === this.enteredPin)
        {
            console.log("Collect your money");
            
        }else{
            throw new PINError("PIN is INCORRECT");
            
        }
    }
}



const hdfc = new ATM();
hdfc.enteredPin=hdfc.Input();


    try {
    hdfc.validate();
} catch (e) {
    console.log(e.message);
    
}

