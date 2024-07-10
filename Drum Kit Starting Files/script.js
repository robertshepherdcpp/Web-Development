var numberOfDrumButtons = document.querySelectorAll(".drum").length;

function playSound(key)
{
  var string = "./sounds/";
    if (key === 'w') {
      string += "crash.mp3";
    }
    if (key === 'a') {
      string += "kick-bass.mp3";
    }
    if (key === 's') {
      string += "snare.mp3";
    }
    if (key === 'd') {
      string += "tom-1.mp3";
    }
    if (key === 'j') {
      string += "tom-2.mp3";
    }
    if (key === 'k') {
      string += "tom-3.mp3";
    }
    if (key === 'l') {
      string += "tom-4.mp3";
    }
    var sound = new Audio(string);
    sound.play();
}

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playSound(this.innerHTML);
    this.style.color = "white";
  });
}

document.addEventListener("keydown", function (event) {playSound(event.key);});