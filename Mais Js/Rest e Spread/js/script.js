function perimetroForma(lado, totalLados, ...listaArgumentos) {
  console.log(listaArgumentos);
  return lado * totalLados;
}

perimetroForma(10, 5, 10, 'Olá, isso é um teste.');

// Rest

function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou.')
  });
}

anunciarGanhadores('Pedro', 'Marta', 'Maria');

// Operador Spread

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes]; // retorna uma Array como "['Banana', 'Uva', 'Morango', 'Pizza', 'Cenoura', 'Batata']".

// Spread Argument

const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

const listaNumeros = [1,13,21,12,55,2,3,43];
const numeroMaximoSpread = Math.max(...listaNumeros); // 33 assim como o outro exemplo, porém de forma mais simples e usando a spread.

// Array Transform

const btns = document.querySelectorAll('button');
const btnsArray = [...btns]; // O uso de spread facilita a transformação de uma nodeList para uma Array.

const frase = 'Isso é JavaScript';
const fraseArray = [...frase]; // O uso de spread facilita a transformação de uma string para uma Array.

// Exercicios

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
} 

const redButton = createButton();

// Utilize o método push para inserir as frutas ao final de comidas.
const frutasExerc = ['Banana', 'Uva', 'Morango'];
const comidasExerc = ['Pizza', 'Batata'];

comidasExerc.push(...frutasExerc);
console.log(comidasExerc) // retornou "frutasExerc" para o final da Array, pós "comidaExerc".

