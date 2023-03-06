/* function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function() {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
} */

class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;

    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());

    return targetElement;
  }
  static blueButton(text) {
    return new Button(text, 'blue', 'white')
  }
} // o Class facilita a criação de objetos, funcionando como um syntactical suggar, fazendo a mesma função do código anterior, porém de outra forma.

const botaoAZul = Button.blueButton('Clique para Comprar!');

const blueButton = new Button('Comprar', 'blue', 'white');

console.log(blueButton.appendTo('body'));

// Button 2 - Utilizando uma forma diferente

class Button2 {
  constructor(options) {
    this.options = options;
  }
}

const optionsRed = {
  backgroundColor: 'red',
  text: 'Clique',
  color: 'white'
}

const redButton = new Button2(optionsRed)

// Static

class Button3 {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement2 = document.createElement('button');
    buttonElement2.innerText = text;
    buttonElement2.style.background = background;
    return buttonElement2;
  }
}

const optionsGreen = {
  backgroundColor: 'Green',
  text: 'Clique',
  color: 'white'
}

const greenButton = new Button2(optionsGreen);
const greenButtonStatic = Button3.createButton('Clique', 'Green')
