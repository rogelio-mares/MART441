var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var object1;
var objects;
var direction;
var questions;
var squareArray = [];
var objectArray = [];
var lives = 3;
var collectables = 0;
$(document).ready(function(){

    setup();

    $(this).keypress(function(event){
        getKey(event);

    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    square1 = new Square(100,100,50,50,"#0000FF");
    square2 = new Square(400,400,100,100,"#00FF00");
    $.getJSON("data/squares.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });

object1 = new Objects(0,0,30,30,"#FFD700");

    $.getJSON("data/objects.json", function(data) {
        for(var i = 0; i < data.objects.length; i++)
        {
            objectArray.push(new Objects(data.objects[i].x,data.objects[i].y, data.objects[i].h, data.objects[i].w, data.objects[i].color));
        }
        drawObjects();
    });


}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = hasCollided(square1,square2,object1);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i],object1,objectArray[i]);
        if(test2 == true)
        {
            break;
        }


    }
    if(test || test2)
    {
        lives--;
        collectables++;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }

    }
    drawSquare();

}

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);

}

function drawObjects()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = object1.mainColor;
    ctx.fillRect(object1.x, object1.y, object1.width, object1.height);
    for(var i = 0; i < objectArray.length; i++)
    {
        ctx.fillStyle = objectArray[i].mainColor;
        ctx.fillRect(objectArray[i].x, objectArray[i].y, objectArray[i].width, objectArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Collectables: " + collectables, 10, 70);

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}