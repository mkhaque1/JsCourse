const title = document.getElementById('title');
const text = document.getElementsByClassName('text');
const text2 = document.getElementsByTagName('h1');
const title2 = document.querySelector('#title'); // for id use #
const text3 = document.querySelector('.text'); // for class use .
const bg = document.querySelector('#body');
const items = document.querySelectorAll('.item');

console.log(title);
console.log(bg);
console.log(items);

title.innerText = 'ami dom bhalobashi'; // text chnage / innerHtml change
text3.style.color = 'red'; // style
text3.style.fontSize = '55px';
text3.style.backgroundColor = '#000';
bg.style.backgroundColor = 'orange';

items.forEach((text) => {
  text.style.fontSize = '60px';
});
