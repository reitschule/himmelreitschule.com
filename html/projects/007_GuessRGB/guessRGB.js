var numSquares = 9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
//var easyBtn = document.getElementById("easyBtn");
//var hardBtn = document.getElementById("hardBtn");
//var advancedBtn = document.getElementById("advancedBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButton();
    setUpSquares();
    reset();
};

function setUpModeButton() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            for (var i = 0; i < modeButtons.length; i++) {
                modeButtons[i].classList.remove("selected");
            }
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else if (this.textContent === "Hard") {
                numSquares = 6;
            } else {
                numSquares = 9;
            };
            reset();
        });
    };
};

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?"
                changeColor(pickedColor);
                h1.style.backgroundColor = pickedColor;
            } else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            };
        });
    };
};


function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        };
    };
    h1.style.backgroundColor = "steelblue";
};

//easyBtn.addEventListener("click", function(){
//    advancedBtn.classList.remove("selected");
//    hardBtn.classList.remove("selected");
//    easyBtn.classList.add("selected");
//    numSquares = 3;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for (var i = 0; i < squares.length; i++) {
//        if(colors[i]) {
//            squares[i].style.backgroundColor = colors[i];
//        } else {
//            squares[i].style.display = "none";
//        };
//    };
//    h1.style.backgroundColor = "steelblue";
//    resetButton.textContent = "New Colors";
//    messageDisplay.textContent = "";
//
//});
//
//hardBtn.addEventListener("click", function(){
//    advancedBtn.classList.remove("selected");
//    hardBtn.classList.add("selected");
//    easyBtn.classList.remove("selected");
//    numSquares = 6;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for (var i = 0; i < squares.length; i++) {
//        if(colors[i]) {
//            squares[i].style.display = "block";
//            squares[i].style.backgroundColor = colors[i];
//        } else {
//            squares[i].style.display = "none";
//        };
//    };
//    h1.style.backgroundColor = "steelblue";
//    resetButton.textContent = "New Colors";
//    messageDisplay.textContent = "";
//
//});
//
//advancedBtn.addEventListener("click", function(){
//    advancedBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");
//    easyBtn.classList.remove("selected");
//    numSquares = 9;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for (var i = 0; i < squares.length; i++) {
//        squares[i].style.display = "block";
//        squares[i].style.backgroundColor = colors[i];
//    };
//    h1.style.backgroundColor = "steelblue";
//    resetButton.textContent = "New Colors";
//    messageDisplay.textContent = "";
//
//});

resetButton.addEventListener("click", function(){
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for (var i = 0; i < squares.length; i++) {
//        squares[i].style.backgroundColor = colors[i];
//    };
//    h1.style.backgroundColor = "steelblue";
//    messageDisplay.textContent = "";
//    this.textContent = "New Colors";
    reset();
});

//colorDisplay.textContent = pickedColor;


function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    };
};

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
};

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    };
    return arr;
};  