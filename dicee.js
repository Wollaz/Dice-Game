function diceRoll(dice) {
    dice = ["/images/dice1.png","/images/dice2.png","/images/dice3.png","/images/dice4.png","/images/dice5.png","/images/dice6.png"];
    dice = dice[Math.floor(Math.random() * dice.length)] ;
    return dice;
}

function imgSrc() {
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");

    img1.src = diceRoll();
    img2.src = diceRoll();

    if(img1.src === img2.src) {
        document.querySelector(".title").innerHTML = "Draw!";
    }
    else if(img1.src > img2.src) {
        document.querySelector(".title").innerHTML = "🚩 Player 1 Wins!";
    }
    else {
        document.querySelector(".title").innerHTML = "Player 2 Wins! 🚩";
    }
}
imgSrc();