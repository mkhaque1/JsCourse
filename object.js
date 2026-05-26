// object --> key-value pair --> data ke sajano

const example = {}; // empty object

const person = {
  // key : value
  name: 'MK',
  age: 30,
  city: 'dhaka',
  isMarried: true,
  country: 'Germany',
};

console.log(person.name);

// dot notation way
console.log('my name is ' + person.name + ' and my age is ' + person.age);

// bracket notation
console.log('my name is ' + person['name'] + ' and my age is ' + person['age']);

person.age = 25;

person.car = 'BMW'; // add any new property in a object

delete person.age; // delete any property

let check = 'name' in person; // if you to check any Key in a object

console.log(check);

// array of objects

const users = [
  //  array of objects
  {
    id: 1,
    name: 'Rahim',
  },
  {
    id: 2,
    name: 'Karim',
  },
  {
    id: 3,
    name: 'Jahid',
  },
];

console.log(users[0].name);

// loop on objects

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 50000,
  },
  {
    id: 2,
    name: 'Mobile',
    price: 20000,
  },
  {
    id: 3,
    name: 'Headphone',
    price: 2000,
  },
];

products.forEach((product) => {
  console.log(product.name);
});
