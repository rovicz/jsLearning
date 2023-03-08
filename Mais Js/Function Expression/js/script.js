somar(4,2); // Retorna a soma, já que é uma função executada direto na memória.
 /* multiplicar(4,2); // Erro, pois a constante não se encontra na memória, logo a função ainda não existe, teria que haver a execução após a const. */

function somar(a, b) {
  return a + b;
}

const multiplicar = function(a, b) {
  return a * b;
}

// Uso de Arrow Function

const quadrado = a => a * a;
quadrado(4) // 16

const areaDoTriangulo = (b, h) => (b * h) / 2 + 'cm²';
areaDoTriangulo(5,10); // 25cm²

// IIFE

(() => {
  const instrumento = 'Guitarra';
  console.log(instrumento);
})() // a IIFE isolava a function do escopo, para que não influencie o que ocorre de fora da função, sendo uma antiga alternativa de isolar, antecessor aos modulos.

// Exercicios

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99'); // Deve-se executar a constante APÓS a constante ser declarada, antes retornará um erro.

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(() => {
  const franquias = ['Golden State Warriors', 'Cleveland Cavaliers']
  console.log(franquias[0] + ' vs ' + franquias[1])
})()

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
active(function() {
  console.log('A função foi ativada.')
})