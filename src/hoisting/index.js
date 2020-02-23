a = 2; // Se asigna un valor
var a; // declaración de la variable a
/* Hoisting == elevar declaraciones, pasa en el momento en el
que se compila el codigo antes de ser interpretado  por el navegador*/
console.log(a); // ejecución

// ---------------------------
console.log(a);
var a = 2;

/* Hoistin solo pasa en la declaraciones y no
en las iniciaciones */

// ---------------------------

nameOfDog("Elmo");

function nameOfDog(name) {
  console.log(name);
}
