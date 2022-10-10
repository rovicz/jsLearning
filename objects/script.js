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

console.log(`o valor do produto e de ${valorCorrigido.toString()} reais.`) // Transforma o number em String.

const numbersLista = Math.max(5, 15, 20, 40, 60, 320, 3, 90); // Numero mais alto da lista.
const numbersLista2 = Math.min(5, 15, 20, 40, 60, 320, 3, 90); // Numero mais baixo da lista.
console.log(numbersLista); // 320
console.log(numbersLista2); // 3