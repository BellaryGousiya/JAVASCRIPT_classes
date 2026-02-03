const scan =require("prompt-sync")();


let s= scan("Enter the String ");

function checkPalindrome()
{
    let t=s.trim().toLowerCase();
    let reversed = t.split("").reverse().join("");
    return reversed === t;
}

console.log(checkPalindrome(s));










