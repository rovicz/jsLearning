// É possível utilizarmos o $& durante o momento da substituição para fazermos uma referência à seleção.

const regexp = /Java/g; // Procura: Java

'PHP e Java são linguagens diferentes'.replace(regexp, '--$&Script'); // PHP e --JavaScript são linguagens diferentes $& será igual à Java

// Grupo de Captura

const regexp2 = /(\w+)@[\w.]+/g; // Procura: sequência alfanumérica, seguida de @, seguido de alfanumérico ou .

'andre@email.com.br'.replace(regexp2, '$1@gmail.com'); // andre@gmail.com.


const regexp3 = /(\w+),\s(\w+)/g; // Procura: sequência alfanumérica, seguida de , seguido espaço de sequência alfanumérica.

'Fernandes, Victor'.replace(regexp3, '$2 $1'); // Victor Fernandes

// Positive Lookahead

const regexp4 = /\d(?=px)/g; // Procura: dígitos em sequência, que possuírem px, sem selecionar o px.

'2em, 4px, 5%, 2px, 1px'.replace(regexp4, 'X'); // 2em, Xpx, 5%, Xpx, Xpx

// Negative Lookahead

const regexp5 = /\d(?!px)/g; // Procura: dígitos que não possuírem px sem selecionar o restante.

'2em, 4px, 5%, 5px, 1px'.replace(regexp5, 'X'); // Xem, 4px, X%, 5px, 1px

// Positive Lookbehind

const regexp6 = /(?<=R\$)[\d]+/g; // Procura: dígitos que possuírem R$ na frente dos mesmos

'R$99, 100, 200, R$20'.replace(regexp6, 'X'); // R$X, 100, 200, R$X


