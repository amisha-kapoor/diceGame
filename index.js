var randomNumber1=Math.floor(Math.random()*6)+1;
var newimg1= "images/dice"+randomNumber1+".png";
var target1=document.querySelectorAll("img")[0];
target1.setAttribute("src", newimg1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var newimg2= "images/dice"+randomNumber2+".png";
var target2=document.querySelectorAll("img")[1];
target2.setAttribute("src", newimg2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 WINS!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 WINS!";
}
else{
    document.querySelector("h1").innerHTML="It's a TIE!";
}