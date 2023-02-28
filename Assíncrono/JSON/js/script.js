fetch('./dados.json')
.then(r => r.json())
.then(json => {
  json.forEach(materia => {
    console.log(materia.aula) // Retorno o "aula" do JSON.
  })
})

const lisJSON = '{"id": 1, "nome": "Life is Strange", "nota": "10/10"}';
const lisOBJ = JSON.parse(lisJSON); // o parse transforma um texto JSON em um objeto javascript.

console.log(lisOBJ) // retornou como um objeto javascript.

const pokeOBJ = {
  nome: 'Pokémon X & Y',
  data: 2013,
  nota: 8/10
}

const pokeJSON = JSON.stringify(pokeOBJ); // transforma um objeto javascript em um texto JSON.

console.log(pokeJSON) // retornou como um texto JSON.