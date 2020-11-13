// Arrays
var alumnos = ['Lucas','Facu','Jesi'];

// Acceder
console.log(alumnos[0]);  // Lucas
alumnos[0] = 'Sebastian';
console.log(alumnos[0]); // Sebastian

// PUSH POP LENGTH

alumnos.push('Nuevo Alumno');
console.log(alumnos.length); // 4
console.log(alumnos[3]); // Nuevo Alumno

var valorQuitado = alumnos.pop();
console.log(alumnos.length); // 3
console.log(alumnos[3]); // undefined

// IndexOf
var posicion = alumnos.indexOf('Facu');
console.log(posicion);
