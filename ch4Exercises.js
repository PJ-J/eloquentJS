// const range = (start, end, step) => {
//   let result = [];
//   if (!step) {
//     while (start <= end) {
//       result.push(start);
//       start++;
//     }
//   } else {
//     while (start <= end) {
//       result.push(start);
//       start += step;
//     }
//   }
//   return result;
// };
// let arr = range(1, 10);
// console.log(arr);

// const sum = (result) => {
//   total = 0;
//   for (let num of result) {
//     total += num;
//   }
//   return total;
// };
// console.log(sum(arr));

// const reverseArray = (array) => {
//   let newArray = [];
//   for (let elem of array) {
//     newArray.unshift(elem);
//   }
//   return newArray;
// }
// console.log(reverseArray(arr));

// const reverseArrayInPlace = (array) => {
//   let pointer = 0;
//   let i = array.length - 1;
//   while (i >= 0) {
//   let popped = array.pop(array[array.length-1]);
//   array.splice(pointer, 0, popped);
//   pointer++;
//   i--;
//   }
//   return array;
// };
// console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]));

// all the examples below are from the website. clearly my brain doesn't understand the list concept very well at this point.

const arrayToList = (array) => {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}
console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}


