const promessa = new Promise(function(resolve, reject){
  let condicao = true;
  if(condicao) {
    setTimeout(() => {
      resolve({Marca: 'Adidas', Ano: 1949});
    }, 1000)
  } else {
    reject(Error('Um erro aconteceu.'))
  }
}); // Retorna a promessa como Resolvida, informando a string que inseri ('Resolvido!').

 const retorno = promessa
 .then(resolucao => {
  console.log(resolucao); // Verifica se a Promise é verdadeira e retorna com base no then (um protótipo direto da Promise) a informação do resolve.
  resolucao.fundador = 'Adolf Dassler'
  return resolucao // Adicionou o novo objeto.
 })
 .then(resolucao => {
  console.log(resolucao); // Log do novo Objeto
 })
 .catch(rejeitada => {
  console.log('Rejeitada pelo Catch.')
  console.log(rejeitada); // caso seja rejeitada, ira efetuar o log da string e do 'rejeitada'.
 })
 .finally(() => {
  console.log('Foi executado.') // o finally é executado independente do resultado da Promise, seja resolvida ou rejeitada.
 })

 // Promise.all

 const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário Logado.')
  }, 1000)
 })

 const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados.')
  }, 1500);
 })

 const carregouTudo = Promise.all([login, dados]); // o all forma uma Promise a partir de mais de uma Promise, ou seja, une várias em uma só.

 carregouTudo.then((resolvido) => {
  console.log(resolvido); // deu log das strings informadas nos resolve's de cada const, seja da 'login' e da 'dados'.
 })

 // Promise.race

 const carregouTudoRace = Promise.race([login, dados]);

 carregouTudoRace.then((resolvido) => {
  console.log(resolvido);
 }) // o race retorna a primeira promise a ser resolvida, sendo assim, a const 'login' foi informada no log, já que o tempo dela é menor do que a const dados (1000 < 1500).