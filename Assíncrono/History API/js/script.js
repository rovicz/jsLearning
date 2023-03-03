window.history.pushState(null, null, 'index.html') // altera a URL, porém somente visualmente, mesmo que a página "não exista".

window.addEventListener('popstate', () => {
  console.log('Teste da Página.')
}) // o popstate só se aplica quando o pushState existe.

const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'Carregando';
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.tile= newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
  fetchPage(window.location.href);
})

links.forEach(link => {
  link.addEventListener('click', handleClick)
})