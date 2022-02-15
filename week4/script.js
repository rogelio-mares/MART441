//Start
function rightOrLeft()
{
  var myChoice = document.getElementById("rightorleft").value;
  var myQuestion = document.getElementById("question");
  if(myChoice === "Right")
  {
    document.getElementById("rightorleft").style.display="none";
    document.getElementById("rightorleftbtn").style.display="none";

    document.getElementById("PickorLeave").style.display="block";
    document.getElementById("PickorLeavebtn").style.display="block";

    myQuestion.innerHTML = "You continue to the right and encounter a hitch hiker! He asks for a ride. What will you do?";
  }

else if (myChoice === "Left")
{
  document.getElementById("rightorleft").style.display="none";
  document.getElementById("rightorleftbtn").style.display="none";

  document.getElementById("GasorAss").style.display="block";
  document.getElementById("GasorAssbtn").style.display="block";

  myQuestion.innerHTML = "You continue driving left and notice you're going by a gas station. Do you stop for gas or keep driving? ";
}

else
{
  myQuestion.innerHTML = "Invalid Answer";
}

}
//
///
///// Start -> Right ----------------------
///
//
function PickorLeave()
{
  var answer2 = document.getElementById("PickorLeave").value;
  var myQuestion = document.getElementById("question");
  if(answer2 === "Pick Him Up")
  {
    document.getElementById("PickorLeave").style.display="none";
    document.getElementById("PickorLeavebtn").style.display="none";

    document.getElementById("HydrateorDehydrate").style.display="block";
    document.getElementById("HydrateorDehydratebtn").style.display="block";

    document.getElementById("mainImage").src = "./images/HitchHiker.jpeg"
    myQuestion.innerHTML = "You decide to drive with the man. eventually, you get thirsty but there isn't any water. The man offers you some of his water. Will you hydrate it or dehydrate?"
  }
  else if(answer2 === "Leave Him")
  {
    document.getElementById("PickorLeave").style.display="none";
    document.getElementById("PickorLeavebtn").style.display="none";

    document.getElementById("continueoralternate").style.display="block";
    document.getElementById("continueoralternatebtn").style.display="block";
    document.getElementById("mainImage").src = "./assets/thirdimage.jpg"

    myQuestion.innerHTML = "You keep driving but you run out of gas, do you stay and wait for someone or walk and look for help"
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
//
///
///// Start -> Right -> Accept it -------------------------
///
//
function HydrateorDehydrate()
{
  var answer3 = document.getElementById("HydrateorDehydrate").value;
  var myQuestion = document.getElementById("question");
  if(answer3 === "Accept it")
  {
    document.getElementById("HydrateorDehydrate").style.display="none";
    document.getElementById("HydrateorDehydratebtn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./imagess/Dead.jpg"
    myQuestion.innerHTML = "His water was poisoned."
  }
  else if(answer3 === "Dehydrate")
  {
    document.getElementById("HydrateorDehydrate").style.display="none";
    document.getElementById("HydrateorDehydrate").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./images/Dead.jpg"

    myQuestion.innerHTML = "You die from dehydration."
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
//
///
///// Start -> Right -> leave him ---------------------------
///
//
function continueOrAlternate()
{
  var answer4 = document.getElementById("continueoralternate").value;
  var myQuestion = document.getElementById("question");
  if(answer4 === "Look around")
  {
    document.getElementById("continueoralternate").style.display="none";
    document.getElementById("continueoralternatebtn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./images/Dead.jpg"
    myQuestion.innerHTML = "Oh No! A coyote attacked you."
  }
  else if(answer4 === "Stay")
  {
    document.getElementById("continueoralternate").style.display="none";
    document.getElementById("continueoralternatebtn").style.display="none";

    document.getElementById("restart").style.display="block";
    document.getElementById("mainImage").src = "./images/pool.jpeg"

    myQuestion.innerHTML = "Congrats someone picks you up, and they take you to the nearest town"
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
//
///
///// Start -> left
///
//
function GasorAss()
{
  var answer5 = document.getElementById("GasorAss").value;
  var myQuestion = document.getElementById("question");
  if(answer5 === "Get Gas")
  {
    document.getElementById("GasorAss").style.display="none";
    document.getElementById("GasorAssbtn").style.display="none";

    document.getElementById("runorfight").style.display="block";
    document.getElementById("runorfightbtn").style.display="block";

    document.getElementById("mainImage").src = "./imagess/stuck.jpeg"
    myQuestion.innerHTML = "There's a serial killer at the store! What will you do"
  }
  else if(answer5 === "Keep driving")
  {
    document.getElementById("GasorAss").style.display="none";
    document.getElementById("GasorAssbtn").style.display="none";

    document.getElementById("crossorturn").style.display="block";
    document.getElementById("crossorturnbtn").style.display="block";

    document.getElementById("mainImage").src = "./assets/bridge.jpg"
    myQuestion.innerHTML = " There's a bunch of cows on the road. Do you wait for them to cross or turn around?"
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
//
///
///// Start -> Left -> GAS
///
//
function runOrFight()
{
  var answer6 = document.getElementById("runorfight").value;
  var myQuestion = document.getElementById("question");
  if(answer6 === "Run")
  {
    document.getElementById("runorfight").style.display="none";
    document.getElementById("runorfightbtn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./images/Dead.jpg"
    myQuestion.innerHTML = "why would you run he's crazy"
  }
  else if(answer6 === "Fight")
  {
    document.getElementById("runorfight").style.display="none";
    document.getElementById("runorfightbtn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./images/Dead.jpg"
    myQuestion.innerHTML = "why would you fight he's crazy"
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
//
///
///// Start -> Left -> keep going
///
//
function crossOrTurn()
{
  var answer7 = document.getElementById("crossorturn").value;
  var myQuestion = document.getElementById("question");
  if(answer7 === "Cross")
  {
    document.getElementById("crossorturn").style.display="none";
    document.getElementById("crossorturnbtn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./images/pool.jpeg"
    myQuestion.innerHTML = "Congrats you made it  back safely!"
  }
  else if(answer7 === "Turn around")
  {
    document.getElementById("crossorturn").style.display="none";
    document.getElementById("crossorturn").style.display="none";

    document.getElementById("restart").style.display="block";

    document.getElementById("mainImage").src = "./assets/twopaths.png"
    myQuestion.innerHTML = "You turn around and make it to a nearby town"
  }

  else
  {
    myQuestion.innerHTML = "Invalid Answer";
  }

}
