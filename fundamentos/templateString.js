const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
// backticks = `
// O template string utiliza crase (backtick = `), ele leva em consideração quebra de linhas e tabulação.
const template = `
	Olá
	${nome}!
`

console.log(nome);
console.log(concatenacao, template);

// expressões...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`);
