const usuario = {
  nome: 'Victor',
  idade: 18
}

const {nome, idade} = usuario; 
console.log(nome, idade); // retorna o nome e a idade da constante "usuario", sem a necessidade de ter que fazer o request do nome e da idade separadamente.

// Exemplo mais completo:

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

const {digitais, fisicas, digitais: {livros,videos}} = cliente.compras;
console.log(livros); // retorna os livros, mesmo que esteja dentro de outra propiedade.

// Exercicios

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, color, margin} = btnStyles;

console.log(backgroundColor, color, margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro; // Alterei cor para "bobCor"