# Desafio Target Sistemas

Neste desafio, você encontrará uma série de questões e problemas para resolver.

## Questão 1 - Valor da variável SOMA

Dado o trecho de código fornecido:

```javascript
let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k++;
  soma += k;
}

// Ao final do processamento, qual será o valor da variável SOMA?
console.log(soma);
soma = 91;
```
## Questão 2 - Sequência de Fibonacci

Escreva um programa em Python que, ao ser informado um número, calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não à sequência.

```javascript
let fibonacci = [0, 1];
let i = 0;
const number = 1090;

do {
  fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
  i++;
  console.log(fibonacci);
} while (fibonacci[i + 1] <= number);

if (fibonacci.includes(number)) {
  console.log("O numero informado pertence a sequencia de fibonacci");
} else {
  console.log("O numero informado não pertence a sequencia de fibonacci");
}

```
