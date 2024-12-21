function GataMae(nome, idade, raça, peso) {
  let _nome = nome;
  let _idade = idade;
  let _raça = raça;
  let _peso = peso;

  this.getIdade = function() {
    return _idade;
  }

  this.getNome = function() {
    return _nome;
  }

  this.getRaça = function() {
    return _raça;
  }
  
  this.getPeso = function() {
    return _peso;
  }

  this.descricaoMae = function() {
    console.log (`A gata ${_nome} tem ${_idade} anos, é da raça ${_raça}, e pesa ${_peso}kgs.`);
  }
}

function Filhote1(nome, idade, raca, peso, cor) {
  GataMae.call(this, nome, idade, raca, peso);

  let _cor = cor;

  this.getCor = function() {
    return _cor;
  }
}

function Filhote2(nome, idade, raca, peso, cor) {
  GataMae.call(this, nome, idade, raca, peso);

  let _cor = cor;

  this.getCor = function() {
    return _cor;
  }
}

function Filhote3(nome, idade, raca, peso, cor) {
  GataMae.call(this, nome, idade, raca, peso);

  let _cor = cor;

  this.getCor = function() {
    return _cor;
  }
}

const gataMae = new GataMae('Isabella', 3.5, 'Frajola', 4.5);
const filhote1 = new Filhote1('Café', 1, 'Preto', 5.3, 'Preto');
const filhote2 = new Filhote2('Athena', 1, 'Frajola', 4.5, 'Branco e Cinza');
const filhote3 = new Filhote3('Frederico', 1, 'Frajola', 6.8, 'Preto e Branco');

gataMae.descricaoMae();

console.log(
  "Nome: " + filhote1.getNome() +
  " - Idade: " + filhote1.getIdade() +
  " - Raça: " + filhote1.getRaça() +
  " - Cor: " + filhote2.getCor()
);

console.log(
  "Nome: " + filhote2.getNome() +
  " - Idade: " + filhote2.getIdade() +
  " - Raça: " + filhote2.getRaça() +
  " - Cor: " + filhote2.getCor()
);

console.log(
  "Nome: " + filhote3.getNome() +
  " - Idade: " + filhote3.getIdade() +
  " - Raça: " + filhote3.getRaça() +
  " - Cor: " + filhote3.getCor()
);