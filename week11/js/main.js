var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 75;
var y = 75;
var x2 = 350;
var y2 = 350;
var square1;
var square2;

// squares
createSquares();
drawSquare();

// this timer will move the second square around
setInterval(moveGreenSquare, 5000);

// instances of squares
function createSquares() {
    square1 = new Square(x, y, 100, 100, "Purple");
    square2 = new Square(x2, y2, 150, 150, "Red");
}

// randomly move
function moveGreenSquare() {

    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();
}

function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

}

//jquery
$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});


function getKey(event) {

   
    var didCollide = hasCollided(square1, square2);
    if (didCollide) {
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        square1.setWidth(square1.theWidth - 1);
        square1.setHeight(square1.theHeight - 1);
        square2.setWidth(square2.theWidth + 1);
        square2.setHeight(square2.theHeight + 1);
    }
    
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }
    drawSquare();
}

//up
function moveUp() {
    square1.setY(square1.theY - 15);
}

//down
function moveDown() {
    square1.setY(square1.theY + 15);
}

//left
function moveLeft() {
    square1.setX(square1.theX - 15);
}

// right
function moveRight() {
    square1.setX(square1.theX + 15);
}


function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}