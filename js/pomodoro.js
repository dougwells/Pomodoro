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

$( document ).ready(function() {

//Initial variables set by User
  var workMin = 20;
  var playMin = 10;

//Other variables set at start
  var workSec = workMin*60
  var playSec = playMin*60
  var endSec = playSec + workSec
  var elapsedSec = 0;
  var remainingSec;
  var percent = 0   //0-100=work, 101-200=play

//Object to hold timer output & properties
  var timer = {};
  var i = 0;


//
  console.log("Before Loop.  Work Min = " + workMin);
  // while (i<10){
    setInterval(function(){
      elapsedSec = elapsedSec + 1;
      console.log(elapsedSec);

      //work time
      if(elapsedSec<=workSec){
        remainingSec= workSec - elapsedSec;
        timer.message = "Time to work ...";
        timer.percent = elapsedSec/workSec*100;
        timer.bgColor = "linear-gradient(to bottom right, #7FDBFF, #0074D9)"
        timer.elementColor = "aqua";
        console.log(timer.percent);

        //playtime
      }else if (elapsedSec<endSec){
          remainingSec = playSec + workSec - elapsedSec;
          timer.message = "Go Play ...!";
          timer.percent = (elapsedSec-workSec)/playSec*100;
          timer.bgColor = "linear-gradient(to bottom right, #7FDBFF, #0074D9)"
          timer.elementColor = "aqua";

        //if work time is over, set play timer
        }else {
          remainingSec = 0;
          timer.message = "Another Pomodoro?";
          timer.percent = 0;
          timer.bgColor = "linear-gradient(to bottom right, #7FDBFF, #0074D9)"
          timer.elementColor = "aqua";
        }
        i=i+1;
        timer.minutes = Math.floor(remainingSec/60);
        timer.seconds = remainingSec - timer.minutes*60;  //function, returns timer object
        console.log(timer.minutes, timer.seconds);
        $("#circle-1").attr("data-part", timer.percent);
        $('#circle-1').circliful();
    return timer.percent;
  }, 100);
    console.log("loop complete.  Minutes = " + timer.percent);
  // }



  //Input data into radial progress indicator

    // $("#circle-1").attr("data-text", "55%");
    // $("#circle-1").attr("data-part", playMin);
  	// $("#circle-1").attr("data-total", workMin);



});
