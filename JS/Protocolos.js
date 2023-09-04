//verificar protocolos de higiene y limpieza para consultorio dental


function areaLimpia(limpio) {
    if (limpio) {
        console.log("Todo limpio");
    } else {
        console.log("Esta sucio.... Limpiando...");
        limpio = true;

    }

}

function llavesDeAguaCerradas(Cerradas) {
    if (Cerradas) {
        console.log("Todo cerrado");
    } else {
        console.log("Se cerraron las llaves ya");
        Cerradas = true
    }
}


function Cerrar() {
    areaLimpia(false);
    llavesDeAguaCerradas(false);
}


Cerrar();
