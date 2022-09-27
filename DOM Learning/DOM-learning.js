// Manipulando o DOM


const pSelecionado = document.querySelector('.clique');

function callbackP() {
 console.log(`Você clicou em "${pSelecionado.innerText}".`);
}

pSelecionado.addEventListener('click', callbackP);

// Atividade 01 

// Retorne o URL da pagina utilizando window
const hrefDaPagina = window.location.href
console.log(`O URL da página é ${hrefDaPagina}.`)

// Selecione o primeiro elemento da página que possua a classe ativo.
const elementoAtivo = document.querySelector('.ativo');
console.log('O elemento está ativo!')

// Retorne as linguagens do navegador
const linguagensAtivas = navigator.language;
console.log(`A(s) linguagem(ns) ativa(s) no navegador é(são) ${linguagensAtivas}.`);

// Retorne a largura da janela
const largura = window.innerWidth;
console.log(`A largura da janela é de ${largura}px.`);

// Atividade 02

// Retorne todas as imagens do site.
const imgAll = document.querySelectorAll('img');
console.log(`A quantidade de imagens no site é ${imgAll.length}.`);

// Retorne no console apenas imagens que possuem o nome de imagem.
const onlyImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(`A quantidade de imagens com o nome de "imagem" é ${onlyImagens}.`)

// Selecione os links internos (onde o href começa com #).
const linkInterno = document.querySelectorAll('img[href^="#"]');
console.log(`O link interno é o ${linkInterno}.`)

// Selecione o último p do site.
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[--ultimoP.length]);

// Atividade 03

// Mostre no console cada parágrafo do site.
const paragrafosAll = document.querySelectorAll('p')

paragrafosAll.forEach((item) =>  {
  console.log(item);
});

// Mostre o texto dos parágrafos no console.
paragrafosAll.forEach((item) =>  {
  console.log(item.innerText);
});

const testediv = document.querySelector('.testdiv');
const h3TestDiv = testediv.querySelector('.h3-testdiv').innerHTML;

console.log(h3TestDiv);