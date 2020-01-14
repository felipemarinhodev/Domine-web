{
	{
		{
			{
				var sera = 'Será???' // Com JS uma variavel declarada com VAR tem dois escopos possíveis.
				console.log(sera);
			}
		}
	}
}
console.log(sera);

function teste() {
	var local = 123 // variavel com o escopo de função
	console.log(local); 
}

teste();
/**
 *  Da erro, pois uma variável com VAR declarada dentro de uma função
 *  não consegue ser acessivel fora da variavel
 */
// console.log(local); 
