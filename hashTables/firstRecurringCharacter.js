const firstRecurringCharacter = (array) => {
  const memo = {};

  for (let number of array) {
    if (memo[number]) {
      return number;
    }

    memo[number] = true;
  }

  return undefined;
};

console.log(firstRecurringCharacter([1, 2, 3, 1, 2]));
console.log(firstRecurringCharacter([1, 2, 3]));
