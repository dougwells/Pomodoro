
$( document ).ready(function() {

//Initial variables set by User
  var workMin = 50;
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
  var j = 0;
  var k = 0;


//
  console.log("Before Loop.  Work Min = " + workMin);
  // while (elapsedSec<endSec){
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
        timer.seconds = remainingSec - timer.minutes*60;  //function, returns timer object
        if(timer.seconds==0 && elapsedSec<=endSec) {
          i=timer.percent;
          j=timer.percent.toString()+"%";
          console.log(remainingSec, j, timer.minutes, timer.seconds, timer.percent);
          $("#circle-1").attr("data-text", j);
          $("#circle-1").attr("data-part", i);
          $("#circle-1").attr("data-info", timer.message);
          $('#circle-1').empty().removeData().attr('data-percent', j).circliful()
        }
  }, 5);
  // }



  //Input data into radial progress indicator

    // $("#circle-1").attr("data-text", "60%");
    // $("#circle-1").attr("data-part", 30);
  	// $("#circle-1").attr("data-total", 100);
    // $('#circle-1').circliful();



});
