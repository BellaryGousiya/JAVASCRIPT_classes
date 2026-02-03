const btn=document.getElementById("main-heading");
const out=document.getElementById("output")



//btn.addEvenmtLister(event,callback function)
btn.addEventListener("click", function()
{
    out.textContent="THE BUTTON HAS BEEN CLICKED";
});


function clrChange()
{
    btn.classList.toggle("btnclr");
}
btn.addEventListener("click",clrChange);

//btn.removeEventListener("click",clrChange)



