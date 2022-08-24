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
console.log(`A(s) linguagem(ns) ativa(s) no navegador é(são) ${linguagensAtivas}.`)

// Retorne a largura da janela
const largura = window.innerWidth;
console.log(`A largura da janela é de ${largura}px.`)