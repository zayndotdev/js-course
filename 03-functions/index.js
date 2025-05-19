// what is hight order function
// hight order function is a function that takes another function as an argument.

// what is callback function
// callback function is a function that is passed as an argument to another function.

const printResult = (result) => console.log(`\nResult: ${result}`);

const add = (a, b, cb) => cb(a + b);
const subtract = (a, b, cb) => cb(a - b);

// calling add
add(5, 3, printResult); // Output: Result: 8
// calling subtract
subtract(10, 4, printResult); // Output: Result: 6
