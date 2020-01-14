var numero = 1 // Tem escopo global e de função.
{ // inicia do bloco
	let numero = 2 // o let define q a variavel tem os escopos: 1) Global 2) Função 3) bloco
	console.log('dentro =', numero)
} // final do bloco
console.log('fora =', numero)