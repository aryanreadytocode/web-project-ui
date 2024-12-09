// This is comment
let lenght = document.querySelectorAll(".drum").length;
for(let i = 0; i< lenght; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var innerButton = this.innerHTML;
        console.log("pressed ", innerButton)
        makeSound(innerButton);
        playButtonAnimation(innerButton);
   }) 
}

document.addEventListener("keypress", function(event) {
   console.log("keypressed ", event.key)
   makeSound(event.key);
   playButtonAnimation(event.key)
})


function makeSound(key) {
   switch(key) {
      case "w": 
      playSound("sounds/tom-1.mp3");
      break;
      case "a": 
      playSound("sounds/tom-2.mp3");
      break;
      case "s": 
      playSound("sounds/tom-3.mp3");
      break;
      case "d":
      playSound("sounds/tom-4.mp3");
      break;
      case "j": 
      playSound("sounds/snare.mp3");
      break;
      case "k": 
      playSound("sounds/crash.mp3");
      break;
      case "l": 
      playSound("sounds/kick-bass.mp3");
      break;
     }
}

function playSound(name) {
   var audio = new Audio(name);
   audio.play();
}

function playButtonAnimation(key) {
   var activeButton = document.querySelector("."+ key);   
   activeButton.classList.add("pressed");
   setTimeout(() => {
      activeButton.classList.remove("pressed")
   }, 100);
}

