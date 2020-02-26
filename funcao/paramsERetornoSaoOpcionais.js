function area(largura, altura) {
	const area = largura * altura;
	if (area > 20) {
		console.log(`Valor acima do permitido: ${area}m2.`);
	} else {
		return area;
	}
}

// tudo funciona!!!
console.log(area(2,2)); // passando a quantidade de parametros esperados
console.log(area(2)); // passando menos parametros esperados
console.log(area());  // Não passando parametros
console.log(area(2,2, 12, 33, 44));  // passando mais parametros esperados do que o esperado
console.log(area(5,5));  // não recebendo o retorno.

