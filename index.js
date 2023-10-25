//metodo push() usado para adicionar um ou mais elementos ao final de um array
const meuArray = [1, 2, 3];
meuArray.push(4, 5);
console.log(meuArray) // [ 1, 2, 3, 4, 5 ]

// metodo pop() usado para remover o último elemento de um array e retornar esse elemento removido
const meuArray1 = [1, 2, 3];
const elementoRemovido = meuArray1.pop();
console.log(meuArray1) // [ 1, 2 ]
console.log(elementoRemovido) // 3

// metodo shift() usado para remover o primeiro elemento de um array e retornar esse elemento removido
const meuArray2 = [1, 2, 3];
const elementoRemovido2 = meuArray2.shift();
console.log(meuArray2) // [ 2, 3 ]
console.log(elementoRemovido2) // 1

// metodo unshift() usado para adicionar um ou mais elementos ao início de um array e, em seguida, retorna o novo comprimento do array
const meuArray3 = [3, 4];
const novoComprimento = meuArray3.unshift(1, 2);
console.log(meuArray3) // [1, 2, 3, 4 ]
console.log(novoComprimento) // 4

// metodo find() usado para encontrar o primeiro elemento em um array que atende a uma condição especificada por uma função de teste. Ele retorna o primeiro elemento correspondente ou "undefined" se nenhum for encontrado. 
const meuArray4 = [1, 2, 3, 4, 5];
const resultado = meuArray4.find(elemento => elemento > 2);
console.log(resultado) // 3

// metodo some() usado para verificar se pelo menos um elemento de um array atende a uma condição especificada por uma função de teste. Ele retorna "true" se pelo menos um elemento atender à condição ou "false" caso contrário.
const meuArray5 = [1, 2, 3, 4, 5];
const resultado2 = meuArray5.some(elemento => elemento > 3);
console.log(resultado2); // true

// metodo every() verifica se todos os elementos de um array satisfazem uma condição definida por uma função de teste. Ele retorna "true" se todos atenderem à condição, caso contrário, retorna "false".
const meuArray6 = [1, 2, 3, 4, 5];
const resultado3 = meuArray6.every(elemento => elemento > 0);
console.log(resultado3); // true

// metodo sort() usado para ordenar os elementos de um array em ordem alfabética ou numérica, alterando o array original.
const frutas = ['maçã', 'banana', 'uva', 'laranja', 'abacaxi'];
frutas.sort();
console.log(frutas); // [ 'abacaxi', 'banana', 'laranja', 'maçã', 'uva' ]

// metodo includes() verifica se um array contém um determinado elemento e retorna "true" se o elemento for encontrado, ou "false" caso contrário. 
const meuArray7 = [1, 2, 3, 4, 5];
const resultado4 = meuArray7.includes(3);
console.log(resultado4); // true

// metodo slice() usado para criar uma cópia rasa de parte de um array, selecionada com base em índices iniciais e finais, sem modificar o array original. Ele retorna um novo array com os elementos especificados.
const meuArray8 = [1, 2, 3, 4, 5];
const novoArray = meuArray8.slice(1, 4);
console.log(novoArray); // [ 2, 3, 4 ]

// metodo map() usado para criar um novo array, aplicando uma função a cada elemento do array original. Ele retorna um novo array com os resultados das operações.
const meuArray9 = [1, 2, 3, 4, 5];
const novoArray1 = meuArray.map(elemento => elemento * 2);
console.log(novoArray1); // [ 2, 4, 6, 8, 10 ]

// metodo filter() usado para criar um novo array contendo elementos do array original que atendem a uma condição especificada por uma função de teste. 
const meuArray10 = [1, 2, 3, 4, 5];
const novoArray2 = meuArray10.filter(elemento => elemento > 2);
console.log(novoArray2); // [ 3, 4, 5 ]

// metodo reduce() usado para aplicar uma função a acumular (somar, concatenar, etc.) os elementos de um array, resultando em um único valor. 
const meuArray11 = [1, 2, 3, 4, 5];
const resultado5 = meuArray11.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(resultado5); // 15

// metodo forEach() usado para iterar sobre os elementos de um array e executar uma função para cada elemento, sem criar um novo array. 
const meuArray12 = [1, 2, 3];
meuArray12.forEach(elemento => console.log(elemento * 2));