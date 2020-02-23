const fruits = () => {
  if (true) {
    var fruits1 = "apple"; // var es una asignacion local dentro de una funcion
    let fruits2 = "banana"; // con let solo se puede usar dentro del bloque
    const fruits3 = "kiwi"; // con const solo se puede usar dentro del bloque
    console.log(fruits2);
    console.log(fruits3);
  }
  console.log(fruits1);
};

fruits();

// ----------------------------------------

let x = 1; // global
{
  let x = 2; // local
  console.log(x);
}

console.log(x);

// --------------------------------------

var x = 1; // global
{
  var x = 2; // local pero se reasigna
  console.log(x);
}

console.log(x);

// ------------------------------------------

const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i); // muestra el ultimo valor del ciclo
    }, 1000);
  }
};

// ------------------------------------------

anotherFunction();

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i); // muestra el valor de i en cada ciclo
    }, 1000);
  }
};

anotherFunction();
