//Funciones

//Crear programa para hacer limonada


function exprimirLimones(cantidad) {
    console.log("Exprimiendo " + cantidad + "");
    let jugoExtraido = cantidad * 10; //Considerando obtener 10ml de jugo por cada limon
    console.log("Se obtuvo " + jugoExtraido + "ml de jugo de limon");
    return jugoExtraido;
}

//funcion para mezclar el jugo de limon con agua y azucar
function mezclarJugoDeLimon(cantidadDeJugo, cantidadDeAua, CantidadDeAzucar) {
    console.log("Mezclando " + cantidadDeJugo + " ml de jugo de limon con " + cantidadDeAua + " ml de agua y " + CantidadDeAzucar + " gramos de azucar.");
}

//Funcion para servir limonada
function servirLimonada() {
    console.log("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;

}



//funcion principal que prepare mi limonada
function prepararLimonada(cantidadDeLimon) {
    let jugoDeLimon = exprimirLimones(cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10);
    servirLimonada();
}

prepararLimonada(10);





