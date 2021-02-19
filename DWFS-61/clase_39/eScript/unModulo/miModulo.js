let nombre = '';
const saludo = 'Hola';

function imprimirNombre(){
    console.log(`Nombre: ${nombre}`);
}

function asignarNombre(name){
    nombre = name;
    imprimirNombre();
};

export var greetings = saludo;
export var setName = asignarNombre;