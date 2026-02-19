const gameBoard = {
  board: ["", "", "", "", "", "", "", "", ""],
  mark(index, mark) {
    if (this.board[index] !== "") {
      console.log("Already a mark");
    } else {
      this.board[index] = mark;
      this.display()
      this.checkWin()
    }
  },
  display() {
    console.log(`
      ${this.board[0] || "-"} | ${this.board[1] || "-"} | ${this.board[2] || "-"}
      ${this.board[3] || "-"} | ${this.board[4] || "-"} | ${this.board[5] || "-"}
      ${this.board[6] || "-"} | ${this.board[7] || "-"} | ${this.board[8] || "-"}
    `);
  },
  checkWin() {
    wins = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [3, 4, 5],
      [2, 5, 8],
      [6, 7, 8],
    ];
    for (let combo of wins) {
      const [a, b, c] = combo;
      if (this.board[a]!=="" && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        console.log(`Winner is ${this.board[a]}`);
      }
      else console.log("No one has won")
    }
  },
};

gameBoard.mark(1, "X");
gameBoard.mark(2, "X");
gameBoard.mark(3, "X");
gameBoard.mark(1, "O");
gameBoard.mark(0, "X");
