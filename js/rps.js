// custom function or plugin
// this custom function is for Rock, Paper, Scissors (lines 3 - 63)
(function ( $ ) {

    $.fn.RPS = function (userChoice) {
        
        var computerChoice = Math.random();
        
        // result strings: ur, cr, up, cp, us, cs, tie
        // ur is "user/rock", cr is "computer rock", etc.
        // these simple strings trigger if/else logic for display

        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        
        if (computerChoice === "rock") {
            $("#p2").css("background-image","url('images/rock.png')");
        }
        
        if (computerChoice === "paper") {
            $("#p2").css("background-image","url('images/paper.png')");
        }
        
        if (computerChoice === "scissors") {
            $("#p2").css("background-image","url('images/scissors.png')");
        }
        
        if (userChoice === computerChoice) {
            return "tie";
        }
        
        if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                return "ur";
            } else {
                return "cp";
            }
        }
        
        
        if (userChoice === "paper") {
            if (computerChoice === "rock") {
                return "up";
            } else {
                return "cs";
            }
        }
        
        if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                return "cr";
            } else {
                return "us";
            }
        }
        
    };
    
}(jQuery)); //end of custom function

// *** DOCUMENT READY BELOW. CUSTOM FUNCTION ABOVE. ***
// *** MOST OF YOUR EDITS HAPPEN IN document ready ***
// *** Be aware of what's happening in the RPS function above! *** 

// events occur when document (DOM) ready
$(document).ready(function() {
    
    var $result; // stores result of the function call to RPS
    
    $("#rock").click( function() {
        $("#p1").css("background-image","url('images/rock.png')");
        $result = ($(this).RPS("rock")); // stores result (ur, cp, tie)
        
        if ($result === "ur") {
            $("#result").text("User: Rock wins");
            
            $("#p1").css("border-color", "#00ff00");
            
            $("#p2").css({
                "border-color": "rgba(155,155,155,.3)"
            });
        



        } else if ($result === "cp") {
        
            $("#result").text("Computer: Paper wins");
        
            $("#p1").css({
                "border-color": "rgba(155,155,155,.3)"
            });
        
            $("#p2").css("border-color", "#00ff00");
        
        } else if ($result === "tie") {
        
            $("#result").text("It's a tie!");
        
            $("#p1, #p2").css({
                "border-color":"rgba(155,65,0,.3)"
            });
        
        } else {
        
            $("#result").text("");
        
        }
    });
    
// *** STUDENT COMPLETES THE PROGRAM FROM HERE... ***

   $("#paper").click( function() {
        $("#p1").css("background-image","url('images/paper.png')");
        $("#result").text($(this).RPS("paper"));
    });
    
    $("#scissors").click( function() {
        $("#p1").css("background-image","url('images/scissors.png')");
        $("#result").text($(this).RPS("scissors"));
    });
    
});