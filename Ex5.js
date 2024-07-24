const prompt = require('prompt-sync')();

var peso = parseFloat(prompt("Digite a seu peso: "));
var altura = parseFloat(prompt("Digite sua altura:  "));

var imc = peso / Math.pow(altura, 2)

console.log("seu imc é: ", imc)

if(imc < 18,5){
    console.log("Abaixo do peso!!")
}else if(imc < 25){
    console.log("Peso normal!!")
}else if(imc < 30){
    console.log("Sobrepeso!!")
}else {
    console.log("Obesidade!!")
}