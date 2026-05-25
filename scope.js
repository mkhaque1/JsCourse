// scope

let name = 'mk';

// global scope : you can access from any where

function showName() {
  console.log(name);
}

showName();

// local scope : you can define varrible inside function , not accessible outside

function test() {
  let secret = '123456';
}

console.log(name); // global scope
console.log(secret); // local scope
