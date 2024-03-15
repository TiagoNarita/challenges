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
