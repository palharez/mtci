/**
 * Create a function that reverse a string:
 * 'Hi My name is Eduardo' -> should be:
 * 'odraudE si eman yM iH
 */

function myReverse(str) {
  // Memory Usage: 0(n)
  // Time Complexit: O(n)

  /**
   * Fazemos uma iteração inversa do array pegando
   * do maior index até o começo e adicionando
   * o valor dessa posição no nove array
   */

  /**
   * I will make a reverse iteration over
   * the array and setting the value
   * of each iteration in a new array
   */

  const strArr = str.split("");
  const newStr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr.push(strArr[i]);
  }

  return newStr.join("");
}

console.log(myReverse("Hi My name is Eduardo"));

function teacherReverse(str) {
  // chek input
  if (!str || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

console.log(teacherReverse("Hi My name is Eduardo"));

function reverseBuiltin(str) {
  return str.split("").reverse().join("");
}
console.log(reverseBuiltin("Hi My name is Eduardo"));

const reverseArrowBuiltin = (str) => [...str].reverse().join("");
console.log(reverseArrowBuiltin("Hi My name is Eduardo"));
