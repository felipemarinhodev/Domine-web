const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixasSemCallback = [];
for(let i in notas) {
	if (notas[i] < 7) {
		notasBaixasSemCallback.push(notas[i])
	}
}
console.log('notasBaixasSemCallback',notasBaixasSemCallback);

// Com callback
const notasBaixasComCallback1 = notas.filter((nota) => nota < 7)
console.log('notasBaixasComCallback1',notasBaixasComCallback1);

const notasMenorQue7 = (nota) => nota < 7;
const notasBaixasComCallback2 = notas.filter(notasMenorQue7)
console.log('notasBaixasComCallback2',notasBaixasComCallback2);