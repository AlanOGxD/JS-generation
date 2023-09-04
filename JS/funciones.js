/*

-Una funcion es un bloque de codigo que realiza una tarea especifica, cuando se llama
-Cada funcion de Javasrcipt es un objeto Funcion


*/

function saludar() {
    console.log("hola soy una funcion");
}

saludar();



/** * Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */

/*
Declarar funciones

-la palabra reservada function, que nos indica que estamos definiendo una funcion.
-el nombre de la funcion, dependiendo de la accion a realizar.
-un par de parentesis () despues del nombre. Puede contener parametros. En este caso tenemos ninguno
-Seguido de un juego de llaves para cerrar el bloque de codigo.
*Dependiendo de las instrucciones dentro del cuerpo de la función y del proposito de la misma, se determina si la función retorna un valor.
*/


//Llamamos una funcion y le vamos a almacenar un resultado

function suma(a, b) {
    return a + b;
}

var resultado = suma(5, 3);//almacena funcion en una variable

console.log(resultado);//imprimir funcion

/*
La funcion suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la funcion y almacenamos el resultado en la variable resultado
*/

//funcion que muestra un mensaje en la consola

function saludar(nombre) {
    console.log("Hola " + nombre + "!");
}

//Llamamos a la funcion saludar a alguien
saludar("Alan");

/** * La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama. */

//Hoisting

/*

*Se puede invocar una funcion antes de siquiera declararla 
*/



console.log(miVariable);//no da error, pero imprime undefined

var miVariable = 10;
//scope= alcance, hace referencia al alcance de una variable de nuestro codigo de JS.

//Global: quiere decir que se puede utilizar a trabajar con una variable dentro de cualquier parte de codigo.

//var: no es tan recomendado, por comportamiento de la variable y la poca adaptabilidad

//let: es preferible e incluso mas segura de utilizar porque ademas de funcionar de manera global, tambien puede ser utilizada de manera local.

//const: se refiere, por su nombre tan intuitivo, a la palabra constante, esto quiere decir que su valor no puede ser reasignado.



//variable local
function funcionConVariableLocal() {
    var mensaje = "esto es una variable local";
    console.log(mensaje);
}
funcionConVariableLocal();



var mensajeGlobal = "Global";
function funcionConVariableGlobal() {
    console.log(mensajeGlobal);
}
funcionConVariableGlobal();


/*
En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier funcion
*/



/*~~~~~~~~~~~~~~~~~
Funciones anonimas
~~~~~~~~~~~~~~~~~~ */


/*
Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como parametros en otras funciones.
La diferencia principal de estas funciones es que se declaran sin un nombre */



/*
function () {
    console.log("Hola xD");
}*/
const saludo = function () {
    console.log("Hola xDxD");
}
saludo();





/*
Funciones flecha
*/


/*
una forma mas concisa de definir funciones anonimas. Se le llama flecha debido a su sintaxis que utiliza (=>) 
*Basicamente, se trata de reemplazar la palabra function y a;adir => antes de abrir nuestras llaves

*/


const resta = (a, b) => (a - b);

/*
Esta funcion flecha es una forma mas corta de :
cont resta = function (a,b){
    return a-b
}
*/
console.log(resta(5, 3));


