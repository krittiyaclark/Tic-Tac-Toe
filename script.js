// Store user, computer, trackMoves
var trackMoves;
const user = "O";
const computer = "X";
// Store array of winners
const checkIfWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const cells = document.querySelectorAll(".cell")
start();

function start() {
  // Create arrays of every number from 0 - 9 elememts and just the keys elememts
  trackMoves = Array.from(Array(9).keys());
  // Clear cells when game started
  for(let i = 1; i < cells.length; i++) {
    cells[i].innerText = ""
    // Remove background colors
    cells[i].style.removeProperty("background-color");
    // Every time clicks on each cell it will show X or O
    cells[i].addEventListener("click", turnClick, false);
  }
}

function turnClick(eachCell) {
  // Log the ID every time its clicked
  console.log(eachCell.target.id);
}

// functions: start(), stop(), movesCount(), timer()

// Empty array to store x & o and check the result
