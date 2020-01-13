const prod1 = {} // forma literal de definir um objeto
// Em JS um objeto é uma coleção de chave e valor.
prod1.nome = 'Celular ultra mega'
prod1.preco = 4988.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço.

console.log(prod1);

const prod2 = {
	nome: 'Camisa Polo',
	preco: 79.90,
	obj: {
		blabla: 1,
		obj: {
			blabla: 2
		}
	}
}

console.log(prod2);
