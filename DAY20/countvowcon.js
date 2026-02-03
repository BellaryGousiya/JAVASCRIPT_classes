const scan =require("prompt-sync")();

let s= scan("Enter the String ");

function count()
{
    let vowels = "aeiouAEIOU";
    let vowelCount=0;
    let conCount=0;

    for(let x of s)
    {
        if(vowels.includes(x))
        {
            vowelCount++;
        }
        else{
            conCount++;
        }
    }
    return {"VOWELS" :vowelCount,"CONSONENTS":conCount};
}
console.log(count(s));


