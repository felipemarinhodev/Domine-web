// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
// Toda função js retorna algo, se não for especificado será undefined.
// não função tradicional o bloco é obrigatório.
function fun1() {}

// Armazenar em uma variável
const fun2 = function() {}

// Armazenar em uma array
const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3));

// Armazenar em uma atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa'};
console.log(obj.falar());

// Passar funcão como param
function run(fun) {
	fun();
}

run(function () { console.log('Executando...') });

// Um função pode retornar/conter uma função
function soma(a, b) {
	return function(c) {
		console.log(a + b + c);
	}
}
// Funciona as linhas abaixo.
// const resultado = soma(2, 3)(4);
// console.log('resultado', resultado);

soma(2, 3)(4); // forma 1 de chamar uma func que retornar outra func
const cincoMais = soma(2, 3); // forma 2 de chamar uma func que retornar outra func
cincoMais(4); // forma 2 de chamar uma func que retornar outra func