let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("reset-btn");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  document.getElementById("msg").innerText = "";
}

boxes.forEach(e => {
  e.addEventListener('click', () => {
    if (turnO) {
      e.innerText = "O";
      turnO = false;
    } else {
      e.innerText = "X";
      turnO = true
    }

    e.disabled = true;
    checkWinner();
  })
})

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "", pos2Val !== "", pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        document.getElementById("msg").innerText = `${pos1Val} Won!`;
        boxes.forEach(e => {
          e.disabled = true;
        })
      }
    }
  }

}