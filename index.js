$(document).on("keypress", function(){
  startGame();
})

var index = 0;
var store = [];

function pressed(next){
  if (next == 0){
    $("#green").addClass("pressed");
    var audio = new Audio("sounds/green.mp3");
    audio.play();
    setTimeout(function(){
      $("#green").removeClass("pressed");
    },200);
  }
  else if (next == 1){
    $("#red").addClass("pressed");
    var audio = new Audio("sounds/red.mp3");
    audio.play();
    setTimeout(function(){
      $("#red").removeClass("pressed");
    },200);
  }
  else if (next == 2){
    $("#yellow").addClass("pressed");
    var audio = new Audio("sounds/yellow.mp3");
    audio.play();
    setTimeout(function(){
      $("#yellow").removeClass("pressed");
    },200);
  }
  else if (next == 3){
    $("#blue").addClass("pressed");
    var audio = new Audio("sounds/blue.mp3");
    audio.play();
    setTimeout(function(){
      $("#blue").removeClass("pressed");
    },200);
  }
  setTimeout(function(){}, 1000);
}

function wrongPress(){
  index = 0;
  store = [];
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function(){$("body").removeClass("game-over");}, 450)
  $("h1").text("Press Any Key to Start");
}

function startGame(){
  $("h1").text("🚩 Level " + store.length + " 🚩");

  index = 0;
  var press = Math.floor(Math.random() * 4);
  setTimeout(function(){
    pressed(press);
  }, 1000)
  store.push(press);

  console.log(store);
}


$(".btn").on("click", function(){
  if (store.length == 0){
    startGame();
    return;
  }
  var but = this.id;
  var check = -1;
  if (but == "green"){
    check = 0;
  }
  else if (but == "red"){
    check = 1;
  }
  else if (but == "yellow"){
    check = 2;
  }
  else if (but == "blue"){
    check = 3;
  }
  pressed(check);

  //console.log(check);
  //console.log(store);
  //console.log(index);

  if (check == store[index]){
    ++index;
    if (index == store.length){
      startGame();
    }
  }
  else {
    wrongPress();
  }
})
