let numOfSquares = 6;
let colors = [];
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let pickedColor;
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setUpModeButtons();
  setUpSquareListeners();
  reset();
};

function setUpModeButtons(){
  for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected")
    modeButtons[1].classList.remove("selected")
    this.classList.add("selected");
    this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
    reset()
    });
  };
};

function setUpSquareListeners(){
  for(let i = 0; i < squares.length; i++){
    // Add initial colors to Squares
    squares[i].style.backgroundColor = colors[i];
    // Add event listener for when you click each square
    squares[i].addEventListener("click", function(){
      // Grab and check the color of the picked square
      let clickedColor = this.style.backgroundColor;
      // Compare that color to the pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor); 
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  };
};

function reset(){
  colors = generateRandomColors(numOfSquares);
  // pick a new color from the random color array
  pickedColor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  // change the colors of the squares
  for(let i = 0; i < squares.length; i++){
    // check to see what squares need to be changed
    if(colors[i]){
      // Add initial colors to Squares
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  };
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors"
};

resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
  // loop through all the squares
  for(let i = 0; i < squares.length; i++){
    // change each color
    squares[i].style.backgroundColor = color;
  }
};

function pickColor(){
  // pick a random number
  let random = Math.floor(Math.random() * colors.length);
  // return the random color that will be the correct answer
  return colors[random];
};

function generateRandomColors(num){
  // make an array
  let arr = [];
  // add num random colors to the array
  for(let i =0; i < num; i++){
    // get a random color and push it into the array
    arr.push(randomColor());
  };
  // return the array
  return arr
};

function randomColor(){
  // pick a "red" - 255
  let r = Math.floor(Math.random() * 256);
  // pick a "green" -255
  let g = Math.floor(Math.random() * 256);
  // pick a "blue" -255
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};