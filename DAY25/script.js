 const container=document.querySelector(".container");
const minusBtn=document.querySelector("#minus-btn");
const plusBtn=document.querySelector("#plus-btn");
const holder=document.querySelector("#holder");
const input=document.getElementById("input");

let count=0;

plusBtn.addEventListener("click",()=>{
    count++;
    holder.textContent=count;
});

minusBtn.addEventListener("click",(e)=>{
     if(count>0) count--;
     holder.textContent=count;    
});

container.addEventListener("click",(e)=>{
    console.log("You Clicked : " + e.target);
    console.log("The Tag name : " +e.target.tagName); 
    console.log("The Tag id : " +e.target.id);  
    console.log("The Content is: "+e.target.textContent);
    
});

console.log(input);



