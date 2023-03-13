// For ... of

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas) {
  // console.log(fruta);
}

for(const char of frase) {
  // console.log(char);
}

// Spread & for ... of

const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
  btn.style.background = 'blue';
}

console.log(...buttons);

// For ... in

const carro = {
  marca: 'Honda',
  ano: 2018,
}

for(const propriedade in carro) {
 // console.log(propriedade);
} // o "in" retorna o for para propiedades não interáveis. 

// Key & Valor

const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

for(const style in btnStyles) {
  // console.log(`${style}: ${btnStyles[style]}`);
}

// Exercicios 

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const liAll = document.querySelectorAll('li');

for (const item of liAll) {
  item.classList.add('active');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const windowKey in window) {
 // console.log(`${windowKey}: ${window[windowKey]}`);
}
