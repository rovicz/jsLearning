// OBS: Await só deve ser utilizado previamente em partes que retornam promises.

async function puxarArtista() {
const artistResponse = await fetch('./js/dados.json');
const artistJSON = await artistResponse.json();

  document.body.innerText = artistJSON.nome; // Retona o nome do Artista
}

puxarArtista();