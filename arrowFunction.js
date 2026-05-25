// arrow function

// old -> letter , modern --> whatsapp

// arguments (a,b)

// normal function

function add(a, b) {
  return a + b;
}

// remove function step 1

// const arrowFunction = (a, b) => {
//   return a + b;
// };

// step 2 single line // 3. many parameter

const arrowFunction = (a, b, c) => a + b + c;

// 1. no parameter

const hello = () => 'hello';
console.log(hello());

// 2. 1 parameter
const double = (n) => n * 2;
console.log(double(5));
console.log(arrowFunction(4, 5, 6));

// 3. many parameter
