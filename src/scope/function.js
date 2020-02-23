const fruits = () => {
  var fruit = "apple";
  console.log(fruit);
};

fruits();

const anotherFunction = () => {
  var x = 1;
  var x = 2; // var permite declararse reasignando su valor
  let y = 1;
  // let y = 2; // XXX let NO permite declararse reasignando su valor
  console.log(x);
  console.log(y);
};

anotherFunction();
