let a = 7;
let b = 94;

console.log("o valor original de a, é: " + a);
console.log("o valor original de b, é: " + b);

// trocar o valor das variáveis acima, e imprimir no console log os novos valores.

b = 7;
a = 94;

console.log("o novo valor da variável a, é: " + a);
console.log("o novo valor da variável b, é: " + b);

// outra opção de resolução é criando uma var temporaria como abaixo:

/*

let temp = a;
a = b;
b = temp;

outra opção é

[a, b] = [b, a]

*/