const box=document.querySelector("#box")

document.getElementById("highlight").onclick = function(){
    box.classList.toggle("highlight")
};

document.querySelector("#rounded").onclick=function(){
    box.classList.toggle("rounded")
}

document.getElementById("shadow").onclick=function()
{
    box.classList.toggle("shadow")
}


document.getElementById("reset").onclick =function(){
    box.classList.remove("shadow","rounded","highlight")
      
};