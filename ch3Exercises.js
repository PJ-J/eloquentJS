const min = (num1, num2) => {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(min(9, 8));

const evenOrOdd = (num) => {
  if (num < 0) {
    return "not a positive number";
  } else {
    if (num == 0) {
      return "even";
    } else if (num == 1) {
      return "odd";
    } else {
      return evenOrOdd(num - 2);
    }
  }
};
console.log(evenOrOdd(75));

const countBs = string => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      count++;
    }
  }
  return count;
}
console.log(countBs("ds;alfja;lsdfjBBBle"));

const countChar = (string, char) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count++;
    }
  }
  return count;
}
console.log(countChar("halflauhgh   hhhh", "a"))
