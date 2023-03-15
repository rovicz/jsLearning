// RegExp Constructor

const regexp = /\w+/gi;

const regexpObj1 = new RegExp('\\w+', 'gi'); // Se passarmos uma string, não precisamos dos // e devemos utilizar \\ para meta characters, pois é necessário escapar a \ especial. As Flags são o segundo argumento
const regexpObj2 = new RegExp(/\w+/, 'gi');

'JavaScript Linguagem 101'.replace(regexpObj1, 'X'); // X X X

// Exemplo complexo:
const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');

// Propiedades

const regexp2 = /\w+/gi;

regexp2.flags; // 'gi'
regexp2.global; // true
regexp2.ignoreCase; // true
regexp2.multiline; // false
regexp2.source; // '\w+'

// RegExp.Test()

const regexp3 = /Java/g;
const frase = 'JavaScript e Java';

// O método test() verifica se existe ou não uma ocorrência da busca.
regexp3.lastIndex; // 0
regexp3.test(frase); // true
regexp3.lastIndex; // 4
regexp3.test(frase); // true
regexp3.lastIndex; // 17
regexp3.test(frase); // false
regexp3.lastIndex; // 0
regexp3.test(frase); // true (Reinicia)
regexp3.lastIndex;  // 4

// Test() em Loop

const regexp4 = /Script/g;
const frase2 = 'JavaScript, TypeScript e CoffeeScript';

let i = 1;
while(regexp4.test(frase2)) {
  console.log(i++, regexp4.lastIndex);
} // 1 10 - 2 22 - 3 37

// RegExp.Exec()

const regexp5 = /\w{2,}/g;
const frase3 = 'JavaScript, TypeScript e CoffeeScript';

regexp5.exec(frase3); // ["JavaScript", index: 0, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined] 
regexp.exec(frase); // ["TypeScript", index: 12, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined] 
regexp.exec(frase); // ["CoffeeScript", index: 25, input: "JavaScript, // TypeScript e CoffeeScript", groups: undefined] 
regexp.exec(frase); // null
regexp.exec(frase); // ["JavaScript", index: 0, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined] - (Reinicia) 

// Loop com Exec()

const regexp6 = /\w{2,}/g;
const frase4 = 'JavaScript, TypeScript e CoffeeScript';
let regexpResult;

while((regexpResult = regexp6.exec(frase4)) !== null) {
  console.log(regexpResult[0]); // Para no momento que acha o null.
}

// String.Match() 

const regexp7 = /\w{2,}/g;
const regexpSemG = /\w{2,}/;
const frase5 = 'JavaScript, TypeScript e CoffeeScript';

//O match() é um método de strings que pode receber como argumento uma Regexp.
frase5.match(regexp7); // ['JavaScript', 'TypeScript', 'CoffeeScript']

frase5.match(regexpSemG); // ["JavaScript", index: 0, input: "JavaScript, TypeScript e CoffeeScript", groups: undefined]

// String.Split()

const frase6 = 'JavaScript, TypeScript, CoffeeScript';

frase6.split(', '); // ["JavaScript", "TypeScript", "CoffeeScript"]
frase6.split(/Script/g); // ["Java", ", Type", ", Coffee", ""]

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

// O split serve para distribuirmos uma string em uma array, quebrando a string no argumento que for passado.
tags.split(/(?<=<\/?)\w+/g).join('div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>

// String.Replace()

const tags2 = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

// O método replace() é o mais interessante por permitir a utilização de funções de callback para cada match que ele der com a Regexp.
tags2.replace(/(?<=<\/?)\w+/g, 'div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>

// Callback

const regexp9 = /(\w+)(@[\w]+)/g;
const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`

emails.replace(regexp9, function(...args) {
  console.log(args);
  if(args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if(args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if(args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return 'x';
  }
}); // joao@hotmail.com.br / marta@gmail.com.br / bruna@outlook.com.br