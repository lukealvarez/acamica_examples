let nombre = '';
const saludo = 'Hola';

function imprimirNombre(){
    console.log(`Nombre: ${nombre}`);
}

exports.setName = function asignarNombre(name){
    nombre = name;
    imprimirNombre();
};

exports.greetings = saludo;
