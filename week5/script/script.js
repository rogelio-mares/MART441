//variables
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8"];
var blankImagePath = "images/box.png";
var actualImages = new Array();

//box images
function printBlanks() {
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
}

//image array
function createRandomImageArray() {
    var actualImagePath = ["images/bomb.png", "images/cherry.png", "images/flower.png", "images/greenshroom.png", "images/redshroom.png"];
    var count = [0,0,0,0,0,0,0,0,0,0];

    while(actualImages.length < 10) {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

//image flip
function flipImage(number) {
    document.getElementById(imageTags[number]).src= actualImages[number];
}