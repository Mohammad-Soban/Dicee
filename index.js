var RandomDice1 = Math.ceil((Math.random() * 6));
console .log(RandomDice1)

if(RandomDice1 == 1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");    
}

else if(RandomDice1 == 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}

else if(RandomDice1 == 3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}

else if(RandomDice1 == 4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}

else if(RandomDice1 == 5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}

else if(RandomDice1 == 6){
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

var RandomDice2 = Math.ceil((Math.random() * 6));
var randomImg = "images/dice" + RandomDice2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImg);

if(RandomDice1 == RandomDice2){
    document.querySelector("#textChange").innerHTML = "Draw";
}

else if(RandomDice1 > RandomDice2){
    document.querySelector("#textChange").innerHTML="🚩Player 1 Wins";
}

else{
    document.querySelector("#textChange").innerHTML="Player 2 Wins🚩";
}