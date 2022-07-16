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

const arrayToList = (array) => {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}
console.log(arrayToList([1, 2, 3]));
