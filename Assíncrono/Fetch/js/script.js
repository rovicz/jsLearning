const doc = fetch('./doc.txt');

doc.then(resolucao => {
  return resolucao.text();
}).then((body) => {
 const conteudo = document.querySelector('.conteudo');
 conteudo.innerText = body;
})

const cep = fetch('https://viacep.com.br/ws/74367640/json/')

cep.then(r => r.json())
.then(body => {
  const cepConteudo = document.querySelector('.cep');
  cepConteudo.innerText = body.logradouro;
})

const catImage = fetch('./img/cat.jpg');

catImage.then(r => r.blob())
.then(body => {
  const blobUrl = URL.createObjectURL(body); // obteve a URL da imagem via blob.
  const imagemCat = document.querySelector('img');
  imagemCat.src = blobUrl; // alterou a source (src) da imnagem (img) do HTML para a URL da imagem obtida logo acima, sendo assim, a imagem irá aparecer.
})
