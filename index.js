var ran1 = Math.floor(Math.random()* 6) + 1;

var ranImg1 = "images/dice" + ran1 + ".png";
document.querySelector(".container .dice .img1").setAttribute("src", ranImg1);
var ran2 = Math.floor(Math.random()* 6) + 1;
var ranImg2 = "images/dice" + ran2 + ".png";
document.querySelector(".container .dice .img2").setAttribute("src", ranImg2);
if (ran1 === ran2){
    document.querySelector("h1").textContent = "Draw";
}
else if(ran1 > ran2)
{
    document.querySelector("h1").textContent = String.fromCodePoint(0x1F386) + "Player 1 Wins";
}
else {
    document.querySelector("h1").textContent = "Player 2 Wins" + String.fromCodePoint(0x1F386);
}