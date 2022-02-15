function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "THE HORSE GOTS A STARRING PROBLEM WATCHA GONNA DO ABOUT IT";
        document.getElementById("choice1").innerHTML = "APPROACH IT";
        document.getElementById("choice2").innerHTML = "IGNORE IT";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "ARE YOU SURE ABOUT THAT ";
        document.getElementById("choice1").innerHTML = "NO";
        document.getElementById("choice2").innerHTML = "YES";
    } else if (choice == 1 && answer1 == "APPROACH IT") {
        document.getElementById("story").innerHTML = "NO WAY THE HORSE LEAD YOU TO TREASURE! WANNA DIG IT UP";
        document.getElementById("choice1").innerHTML = "LEAVE IT";
        document.getElementById("choice2").innerHTML = "DIG IT UP";
    } else if (choice == 2 && answer2 == "IGNORE IT") {
        document.getElementById("story").innerHTML = "YOU SURE ABOUT THAT?";
        document.getElementById("choice1").innerHTML = "YES";
        document.getElementById("choice2").innerHTML = "NO";
    } else if (choice == 1 && answer1 == "NO") {
        document.getElementById("story").innerHTML = "ARE YOU SURE ABOUT THAT :/";
        document.getElementById("choice1").innerHTML = "YEA I GUESS";
        document.getElementById("choice2").innerHTML = "HECK NO";
    } else if (choice == 2 && answer2 == "YES") {
        document.getElementById("story").innerHTML = "NO WAY, THAT WAS AWSOME";
        document.getElementById("choice1").innerHTML = "TOTALLY";
        document.getElementById("choice2").innerHTML = "EHH";
    }
    // need to do these
    else if (choice == 1 && answer1 == "Evaluate all dogs") {
        document.getElementById("story").innerHTML = "Pugster decides that evaluation is the best option." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Stay clear") {
        document.getElementById("story").innerHTML = "Pugster decides staying away is the best option" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "YES") {
        document.getElementById("story").innerHTML = "THAT'S NOT RIGHT RESTART :/" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "NO") {
        document.getElementById("story").innerHTML = "TOO LATE THE HORSE LEFT";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "YEA I GUESS") {
        document.getElementById("story").innerHTML = "YOU'RE SO CLOSE" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "HECK NO") {
        document.getElementById("story").innerHTML = "YOU'RE SO CLOSE" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "TOTALLY") {
        document.getElementById("story").innerHTML = "YOU'RE SO CLOSE" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "EHH") {
        document.getElementById("story").innerHTML = "YOU'RE SO CLOSE" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "YOU'RE SO CLOSE, CONTINUE";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Pugster thanks you!";

    }


}