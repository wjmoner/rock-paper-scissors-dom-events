// *** DECLARE AND INITIALIZE VARIABLES *** // 

var playerOne = document.getElementById("p1");
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");

// *** DEFINE SIMPLE INTERFACE FUNCTIONS *** //
// these are in response to the EVENT LISTENERS 
// at the bottom of the file

var userMouseOver = function () {

    playerOne.style.borderColor = "#00ff00";

};

var userMouseOut = function () {

    playerOne.style.borderColor = "#333";

};

// *** SIMPLE CHECK WIN ALGORITHM

var checkWin = function (u, c) {

    if (u === c)  {
        return "tie";
    }
    else if (u === "rock") {
        if (c === "scissors") {
            return "win";        
        } else {
            return "lose";
        }
    }
    else if (u === "paper") {
        if (c === "rock") {
            return "win"         
        } else {
            return "lose"
        }
    }
    else if (u === "scissors") {
        if (c === "paper") {
            return "win"         
        } else {
            return "lose"
        }
    }

};

// *** OUR GAME CODE *** 
// Listens for an EVENT and passes an EVENT OBJECT 
// as the SELECTION

var check = function(selection) {

    console.log("Player selected: " + selection);

    var userChoice = selection;
    var computerChoice = Math.random();
    var p1view = document.getElementById("p1");
    var p2view = document.getElementById("p2");

    if (computerChoice < 0.3333) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.6666) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    var result = checkWin(userChoice, computerChoice);
    document.getElementById("result").innerHTML = result;

    switch (userChoice) {
        case "rock":
            p1view.style.backgroundImage = "url(images/rock.png)"; 
            // show rock graphic
            break;
        case "paper":
            p1view.style.backgroundImage = "url(images/paper.png)"; 
            // show paper graphic 
            break;
        case "scissors":
            p1view.style.backgroundImage = "url(images/scissors.png)"; 
            // show scissors graphic
            break;
        default:
            console.log("No image available");
    }

    switch (computerChoice) {
        case "rock":
            p2view.style.backgroundImage = "url(images/rock.png)"; 
            // show rock graphic
            break;
        case "paper":
            p2view.style.backgroundImage = "url(images/paper.png)"; 
            // show paper graphic 
            break;
        case "scissors":
            p2view.style.backgroundImage = "url(images/scissors.png)"; 
            // show scissors graphic
            break;
        default:
            console.log("No image available");  
    }

};

// *** EVENT LISTENERS THAT RESPOND TO INTERACTIONS

playerOne.addEventListener("mouseenter", userMouseOver);
playerOne.addEventListener("mouseout", userMouseOut);

// *** EVENT LISTENERS THAT RESPOND BY 
// *** PASSING AN EVENT OBJECT 
// *** INTO AN ANONYMOUS FUNCTION

rockButton.addEventListener("click", function (ev) { 
        console.log(ev); // shows the event object
        check(this.id); // calls check() and passes the id 
        // of the object being clicked
    });
paperButton.addEventListener("click", function (ev) { check(this.id); });
scissorsButton.addEventListener("click", function (ev) { check(this.id); });

