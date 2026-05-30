// click event : update
const btn = document.querySelector('#btn');
const count = document.querySelector('#count');

let value = 0;

btn.addEventListener('click', () => {
  value++;
  count.innerHTML = value;
  //   console.log(value);
});

// Background color chnage

const changeColor = document.querySelector('#colorBtn');

changeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = 'orange';
});

// random color

changeColor.addEventListener('click', () => {
  const colors = ['red', 'yellow', 'orange', 'green', 'purple', '#f0f'];

  const random = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = random;
});

// input filed changes

const input = document.querySelector('#nameInput');
const submit = document.querySelector('#submit');
const output = document.querySelector('#output');

submit.addEventListener('click', () => {
  const name = input.value; // value ta store

  if (name === '') {
    output.innerText = 'Please enter your name';
  } else {
    output.innerText = `Hello, ${name}!`;
  }
});

// dom powerfull features - classList

// Element.classList.add('active'); // add new element
// Element.classList.remove(); // remove element
// Element.classList.toggle('active'); // toggle example

const dark = document.getElementById('darkBtn');

dark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// createElement

const addElement = document.getElementById('element');
const container = document.getElementById('container');

let p; // global scope variable

addElement.addEventListener('click', () => {
  p = document.createElement('p');
  p.innerText = 'i am new paragrapgh';
  console.log(p);
  container.appendChild(p);
});

console.log(p); // local scope variable

// remove element

const deleteBtn = document.getElementById('delete');
const deleteItem = document.getElementById('text');

deleteBtn.addEventListener('click', () => {
  deleteItem.remove();
  if (p) {
    p.remove();
  }
});

// todo

const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList'); // ul parent

addBtn.addEventListener('click', () => {
  const li = document.createElement('li'); // HTMLelement create

  li.innerText = taskInput.value; // inside li value show

  taskList.appendChild(li); // element add inside parent

  taskInput.value = '';

  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  li.addEventListener('dblclick', () => {
    li.remove();
  });
});
