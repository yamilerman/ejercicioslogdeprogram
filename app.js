
/*Cambia el contenido de la etiqueta h1 con document.querySelector 
y asigna el siguiente texto: "Hora del Desafío"*/
let titulo = document.querySelector("h1");
titulo.innerHTML = "HORA DEL DESAFIO";

/*Crea una función que muestre en la consola 
el mensaje "El botón fue clicado" siempre 
que se presione el botón "Console"*/
function alertConsole() {
  console.log("El botón fue clickeado");
}

/*Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el 
nombre de una ciudad de Argentina. 
Luego, muestra una alerta con el mensaje concatenando la respuesta con el 
texto: "Estuve en {ciudad} y me acordé de ti"*/
function mostrarMensaje() {
    let ciudad = prompt ("¿En que ciudad de Argentina has estado?");
    if (ciudad === null || ciudad === ""){
        alert("Por favor, ingresá una ciudad");
        return
    }
    alert (`Estuve en ${ciudad} y me acordé de vos`);
} 

/*Crea una función que muestre una alerta 
con el mensaje: "Yo amo JS" 
siempre que se presione el botón "Alert"*/
function alertJs(){
    alert ("Yo amo JS");
}

/*Al hacer clic en el botón "suma", pide 2 números y 
muestra el resultado de la suma en una alerta*/
function alertSuma (){
    let primerNumero = prompt ("Ingresá el primer número");
    let segundoNumero = prompt ("Ingresá el segundo número");
    let resultado = parseInt(primerNumero) + parseInt(segundoNumero);
    alert (`La suma de los dos números es: ${resultado}`);
}

