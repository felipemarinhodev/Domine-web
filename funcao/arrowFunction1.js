// Exemplo 1
let dobro = function (a) {
	return 2 * a;
}

dobro = (a) => {
	return 2 * a;
}

// retorno implícito
dobro = (a) => (
	2 * a
)

dobro = a => 2 * a

console.log(dobro(Math.PI));

// Exemplo 2
let ola = function () {
	return 'Olá'
}

ola = () => 'Olá'
ola = _ => `Olá ${_}` // _ isso é um parametro,
console.log(ola('lala'));
