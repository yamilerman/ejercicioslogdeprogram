// array vacio
let listaGenerica = [];

// array con elementos
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// agregar elementos a un array creado
lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

//funcion que muestre en la consola todos los elementos de la lista
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();

//función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();

//función que calcule el promedio de los elementos en una lista de números
function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log("Média:", media);

//función que muestre en la consola el número más grande y el número más pequeño en una lista
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log("Mayor:", mayor);
  console.log("Menor:", menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

//función que devuelva la suma de todos los elementos en una lista
function sumaTodosLosElementos(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log("Suma:", suma);

/*función que devuelva la posición en la lista donde se encuentra un elemento pasado 
como parámetro, o -1 si no existe en la lista.*/

function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

// función que reciba dos listas de números del mismo 
//tamaño y devuelva una nueva lista con la suma de los elementos uno a uno
function sumarListas (lista1, lista2){
    //valido que las listas tengan la misma longitud
}


//función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número
