// There are three ways to write a user defined function

// 1. Using a function declaration
function add(a, b) {
  return a + b;
}

// 2. Using a function expression
var add = function (a, b) {
  return a + b;
};

// 3. Using an arrow function
var add = (a, b) => a + b;
// You can call the function like this
console.log(add(1, 2)); // Outputs: 3
