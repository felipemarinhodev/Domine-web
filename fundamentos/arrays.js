const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10
console.log(valores);
console.log(valores.length);

// Adiciona elementos no array
valores.push({id: 3}, false, null, 'teste')
console.log(valores);

console.log();
console.log(valores);
console.log(`Executando array.pop()`);
console.log(valores.pop()); // retira o ultimo elemento do array e o retorna.
console.log(valores);

console.log();
console.log(`Executando delete array`);
console.log(`valores: ${valores}`);
delete valores[0] // remove o elemento do array no indice informado, deixando ele undefined
console.log(`valores após 'delete valores[0]': ${valores}`);

console.log();
console.log(`Qual é o tipo de um array?`);
console.log(`Tipo: ${typeof valores}`);
