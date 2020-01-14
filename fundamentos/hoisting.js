//Hoisting = içamento

console.log('a =', a); // undefined
var a = 2;
console.log('a =', a); // 2

// O codigo acima vai ser transformado para:
/**
			 var a // a sofreu o hoisting, variavies são declaras inicialmente e depois segue o fluxo.
			console.log('a =', a); 
			a = 2;
			console.log('a =', a); 
 */