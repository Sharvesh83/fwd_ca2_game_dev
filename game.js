var banbalance1 =100;
var banbalance2 =100;
var banbalance3 =100;

var bet1 = document.getElementById("bet1").value;
var bet2 = document.getElementById("bet2").value;
var bet3 = document.getElementById("bet3").value;

var bet1box = document.getElementById("bet1box").value;
var bet2box = document.getElementById("bet2box").value;
var bet3box = document.getElementById("bet3box").value;

function random(){
    randomNumber = Math.round(Math.random()*6);
}

var diceimage = "./Assets/" + random +".png";

var randomdice = document.getElementsByClassName("dice");

for( let i = 0 ; i < randomdice.length; i++){
    randomdice[i].addEventListener("click",e =>{
        document.getElementById('d1').style.display = "none";
        document.getElementById('d2').style.display = "none";
        document.getElementById('d3').style.display = "none";
        document.getElementById('d4').style.display = "none";
        document.getElementById('d5').style.display = "none";
        document.getElementById('d6').style.display = "none";
       die.style.display = "block"
    })
}