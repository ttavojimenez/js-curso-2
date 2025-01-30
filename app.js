let titulo = document.querySelector ('h1');
titulo.innerHTML = "Hora del Desafio";

function doyClick() {
    console.log ("El Boton fue clicado");
}

function preguntarCiudad() {
    const ciudad = prompt("Por favor ingresa una ciudad de brasil : ")

    if (ciudad) {
        alert(`Estuve en ${ciudad} y me acordé de ti`);
    }else{
        alert("No ingresaste una ciudad valida");
    }
}

function yoAmo(){
    alert("Yo amo a Js");
}

function sumandonos(){
    const numero1 = parseFloat(prompt("Digita el primer numero"));
    const numero2 = parseFloat(prompt("Digita el segundo numero:"));

    const resultado = numero1 + numero2;

    alert(`La suma de los numeros es : ${resultado}`);
}

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("maria");

function dobleNumero(numero) {
    return numero * 2;
    
}
console.log(dobleNumero(33));