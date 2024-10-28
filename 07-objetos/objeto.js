const pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Passos',
  idade: 78,
  endereco: {
    rua: 'Rua Dalvo Trombeta',
    cidade: 'Pindamonhangaba',
    estado: 'PI',
    numero: 178
  },
  pizzas: ['gemgibre', 'batata-frita', 'frango catupiry'],
};

// console.log(pessoa.endereco.estado);
// console.log(pessoa['pizzas']);

pessoa.altura = 1.98;

console.log(pessoa);
