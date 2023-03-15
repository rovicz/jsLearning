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


