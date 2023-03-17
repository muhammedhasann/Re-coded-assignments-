const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;
console.log(`The result of multiplying ${num1} and ${num2} is ${multiply}`);

const random = Math.ceil(Math.random() * 100);
console.log(`A random integer greater than 0 is ${random}`);

const num3 = 25;
const num4 = 7;
const { remainder: mod } = { remainder: num3 % num4 };
console.log(`The remainder of dividing ${num3} by ${num4} is ${mod}`);

const numbers = [5, 10, 15, 20];
const max = Math.max(...numbers);
console.log(`The highest number in the set ${numbers} is ${max}`);
