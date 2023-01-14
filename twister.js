const bodyParts = ["Left hand", "Right hand", "Left foot", "Right foot", "Head", "Butt"];
const colors = ["red", "blue", "green", "yellow"];
let interval;
let movesArray = [];

function start() {
  addMove();
  displayMoves();
  
  interval = setInterval(() => {
    addMove();
    displayMoves();
  },5000);
}

function addMove() {
  let bodyPart = "";
  let color = "";
  const lastMove = movesArray[movesArray.length - 1];
  do {
    color = getColor();
    bodyPart = getBodyPart();
  } while (lastMove?.bodyPart === bodyPart && lastMove?.color === color)

  movesArray.push({bodyPart: bodyPart, color: color});
}

function getBodyPart() {
  const idx = Math.floor(Math.random() * bodyParts.length);
  return bodyParts[idx] + " - ";
}

function getColor() {
  const idx = Math.floor(Math.random() * colors.length);
  return colors[idx];
}

function displayMoves() {
  const moves = document.getElementById("moves");
  moves.innerHTML = "";
  for(const move in movesArray) {
    const currentMove = movesArray[move];
    const moveDiv = document.createElement("div");
    moveDiv.classList.add("move")

    const partSpan = document.createElement("span");
    partSpan.innerText = currentMove.bodyPart;

    const colorSpan = document.createElement("span");
    colorSpan.classList.add("bodyPart");
    colorSpan.classList.add("color");
    colorSpan.style.backgroundColor = currentMove.color;

    moveDiv.append(partSpan);
    moveDiv.append(colorSpan);
    moves.append(moveDiv);
  }
}

function stop() {
  clearInterval(interval);
}

function reset() {
  stop();
  moves.innerHTML = "";
  movesArray = [];
}