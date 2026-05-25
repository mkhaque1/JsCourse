// functions

// arguments (a,b)

function add(a, b) {
  return a * b; // must return something
}

let result = add(8, 2); // arguments

console.log(result);

// Tax calculator

function calcTax(price) {
  const tax = price * 0.15;
  return price + tax;
}

let total = calcTax(500);
console.log(total);

// age checker

function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(5));
console.log(isAdult(20));
