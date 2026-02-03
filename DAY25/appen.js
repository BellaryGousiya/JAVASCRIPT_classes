 
const box = document.getElementById("box");

const h3=document.createElement("h3");

h3.textContent= "HI,Hello";

box.appendChild(h3);

const h1=document.createElement("h1");

h1.textContent="WELCOME TO JAVASCRIPT CLASS";

box.prepend(h1);