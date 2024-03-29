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

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

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

## Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, **9**

b) 2, 4, 8, 16, 32, 64, **128**

c) 0, 1, 4, 9, 16, 25, 36, **49**

d) 4, 16, 36, 64, **100**

e) 1, 1, 2, 3, 5, 8, **13**

f) 2, 10, 12, 16, 17, 18, 19, **20**

## Questão 4 - Interruptores e Lâmpadas

Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

**Resposta:**

Primeira visita:

- Ligue e desligue o primeiro interruptor brevemente.
- Deixe o segundo interruptor ligado.
- Deixe o terceiro interruptor desligado.

Segunda visita:

- Se uma lâmpada estiver apagada e fria, é controlada pelo terceiro interruptor.
- Se uma lâmpada estiver acesa, é controlada pelo segundo interruptor.
- Se uma lâmpada estiver apagada e quente, é controlada pelo primeiro interruptor.

## Questão 5 - Invertendo uma String

Escreva um programa que inverta os caracteres de uma string.

**Resposta Questão 5:**

Você pode usar um loop para percorrer a string de trás para frente e construir uma nova string invertida. Aqui está um exemplo em JavaScript:

```javascript
let string = "tiago";
let novaString = "";

for (let i = string.length - 1; i >= 0; i--) {
  novaString += string[i];
}

console.log(novaString);
//output = ogait
