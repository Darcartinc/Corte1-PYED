function convertir(){

let peso= document.querySelector("#peso").value ;
let altura= document.querySelector("#altura").value ;
let resultado=(peso/(altura*altura));

console.log(altura);
console.log(peso);
console.log(resultado);

document.getElementById("mensaje").innerHTML=resultado;
}