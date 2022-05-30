player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;


document.getElementById("playerQuestion").innerHTML = "Turno de pergunta - "+ player1Name;
document.getElementById("playerAnswer").innerHTML = "Turno de resposta - " + player2Name;

function send(){

    
}

