//array
var myViewFinderArray = new Array();

// class
class ViewFinder
{   // title
    constructor(title)
    {
        this.title = title;
    }

    toString()
    {
        return "Title: " + this.title;    
    }

    get theTitle()
    {
        return this.title;
    }

    //Image
    constructor(Image)
    {
        this.Image = Image;
    }

    toString()
    {
        return "Image: " + this.Image;    
    }

    get theImage()
    {
        return this.Image;
    }

    //Description
    constructor(Description)
    {
        this.Description = Description;
    }

    toString()
    {
        return "Description: " + this.Description;    
    }

    get theDescription()
    {
        return this.Description;
    }

    // Author
    constructor(Author)
    {
        this.Author = Author;
    }

    toString()
    {
        return "Author: " + this.Author;    
    }

    get theAuthor()
    {
        return this.Author
    }

    //Image Year
    constructor(ImageYear)
    {
        this.ImageYear = ImageYear;
    }

    toString()
    {
        return "ImageYear: " + this.ImageYear;    
    }

    get theImageYear()
    {
        return this.ImageYear;
    }

}

// array myViewFinderArray
function initializeArray()
{
    var myViewFinder = new ViewFinder("A really funny Pug");
    var myViewFinder1 = new ViewFinder("A really angry tiger");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);

}

// accessInformation
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}