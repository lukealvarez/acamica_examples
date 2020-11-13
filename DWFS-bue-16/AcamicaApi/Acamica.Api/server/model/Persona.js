export default class Persona {
    constructor (nombre, apellido, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = id;
    }

    nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}