const url = 'https://jsonplaceholder.typicode.com/posts/'
const options = {
  method: 'POST', // metodo de POST, enviando uma requisição, diferente do padrão de GET, que realiza uma requisição.
  body: '{"title": "Life is Strange Sucks"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
}


fetch(url, options)
.then(r => r.json())
.then(json => console.log(json)); // enviou o POST e criou um ID novo seguinte ao ultimo, sendo ele o 101.

// GET: Puxa informação, utilizado para pegar posts, usuários e etc.
// POST: Utilizado para criar posts, usuários e etc.
// PUT: Geralmente utilizado para atualizar informações.
// DELETE: Deleta uma informação.
// HEAD: Puxa apenas os headers.