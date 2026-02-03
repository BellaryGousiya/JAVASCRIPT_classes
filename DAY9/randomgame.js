const prompt=require("prompt-sync")();

let randomNumber = Math.floor(Math.random()*100);
console.log(`🎮 NUMBER GUESSING GAME!
I'm thinking of a Number between 1 and 100.
You have 10 attempts!`);

let maxAttempts = 10;
let attempts = 0;

while(attempts < maxAttempts){
    let guess = parseInt(prompt(`Attempt ${attempts+1} : Enter your guess: `));
    attempts++;
    if(guess < randomNumber)
    {
        console.log(`📉 Too low! Go Higher!`);
    }
    else if(guess > randomNumber)
    {
        console.log(`📈 Too high! Go Higher!`);
        
    }
    else{
        console.log(`🎉 CONGRATULATIONS! You got it in a ${attempts} attempts!`);
        break;
    }
    if(attempts === maxAttempts)
    {
        console.log(`Game Over ❌`);
        console.log(`The correct Number is : ${randomNumber}`);
        
    }
}





