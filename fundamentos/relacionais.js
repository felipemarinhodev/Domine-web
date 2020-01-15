console.log('01)', '1' == 1); // compara com valor não tipo
console.log('02)', '1' === 1); // compara com valor e o tipo
console.log('03)', '3' != 3); // compara com valor não tipo
console.log('04)', '3' !== 3); // compara com valor e o tipo

console.log('05)', 3 < 2); 
console.log('06)', 3 > 2); 
console.log('07)', 3 <= 2); 
console.log('08)', 3 >= 2); 

const d1 = new Date(0); // new Date(0) = 1970-01-01T00:00:00.000Z
const d2 = new Date(0);
// Compara os endereços de memorias por isso da false;
console.log('09)', d1 === d2); 
console.log('10)', d1 == d2); 

// Compara o valor em tempo por isso é igual = true
console.log('11)', d1.getTime() === d2.getTime()); 
console.log('12)', undefined == null); 
console.log('13)', undefined === null); 

