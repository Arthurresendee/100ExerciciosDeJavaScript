const prompt = require('prompt-sync')();

var num1 = parseFloat(prompt("Digite o primeiro numero: "))
var num2 = parseFloat(prompt("Digite o segundo numero: "))
var num3 = parseFloat(prompt("Digite o terceiro numero: "))

console.log("A média é: ",(num1 + num2 + num3) / 3 )
