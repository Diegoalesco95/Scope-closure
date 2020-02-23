/* Creando closures en loops: Un error común
Antes de la introducción de la palabra clave let en
JavaScript 1.7, un problema común con closures ocurría 
cuando se creaban dentro de un bucle 'loop' */

anotherFunction();

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i); // muestra el valor de i en cada ciclo
    }, 1000);
  }
};

anotherFunction();
