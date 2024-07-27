var xPontoA = -5;
var yPontoA = 3;

var xPontoB = 6;
var yPontoB = 5;

// dAB² = (xB – xA)² + (yB – yA)²

var distancia = parseInt(Math.sqrt(Math.pow(xPontoB - xPontoA,2) + (Math.pow(yPontoB - yPontoA,2))))

console.log("A distância é : ≈", distancia)
