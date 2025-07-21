let boxes = document.querySelectorAll(".button");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let cont = document.querySelector(".container");
let color = document.querySelector(".color");

// console.log(boxes);

let turnO = true;
let count = 0; //to count draw

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  boxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
    msgContainer.classList.add("hide");
    cont.classList.remove("hide");
    resetBtn.classList.remove("hide");
  });
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.textContent = "O";
      turnO = false;
      color.classList.add("red");
      color.classList.remove("blue");
    } else {
      box.textContent = "X";
      turnO = true;
      color.classList.remove("red");
      color.classList.add("blue");
    }
    box.disabled = true;
    count++;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.textContent = `WINNER is ${winner}`;
  msgContainer.classList.remove("hide");
  cont.classList.add("hide");
  resetBtn.classList.add("hide");
  disableBoxes();
};

function checkWinner() {
  winPattern.forEach((pattern) => {
    let a = boxes[pattern[0]].textContent;
    let b = boxes[pattern[1]].textContent;
    let c = boxes[pattern[2]].textContent;
    if (a === b && b === c && a !== "") {
      showWinner(a);
      //   alert(`Player ${a} wins!`);
      //   resetGame();
    }
  });
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
