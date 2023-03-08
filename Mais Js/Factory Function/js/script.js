function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    text, 
    element
  }
}

const btnComprar = createButton('Comprar'); // Retorna um botão com texto de "Comprar".
const btnVender = createButton('Vender'); // Retorna um botão com texto de "Vender".

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  return Object.freeze({
    nome,
    sobrenome,
    andar,
    nadar,
  }); // o freeze impede que o objeto seja alterado, assim evitando que o usuário altere e manipule.
}

const designer = criarPessoa('Victor', 'Fernandes');

// Exercicio

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach(elements => {
      elements.style.display = 'none';
    });
    return $$(selectedElements);
  }

  function show() {
    elements.forEach(elements => {
      elements.style.display = 'initial';
    });
    return $$(selectedElements);
  }
  
  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventlistener(onEvent, callback);
    });
    return $$(selectedElements);
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
  }


  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  }
}

const btns = $$('button');