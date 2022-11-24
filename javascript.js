var d1 = createRand();
var d2 = createRand();
function reload(){
    location.reload();
}
function createRand(){
    var rand = Math.random();
    rand = rand * 6;
    rand = Math.floor(rand)+1;
    return rand;
}
function Winner()
{
    document.querySelectorAll("img")[0].setAttribute("src","DICE_IMAGES/dice"+d1+".jpg");
    document.querySelectorAll("img")[1].setAttribute("src","DICE_IMAGES/dice"+d2+".jpg");
    if(d1 == d2)
    {
        document.getElementById("declare").innerHTML = "DRAW!";
    }
    else if(d1 > d2)
    {
        document.getElementById("declare").innerHTML = "Player 1 won the Game !";
    }
    else{
        document.getElementById("declare").innerHTML = "Player 2 won the Game !";
    }
}