const escola = "Coder";

console.log(escola);

//Vai retornar a letra que esta no indice 4 da string = 'r'
console.log(escola.charAt(4));
console.log(escola.charAt(5)); // não gera erro, mas não tras resultado.
console.log(escola.charCodeAt(3)); // retorna o valor da string na tabela ASCII 'e = 101'
console.log(escola.indexOf('e')); // retorna o index da posição onde a letra se encontra.
console.log(escola.substring(1)); // retorna todos os caracteres apartir da posição 1, incluido ele.
console.log(escola.substring(0, 4)); // retorna os caracteres apartir da posição 0, incluido ele, até a posição 4, não incluindo ela.

console.log('Escola '.concat(escola).concat("!")); // Concatenação de strings
console.log('Escola ' + escola +"!"); // Concatenação de strings
console.log(escola.replace('e', '3')); // retorna a string substituindo 'e' por '3' = Cod3r
console.log('Ana, Maria, Pedro'.split(',')); // vai retorna a cadeia de string em formato de array, nesse caso quando ele encontra uma virgula ele transforma em um item do array. Aceita Regex
// console.log('Ana, Maria, Pedro'.replace(', ', ',').split(','));



// console.log(escola.charAt(4));