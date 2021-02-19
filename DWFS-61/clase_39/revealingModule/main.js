var miModulo = (function () {
    var nombre = '',
        saludo = 'Hola';

    function imprimirNombre() {
        console.log("Nombre:" + nombre);
    }

    // Función pública
    function asignarNombre(nuevoNombre) {
        nombre = nuevoNombre;
        imprimirNombre();
    }

    // Revelar accesos públicos (opcionalmente con otros nombres)
    return {
        setName: asignarNombre,
        greeting: saludo
    };
})();

miModuloRevelador.setName('Luke');
