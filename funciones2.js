// función que calcule el índice de masa corporal (IMC) de una persona
function calcularIMC(peso, estatura) {
  var imc = peso / (altura * altura);
  return imc;
}

// función que calcule el valor del factorial de un número
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

//  función que convierta un valor en dólares y devuelva el valor equivalente en pesos argentinos
function calcularDolaresAPesos(dólares) {
  var cotizaciónDolar = 1095;
  var pesosArgentinos = dólares * cotizaciónDolar;
  return pesosArgentinos;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnPesos = calcularDolaresAPesos(valorEnDolar);
console.log(`${valorEnDolar} dólares  es Pesos Argentinos ${valorEnPesos}`);

//función que muestre en pantalla el área y el perímetro de una sala rectangular
function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}

// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);

//función que muestre en pantalla el área y el perímetro de una sala circular
function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}

// Ejemplo de uso
let radio = 2;
calcularAreaYPerimetroCircular(radio);

//función que muestre en pantalla la tabla de multiplicar de un número
function darTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
//Ejemplo de uso
let numero = 1;
darTablaDeMultiplicar(numero);
