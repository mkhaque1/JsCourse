// object methods

const myBioData = {
  firstName: 'MK',
  lastName: 'Haque',
  age: 30,
  fullName: function () {
    return this.age + ' ' + this.firstName; // THIS KEYWORD REFER TO ITS OBJECT
  },
};

console.log(myBioData.fullName());

// Create an Object

const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};

// Stringify Object
let text = JSON.stringify(person);

console.log(text);

// small project

const calculator = {
  add(a, b) {
    return a + b;
  },
  substract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  // devide
};

console.log(calculator.add(10, 45));
console.log(calculator.substract(30, 20));
console.log(calculator.multiply(2, 5));
// console.log(calculator.square());

//  task : square()

// hints :
// power(a, b) {
//  return a ** b;
// }
