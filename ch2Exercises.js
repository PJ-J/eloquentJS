const triangleMaker = () => {
  let hash = "#";
  while (hash.length <= 7) {
    console.log(hash);
    hash = hash + "#";
  }
};
// triangleMaker();

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        console.log("FizzBuzz");
      } else {
        console.log("Fizz");
      }
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
// fizzBuzz();

const chessBoard = () => {
  let size = 8;
  let board = "";

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }

  console.log(board);
};
chessBoard();
