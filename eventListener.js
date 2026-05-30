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
