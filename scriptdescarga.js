let descripcion=document.querySelectorAll("p");
let lista=document.querySelector("ol");
let fin =document.getElementById("findoc");
lista.style.color="yellow";
fin.style.color="blanchedalmond";
for (let i=0; i<=descripcion.length; i++){
    descripcion[0].style.color="darkkhaki";
    descripcion[1].style.color="indianred";
    descripcion[2].style.color="orange";
    descripcion[3].style.color="plum";
    descripcion[4].style.color="turquoise";
    descripcion[3].innerText="El mundo esta en tu contra";
}