let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a, b) => a.concat(b))); 

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}


