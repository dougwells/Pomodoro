$( document ).ready(function() {

//Initial variables set by User
  var workMin = 20;
  var playMin = 10;

//Other variables set at start
  var workSec = workMin*60
  var playSec = playMin*60
  var endSec = playSec + workSec
  var elapsedSec = 0;
  var remainingSeconds;
  var percent = 0   //0-100=work, 101-200=play

//Object to hold timer output & properties
  var timer = {};

//Press start

//while loop
  //timer starts.
  //work = 0-100%
  //play = 101% - 200%
  //done = 201%
    //run function that returns an object
        //countdown.percent
        //countdown.percent-color (light grn to dark grn)
        //countdown.mode/message (work, play or done)
        //countdown.mode-color (progress bar color)
//
  while (elapsedSec<endSec){
    setInterval(function(){
      elapsedSeconds = elapsedSeconds + 1;
      percent = 100*elapsedSec/endSec;

      //work time
      if(percent<100){
        remainingSeconds= workSec - elapsedSeconds;
        minutes = Math.floor(remainingSeconds/60);
        seconds = timerSeconds - minutes*60;  //function, returns timer object
        timer.message = "Time to work ...";
        timer.percent = remainingSeconds/workSec*100;
        timer.percent-color = 0-33 = light gren
                              33-66 = med gren
                              67-100 = drk gren

        //playtime
      }else if (percent<200){
          remainingSeconds = playSec + workSec - elapsedSeconds;

        //if work time is over, set play timer
        }else {
          remainingSeconds = 0;
        }
    },500);
  }







function timer (remainingSeconds){
  // var minutes = Math.floor(remainingSeconds/60);
  // var seconds = timerSeconds - minutes*60;
  //
  // setInterval(function(){
  //   if(timerSeconds>0){
  //     timerSeconds = timerSeconds-1;
  //     minutes = Math.floor(timerSeconds/60);
  //     seconds = timerSeconds - minutes*60;
  //     console.log(minutes, seconds);
  //   }
  // }, 500);


  //Input data into radial progress indicator

    $("#circle-1").attr("data-text", "55%");
    $("#circle-1").attr("data-part", playMin);
  	$("#circle-1").attr("data-total", workMin);
    $('#circle-1').circliful();

});
