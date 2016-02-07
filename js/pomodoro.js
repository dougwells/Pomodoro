

var timer = 2;
var timerSeconds = timer*60;
var minutes = Math.floor(timerSeconds/60);
var seconds = timerSeconds - minutes*60;


//hit start button //

setInterval(function(){
  timerSeconds = timerSeconds-1;
  minutes = Math.floor(timerSeconds/60);
  seconds = timerSeconds - minutes*60;
  console.log(minutes, seconds);
}, 500);

$( document ).ready(function() {
    $("#circle-1").attr("data-text", "65%");
  	$("#circle-1").attr("data-total", timer-minutes);
  	$("#circle-1").attr("data-part", timer);
    $('#circle-1').circliful();
  });
