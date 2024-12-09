let randomNo1 = Math.floor(Math.random() * 6 + 1);
let randomNo2 = Math.floor(Math.random() * 6 + 1);

let image1 = "images/"+"dice"+randomNo1+".png";
let image2 = "images/"+"dice"+randomNo2+".png";

document.querySelectorAll("img")[0].setAttribute("src", image1);
document.querySelectorAll("img")[1].setAttribute("src", image2);

if(randomNo1 > randomNo2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if(randomNo1 < randomNo2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw !"
}