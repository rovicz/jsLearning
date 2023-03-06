class Veiculo {
  constructor(velocidade) {
    this.veocidade = velocidade;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class carro extends Veiculo {
  acelerar() {
    super.acelerar();
    console.log('Acelerou muito rápido.')
  }

  picoDeVelocidade() {
    console.log('Carro chegou à ' + this.velocidade + 'km/h.')
  }
}

const ferrari = new carro(120);