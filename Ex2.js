const prompt = require('prompt-sync')();

var num1 = parseFloat(prompt("Digite o primeiro Numero: "))
var num2 = parseFloat(prompt("Digite o segundo Numero: "))

console.log("A média é: ",(num1 + num2) / 2 )
