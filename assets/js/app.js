console.log('Hello world!');

let name = 'Andrea';
console.log(name);

let surname = 'Ripamonti';
console.log(surname);

const eyeColor = 'giallo';
console.log(eyeColor);

let age;
console.log(age);
age = 33;
console.log(age);
age = null;
console.log(age);
age = '33';
console.log(age);
age = 34;

console.log('Il mio nome è ' + name + ' ' + surname + ' e ho ' + age + ' anni');

console.log(age * name);

let colors = ['rosso', 'verde', 'blu'];
console.log(colors);

const body = document.querySelector('body');
const hamBtn = document.getElementById('menu-toggle');
hamBtn.addEventListener("click", () => {
    console.log("Cliccato!");
    body.classList.toggle('menu-open');
});