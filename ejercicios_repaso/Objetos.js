// Objetos basicos
// Herencia
// Polimorfismo


class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar (){
        return 'yo soy un ' + this.nombre;
    }

    cambiarNombre(nombreNuevo) {
        this.nombre = nombreNuevo;
    }
}


class Perro extends Animal {
    hablar ()  {
        return "guauuuuuu";
    }
}

class Gato extends Animal {
    hablar () {
        return "miauuuuu";
    }
}

var gato = new Gato('Michi');
var perro = new Perro('Firulais');

var listaDeAnimales = [gato, perro];

for (var i = 0; i < listaDeAnimales.length; i++) {
    console.log (listaDeAnimales[i].nombre + ' dice: ' + listaDeAnimales[i].hablar());
}

gato.cambiarNombre('sora');
perro.cambiarNombre('romeo');

for (var i = 0; i < listaDeAnimales.length; i++) {
    console.log (listaDeAnimales[i].nombre + ' dice: ' + listaDeAnimales[i].hablar());
}

