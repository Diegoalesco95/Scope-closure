const helloWorld = () => {
  const hello = "Hello, world";
  console.log(hello);
};

helloWorld();
console.log(hello); // No es posible acceder a la variable local

// Ámbito léxico

var scope = "I am Global!";

const functionScope = () => {
  var scope = "I am just a local"; // No se toma ni se reasigna la variable global
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope(); // Ejecuta la funcion con su variable local

console.log(scope); // Se ejecuta con la variable global
