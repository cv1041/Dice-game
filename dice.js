var randomNumber1=Math.floor(Math.random()*6)+1;
var diceimg1="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",diceimg1)

var randomNumber2=Math.floor(Math.random()*6)+1;
var diceimg2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",diceimg2)

if(randomNumber1>randomNumber2){ 
    document.querySelector("h1").innerHTML=(" 🏆🏆 Player 1 wins !!")
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=(" Player 2 wins !! 🏆🏆 ")
}
else{
    document.querySelector("h1").innerHTML=("😶‍🌫️ Draw 😶‍🌫️")
}

function start(){
    window.location.reload();
}

document.querySelector("a").addEventListener("click",start);