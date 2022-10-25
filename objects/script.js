 // Criar objetos que se repetem  com diferentes dados a partir de um mesmo objeto (?? sla se faz sentido)

 function Marca() {
  this.nome = 'Marca';
  this.fundacao = 0;
 }

 const adidas = new Marca();
  adidas.nome = 'Adidas';
  adidas.fundacao = 1949;
 
const puma = new Marca();
 puma.nome = 'Puma';
 puma.fundacao = 1948;

 // Criei uma nova versao de "Carro", alterando os dados para a criacao de novos objetos a partir dele mesmo (provavelmente n faz sentido fora da minha cabeca)

// Pode facilitar esse processo da seguinte forma

function Usuario(nomeAtribuido, idadeAtribuida) {
  this.nome = nomeAtribuido
  this.idade = idadeAtribuida;
}

const firstUsuario = new Usuario('Victor', 17);
const secondUsuario = new Usuario('Jean', 20);

// Sendo assim, pode-se montar funcoes da seguinte forma.

function Paciente(nomeAtribuido, peso, altura, imc) {
  this.nome = nomeAtribuido;
  imc = peso / (altura * altura)
    if (imc > 18,5 && imc < 25) {
      return console.log(`O paciente ${nomeAtribuido} esta no peso ideal.`)
    }
    else if (imc > 25 && imc < 30) {
      return console.log(`O paciente ${nomeAtribuido} esta com sobrepeso.`)
    }
    else if (imc > 30 && imc < 35) {
      return console.log(`O paciente ${nomeAtribuido} esta com obesidade I.`)
    }
    else if (imc > 35 && imc < 40) {
      return console.log(`O paciente ${nomeAtribuido} esta com obesidade II (severa).`)
    }
    else if (imc > 40) {
      return console.log(`O paciente ${nomeAtribuido} esta com obesidade III (morbida).`)
    }
    else if (imc > 17 && imc < 18.5) {
      return console.log(`O paciente ${nomeAtribuido} esta com magreza leve.`)
    }
    else if (imc > 16 && imc < 17) {
      return console.log(`O paciente ${nomeAtribuido} esta com magreza moderada.`)
    }
    else if (imc < 16) {
      return console.log(`O paciente ${nomeAtribuido} esta com magreza grave.`)
    }
    
}

const Victor = new Paciente('Victor', 70, 1.80); // O paciente Victor esta no peso ideal.
const Jean = new Paciente('Jean', 87, 1.60); // O paciente Jean esta com obesidade I.
const Drikas = new Paciente('drk', 55, 1.70); // O paciente drk esta no peso ideal.
const Leo = new Paciente('Leo', 68, 1.74); // O paciente Leo esta no peso ideal.

// Number e Math

const valorQuebrado = 1811.25;
console.log(valorQuebrado.toFixed()) // Arredonda o valor para o ponto mais proximo, seja pra cima ou pra baixo (49 <= : baixo, 50 >= : cima).

const valorCorrigido = 1811; // toFixed e toString nao funcionam junto com o toLocateString.
console.log(valorCorrigido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

console.log(`o valor do produto e de ${valorCorrigido.toString()} reais.`); // Transforma o number em String.

const numbersLista = Math.max(5, 15, 20, 40, 60, 320, 3, 90); // Numero mais alto da lista.
const numbersLista2 = Math.min(5, 15, 20, 40, 60, 320, 3, 90); // Numero mais baixo da lista.
console.log(numbersLista); // 320
console.log(numbersLista2); // 3

// Array's

const sneakers1 = ['Yeezy 350 v2', 'Yeezy 700 v3'];
const sneakers2 = ['Yeezy Slide', 'Yeezy 380'];
const sneakersAll = sneakers1.concat(sneakers2); // Concat tem a function de concatenar duas (ou mais), arrrays.

console.log(sneakersAll) // Retorna as duas arrays em uma so.

// More tests

const sneakersEstoque = sneakersAll.concat('Nike Dunk Low', 'Nike Blazer Mid', 'Nike Air Jordan IV');
sneakersEstoque.includes('Yeezy Slide'); // True
sneakersEstoque.includes('Nike Air Jordan I'); // False

sneakersEstoque.slice(3); // Retorna a Array do terceiro item para frente, no caso: ['Yeezy 380, 'Yeezy 380', 'Nike Dunk Low', 'Nike Blazer Mid', 'Nike Air Jordan IV'].

// forEach

const carros = ['Honda', 'Hyundai', 'Fiat'];

carros.forEach((item, index, array) => {
  console.log(item.toUpperCase(), index, array);

});

// Map

const comidas = ['Strognoff', 'Frango Assado', 'Torta de Frango']

const comidasArray = comidas.map((item) => {
  return item.toUpperCase()

});

console.log(comidasArray[2] = 'Lasanha de Frango'.toUpperCase()); // Retornei os item's em upperCase e alterei o segundo item da array outro nome, alterando o objeto dentro da array.

// Ou seja, caso queira uma Array nova a partir de outra Array, deve-se usar o Map, caso nao, apenas utilise o forEach.

// Reduce

const aulas = [
{
  nome: 'HTML 1',
  min: 15
},
{
  nome: 'CSS 1',
  min: 20
},
{
  nome: 'JS 1',
  min: 25
},
{
  nome: 'PHP 1',
  min: 30
},
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {});

// Some

const frutas = ['Manga', 'Ameixa', 'Uva'];

const temUva = frutas.some((item) => {
  return item === 'Ameixa';
}); // Retorna True, ja que o item possui o objeto 'Ameixa'.

// Every

const bebidas = ['Cerveja', 'Energetico', 'Refrigerante'];

const everyBebidas = bebidas.every((bebidas) => {
  return bebidas;
}) // Retorna True ou False caso um item da array seja uma string vazia ou nao, ja que uma string vazia caracteriza o valor boleano de falso, sendo assim, o every e o contrario do Some.


// Function

const perimetro = new Function('lado', 'return lado * 4'); // Retorna uma Função normal, no caso calculando o perimetro de uma área.

// Call

const marcasDeCarros = ['Ford', 'Fiat', 'Uno']
const marcasDeCarros2 = ['Honda', 'Hyundai']

marcasDeCarros.forEach.call(marcasDeCarros2, (item) => {
  console.log(item) // Altera e considera tudo aquilo que vem após o call, sendo assim, o marcasDeCarros foi alterado para marcasDeCarros2.
})