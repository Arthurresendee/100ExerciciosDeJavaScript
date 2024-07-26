// "x2 + 12x – 13 = 0."
var a = 1;
var b = 12;
var c = -13

var delta = Math.pow(b,2) + - 4 * a * c;

var base = 2 * a;
var raizDeDelta = Math.sqrt(delta)

var x1 = (-b + raizDeDelta) / base;
var x2 = (-b - raizDeDelta) / base;

console.log("x1 = ",x1);
console.log("x2 = ",x2);