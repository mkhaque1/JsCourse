// array : kind of list , example : bajarer list ki ki kinte hobe all items

const bazar = []; // empty array

const list = ['alu', 'piyaj', 'morich', 'bla bla']; // index start with 0, 1, 2.....

const number = [1, 3, 5, 7];
const mixed = ['js', 2026, true];

// length :

const item = list.length;

console.log(item);

// array method toString()

// let myList = mixed.toString();

// push() method add in last item

list.push('khejur');
list.push('oil');

// pop() delete from last item
list.pop();
list.pop();

// unshift() add in first item
list.unshift('oil');
list.unshift('khejur');

// shift remove in first item
list.shift();
list.shift();
console.log(list.toString());
