const frase = 'Eu gosto muito de Abacate.'
const regexp = /c/

const fraseNova = frase.replace(regexp, 'k');
console.log(fraseNova); // retorna a alteração com o replace utilizando com base o regexp.

// Literal

// Procura: J seguido de a, v e a
const regexp2 = /Java/;

'JavaScript'.replace(regexp2, 'Type'); // Retorna "TypeScript".

// Flag: G (Global)
const regexp3 = /i/g;

'Mississipi'.replace(regexp3, 'e'); // Messessepe, a flag G significa global, sendo assim, ele procura por TODAS as letras/palavras informadas e busca realizar a alteração ou split.

// Flag: I (Ignora Maiúsculas e Minúsculas)

const regex4 = /Pe/gi;

'Perdeu perdido'.replace(regex4, 'Ba'); // "Bardeu Bardido", a flag I significa que ele deve procurar todas as letras/palavras ignorando a regra de maiúsculas e minúsculas.

// Character Class

const regexp5 = /[ai]/gi;

'JavaScript'.replace(regexp, 'u'); // JuvuScrupt, ao colocar os caracteres entre colchetes, é definindo uma classe. Sendo assim, a classe acima irá procurar por A ou I.

// Character Class & Special Characters

const regexp6 = /[-.]/g; // Procurando por - ou . em escala Global.

'111.222-333-44'.replace(regexp6, ''); // 11122233344, alterou os - por vazio, fazendo assim uma number só.

// One or Other

const regexp7 = /Bra[sz]il/g; // Procura: B, seguido de r, a, seguido de s ou z, seguido de i, l

'Brasil é com z: Brazil'.replace(regexp7, 'Prazer'); // Prazer é com z: Prazer, Combine caracteres literais com uma classe para buscarmos variações.

// A to Z

const regexp8 = /[a-z]/g; // Busca por itens de a à z

'JavaScript é a linguagem.'.replace(regexp8, '0'); // J000S00000 é 0 000000000.

const regexp9 = /[a-zA-Z]/g; // Busca por itens de a à z e A à Z

'JavaScript é a linguagem.'.replace(regexp9, '1'); // 1111111111 é 1 111111111.

const regexpNumero = /[0-9]/g; // Busca por números de 0 à 9

'123.333.333-33'.replace(regexpNumero, 'X'); // XXX.XXX.XXX-XX.

// To Deny

const regexp10 = /[^a-z]/g; // Procura: tudo que não estiver entre a e z

'Brasil é com z: Brazil'.replace(regexp10, ' '); // rasil   com z   razil.

// Dot

const regexp11 = /./g; // Procura: todos os caracteres menos quebra de linha

'JavaScript é a linguagem.'.replace(regexp11, '0'); // 0000000000000000000000000.

// Deny Special Characters

const regexp12 = /\./g; // Procura: todos os pontos.
const regexpAlternativa = /[.]/g; // Procura: todos os pontos, mas de uma forma alternativa.

'999.222.222.11'.replace(regexp12, '-'); // 999-222-222-11.

// Quantificador 

const regexp13 = /aaaa/g; // Procura: 4 a's seguidos.
const regexpAlt = /a{4}/g; // Procura: 4 a's seguidos, porém de forma alternativa.

'Vaaaai ali por favor.'.replace(regexp13, 'a'); // Vai ali por favor.  

// Quantificador Min & Max

const regexp14 = /\d{2,3}/g; // Procura: dígitos seguidos de 2 à 3.

'222.333.222.42'.replace(regexp14, 'X'); // X.X.X.X

const regexpLetras = /\w{1,}/g; // Procura: letras seguidos com 1 caracter ou mais.

'A melhor linguagem é JavaScript'.replace(regexpLetras, 'X'); // X X X é X

// +, *, ? e |

const regexp15 = /\d+/g; // Procura: dígitos em ocorrência de um ou mais

'222.333.222.42'.replace(regexp, 'X'); // X.X.X.X

const regexpLetras2 = /d\w+/g; // Procura: Começa com d, seguido por uma ou mais letras.

'Dígitos, dados, desenhos, Dito, d'.replace(regexpLetras2, 'X'); // Dígitos, X, X, Dito, d

const regexp16 = /d\w*/g; // Procura: Começa com d, seguido por zero ou mais letras.

'Dígitos, dados, desenhos, Dito, d'.replace(regexp16, 'X'); // Dígitos, X, X, Dito, X

const regexp17 = /regexp?/g; // Procura: Por regex com p opcional

'Qual é o certo, regexp ou regex?'.replace(regexp17, 'Regular Expression'); // Qual é o certo, Regular Expression ou Regular Expression?

const regexp18 = /java|php/gi; // Procura: java ou php (case insensitive)

'PHP e Java são linguagens diferentes'.replace(regexp18, 'X'); // X e X são linguagens diferente

// Flag M

const regexp19 = /\w+$/gm; // Procura: sequência de alfanuméricos no final da linha.

`andre@origamid.com
contato@origamid.com`.replace(regexp19, 'X'); // andre@origamid.X / contato@origamid.X

const regexp20 = /^\w+/gm; // Procura: sequência de alfanuméricos no início da linha.

`andre@origamid.com
contato@origamid.com`.replace(regexp20, 'X'); // X@origamid.com














