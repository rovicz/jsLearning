var nome1 = 'Victor';
var idade1 = 17;
var cidade1 = 'Goiânia';

var apresentação1 = 'olá, meu nome é', apresentação2 = 'e tenho', apresentação3 = 'anos.'

console.log(apresentação1, nome1, apresentação2, idade1, apresentação3)

// ATividade 01 - Teste #1

var nome = 'Victor';
var idade = 17;
var comidaFavorita;
var comidaFavorita = 'Strogonoff';

var var1, var2, var3, var4, var5;

// Teste 2 - Strings Diferentes

var nome2 = 'Eliene';
var idade2 = 46;

console.log(`${nome2} tem ${idade2} de idade.`)

// Atividade 02 - Teste #2

var nomeCachorro = 'Max';
var idadeCachorro = 'morreu à 5 anos';
var idade3 = 17;

var meuNome = 'Victor';
var meuSobrenome = 'Fernandes';
console.log(meuNome + ' ' + meuSobrenome);

var time = "\It's\ time ";
console.log (time);

console.log (typeof meuNome);

// Teste 3 - Numeros e Sinais

var indio = 'Ygor', flechas = 50, dias = 7;

console.log (`O indigena ${indio} dispara cerca de ${flechas} por dia, algo que na semana passa ao número de ${flechas * dias}.`)

// Atividade 03 - Numerais e Sinais 

var total = 10 + 5 * 2 / 2 + 20; 
// Total = 35.

var naN1 = '90s' * 20;
var naN2 = '00s' / 22;
console.log(naN1, naN2)

var incremento = 5
console.log(++incremento)

var numero = '80';
var unidade = 'kg';
var peso = numero + unidade;
var pesoPorDois = (`${numero / 2}${unidade}`);
console.log(pesoPorDois)


// Teste 4 - Brincando com JS

var individuo = 'Milly', bananaTotal = 50, bananaDiarias = 5, dias = 7;


console.log(`A garota ${individuo} leva cerca de ${[bananaTotal / bananaDiarias] / dias} semanas para comer todas as bananas.`);

// Teste 5 - Boolean (if, else / true, false)

var covid = false; //True = Positivado.
var nãoSucedido = false; //True = Não Sucedido.

// Ambas False/True = Negativado/Positivado (A Primeira ja define e não conta a segunda).
// Covid false e nãoSucedido true = else if entra em ação e informa o texto.

if (covid) {
  console.log('Positivo, se encontra contaminado pela covid-19.');
} 
  else if(nãoSucedido) {
  console.log('Teste não sucedido, favor realizar novamente.');
}
  else {
  console.log('Negativo, não se encontra contaminado pela covid-19.');
}

var marca = 'Adidas'; // Caso a String esteja vazia, o mesmo valida o else e informa o texto do mesmo.

if (marca) {
  console.log(marca);
} else {
  console.log('Marca não Listada.');
}

// !! verifica se uma expressão é Truthy ou Falsy. (!= ou !== verifica se uma string é diferente ou não).
// == verifica se uma expressão é Truthy ou Falsy (=== funciona como uma comparação máxima e restrita).

// Teste 6 - Switch's (O switch verifica um valor diante diversos valores diferentes).

var monsterFavorito = 'Manga';

switch (monsterFavorito) {
  case 'Padrão':
    console.log ('O meu favorito é o Padrão.');
  break;

  case ('Limão'):
    console.log('o meu favorito é o de Limão');
  break;

  case ('Laranja'):
    console.log ('O meu favorito é o de Laranja.');
  break;

  default:
    console.log('Nenhum dos citados é o meu Monster preferido.');
}

// Teste 7 - Funções

function belleBocas(horas, pessoas) {

  const belleBeijos = (horas * 60) / pessoas;
  console.log (`Belle Beijou cerca de 1 pessoa(s) a cada ${belleBeijos} minuto(s).`);
}

belleBocas(6, 72) // 5 ( 1 a cada 5 min);

function belleTempoBeijo(horas, pessoas, beijosProcurando) {

  const beijosMedia = [(horas * 60) / pessoas] - beijosProcurando;
  console.log (`Belle teve uma média de ${beijosMedia}min por beijo, sendo ${beijosProcurando}min de procura por um pretendente.`);
}

belleTempoBeijo(6, 72, 3) // Se ela gastar 3min procurando alguém para beijar, ela tem cerca de 2min de média por beijo. 

// Teste 7.1 - Typeof

function nomeDoAluno(nome) {

  if (typeof nome !== 'string') {
  return 'Insira um nome.'
    } else if(nome) {
  return `O nome do aluno é ${nome}.`
    } else {
  return false;
    }

}

console.log (nomeDoAluno('Victor'))
console.log (nomeDoAluno(3123123))

// Teste 8 - Objetos

var aluno = {
  nome: 'Victor',
  idade: 17,
  cidade: 'Goiânia',
  estudante: true,
}

aluno.nome // Victor
aluno.idade // 17

var triangulo = {
  base: {},
  altura: {},
    area: function(base, altura) {
    return (base * altura) / 2;
    },

  ladoA: {},
  ladoB: {},
  ladoC: {},
  perimetro: function(ladoA,ladoB,ladoC) {
    return ladoA + ladoB + ladoC;
  },
}

triangulo.area (10, 5) // 25
triangulo.perimetro (10, 5, 5); // 20


// Atividade 04 - Arrays


// Criar uma Array com as  conquistas do Brasil nas Copas do Mundo de Futebol.
var brasilCopas = [1959, 1962, 1970, 1994, 2002];

// Crie um Loop para mostrar os anos em que o Brasil foi Campeão da Copa do Mundo de Futebol.
for (var i = 0; i < brasilCopas.length; i++) {
  console.log('O Brasil ganhou a copa de ' + brasilCopas[i] + '.');
}

//Interaja com as Frutas e pare até chegar em Pera.
var frutas = ['Banana', 'Melancia', 'Maça', 'Pera', 'Uva']

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera') {
    break
  }
}

// Coloque a última fruta da array acima de uma variável, sem remover o mesmo do array.

var ultimaFruta = frutas[frutas.length - 1];

// Atividade 05 - Atribuição e Ternário

// Some 500 ao valor do scroll abaixo, atribuindo um novo valor ao scroll.

var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variável "darCredito", caso o cliente possua carro e casa e false caso o contrário.

var possuiCarro = true;
var possuiCasa = true;

var darCredito;
darCredito = (possuiCarro && possuiCasa) ? 'Autorizado a liberação do Crédito.' : 'Não autorizado a liberação do Crédito.'
console.log(darCredito);

// Atividade 06 - Escopo

// Formula para calcular + 5 e * 5.

const cinco = 5;

function somarCinco(x) {
  return x + cinco;
}

function multiCinco(x) {
  return x * 5;
}

console.log('O resultado da soma é ' + somarCinco(5))
console.log('O resultado da multiplicação é ' + multiCinco(5))