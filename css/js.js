let playerImg = document.querySelector(".player img");
let computerImg =document.querySelector(".computer img");

let computerScore = document.querySelector(".computerCount");
let playerScore = document.querySelector(".playerCount");
let declare = document.getElementById("winner");
// playerImg.src = "s.png";
// computerImg.src = "p.png";
computerImg.style.width = "110px";
playerImg.style.width = "110px";
var P_Score= 0;
var C_Score = 0;

// computerScore.innerHTML="0";
// playerScore.innerHTML="0";


function Choise(option){
    let player,computer;
    switch(option){
        case 1:
            player="r.png";
            break;
        case 2:
            player="p.png";
            break;
        case 3:
            player="s.png";
            break;
        default:
            console.log("Error in player choice");
            break;
    }
    let ranNum = Math.floor(Math.random()*3)+1;
    // console.log(ranNum);
    switch(ranNum){
        case 1:
            computer="r.png";
            break;
        case 2:
            computer="p.png";
            break;
        case 3:
            computer="s.png";
            break;
        default:
            console.log("Error in computer choice");
            break;
    }

    playerImg.src=player;
    computerImg.src=computer;
    declare.innerHTML=wincheck(player,computer);
    computerScore.innerHTML=C_Score;
    playerScore.innerHTML=P_Score;
}

function wincheck(player, computer){
    if(player === computer){
        computerScore.style.color="black";
        playerScore.style.color="black";
        return "Draw";
    }
    else if( player == "r.png"){
        if(computer == "p.png"){
            C_Score++;
            computerScore.style.color="red";
            playerScore.style.color="black";
            return "Computer Wins";

        }
        else {
            P_Score++;
            playerScore.style.color="red";
            computerScore.style.color="black";
            return "You win";
        }
    }
    else if( player == "p.png"){
        if(computer == "s.png"){
                C_Score++;
            computerScore.style.color="red";
            playerScore.style.color="black";
            return "Computer Wins";

        }
        else {
            P_Score++;
            playerScore.style.color="red";
            computerScore.style.color="black";
            return "You win";
        }
    }
    else if( player == "s.png"){
        if(computer == "r.png"){
                C_Score++;
            computerScore.style.color="red";
            playerScore.style.color="black";
            return "Computer Wins";

        }
        else {
            P_Score++;
            playerScore.style.color="red";
            computerScore.style.color="black";
            return "You win";
        }
    }
    else{
        return "Error in wincheck()";
    }

}