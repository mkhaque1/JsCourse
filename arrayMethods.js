// forEach() , map(), filter()

// forEach()

const numbers = [1, 2, 3, 4, 5, 6, 23, 46, 19];

numbers.forEach((n) => {
  return n * 2; // nothing will return
});

const students = ['rahim', 'karim', 'sakib'];

students.forEach((student) => {
  console.log(student + ' is present today');
});

// map() method

const multiple = numbers.map((num) => {
  return num * 2;
});

console.log(multiple);

// real example

const products = [100, 200, 500];

const withTax = products.map((price) => {
  return price + 20; // must return something
});

console.log(withTax);

// filter() method

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers);

// real example

const allStudents = [
  { name: 'rahim', marks: 80 },
  { name: 'karim', marks: 32 },
  { name: 'sakib', marks: 44 },
  { name: 'Mk', marks: 90 },
];

const passedStudents = allStudents.filter((student) => {
  return student.marks >= 50;
});

console.log(passedStudents);
