//Función que muestra "¡Hola, mundo!" en la consola.

function mostrarholaMundo() {
  console.log("Hola, mundo!");
}
mostrarholaMundo();

//Función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.

function mostrarNombre(nombre) {
  console.log(`Hola,${nombre}`);
}

mostrarNombre("Marisa");

//Función que recibe un número como parámetro y devuelve el doble de ese número.

function calcularDoble(numero) {
  return numero * 2;
}
let resultadoDoble = calcularDoble(2);
//sin comillas porque si no lo devuelve literal
console.log(resultadoDoble);

//Función que recibe tres números como parámetros y devuelve su promedio.
function tresNumeros(a, b, c) {
  return (a + b + c) / 3;
}
let promedio = tresNumeros(1, 3, 5);
console.log(promedio);

//Función que recibe dos números como parámetros y devuelve el mayor de ellos.

function mayorQue(a, b) {
  return a > b ? a : b;
}
let numeroMayor = mayorQue(3, 7);
console.log(numeroMayor);

//Función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.

function numeroParaMultiplicar(numero) {
  return numero * numero;
}

let resultadoMultiplicado = numeroParaMultiplicar(8);
console.log(resultadoMultiplicado);
