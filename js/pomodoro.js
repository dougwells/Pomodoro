
$( document ).ready(function() {

//Initial variables set by User
  var workMin = 5;
  var playMin = 1;

//Other variables set at start
  var workSec = workMin*60
  var playSec = playMin*60
  var endSec = playSec + workSec
  var elapsedSec = 0;
  var remainingSec;
  var percent = 0   //0-100=work, 101-200=play

//Object to hold timer output & properties
  var timer = {};

    setInterval(function(){
      elapsedSec = elapsedSec + 1;

      //work time
      if(elapsedSec<=workSec){
        remainingSec= workSec - elapsedSec;
        timer.message = "Time to work ...";
        timer.percent = Math.floor(elapsedSec/workSec*100);
        timer.bgColor = "linear-gradient(to bottom right, #7FDBFF, #0074D9)"
        timer.elementColor = "aqua";

        //playtime
      }else if (elapsedSec<endSec){
          remainingSec = playSec + workSec - elapsedSec;
          timer.message = "Go Play ...!";
          timer.percent = Math.floor(elapsedSec-workSec)/playSec*100;
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

        timer.minutes = Math.floor(remainingSec/60);
        timer.seconds = remainingSec - timer.minutes*60;
        (timer.seconds<10 ? timer.ss = "0"+timer.seconds.toString() : timer.ss=timer.seconds.toString());
        timer.mmss = timer.minutes.toString() + ":" + timer.ss;

        //function, returns timer object
        if(elapsedSec<=endSec) {
          console.log(remainingSec, timer.mmss, timer.minutes, timer.seconds, timer.percent);
          $("#circle-1").attr("data-text", timer.mmss);
          $("#circle-1").attr("data-part", timer.percent);
          $("#circle-1").attr("data-info", timer.message);
          $('#circle-1').empty().removeData().attr('data-part', timer.percent).circliful()
        }
  }, 100);
  // }



  //Input data into radial progress indicator

    // $("#circle-1").attr("data-text", "60%");
    // $("#circle-1").attr("data-part", 30);
  	// $("#circle-1").attr("data-total", 100);
    // $('#circle-1').circliful();



});
