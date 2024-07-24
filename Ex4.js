const prompt = require('prompt-sync')();

var num1 = parseFloat(prompt("Digite a primeira nota: "));
var num2 = parseFloat(prompt("Digite a segunda nota:  "));
var num3 = parseFloat(prompt("Digite a terceira nota: "));

var mult = num1 * num2 * num3;

var media = Math.pow(mult, 1 / 3);

console.log("mult =", mult);
console.log("Média", media);
