let parrafo=document.querySelectorAll("h4");
let credito=document.querySelector("p");
credito.style.color="darkorange";
for (let i=0; i<=parrafo.length; i++){
    parrafo[0].style.color="cyan";
    parrafo[1].style.color="crimson";
    parrafo[2].style.color="gold";
    parrafo[3].style.color="violet";
    parrafo[4].style.color="steelblue";
    parrafo[4].innerText="Modo multijugador en desarrollo?";
}