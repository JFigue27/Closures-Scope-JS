const fruits = () => {
  var fruit = "apple";
  console.log(fruit);
};

fruits();
// console.log(fruit); Esta (var fruit) fuera del scope

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // let y = 2 // LET no permite reasignar valores dentro de un mismo scope.
    
    console.log(x);
    console.log(y);
};

anotherFunction();