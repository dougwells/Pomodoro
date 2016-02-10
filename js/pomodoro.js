
$( document ).ready(function() {

    $('#circle-1').circliful();
    pomodoro(0,0);



// Pomodoro Function

function pomodoro (workMin, playMin){
//variables set at start
  var workSec = workMin*60
  var playSec = playMin*60
  var endSec = playSec + workSec
  var elapsedSec = 0;
  var remainingSec;
  var percent = 0
//Object to hold timer output & properties
  var timer = {};

//clock updates every 1 second
  var clock = setInterval(function(){
      elapsedSec = elapsedSec + 1;

      //work time
      if(elapsedSec<=workSec){
        remainingSec= workSec - elapsedSec;
        timer.message = "Time to work ...";
        timer.percent = Math.floor(elapsedSec/workSec*100);
        timer.bgColor = "#00dbde";
        timer.fgColor = "#fc00ff";
        timer.elementColor = "linear-gradient(to bottom right, #00dbde, #fc00ff)";


        //playtime
      }else if (elapsedSec<endSec){
          remainingSec = playSec + workSec - elapsedSec;
          timer.message = "Go Play ...!";
          timer.percent = Math.floor(elapsedSec-workSec)/playSec*100;
          timer.bgColor = "#24FE41";
          timer.fgColor = "#FDFC47";
          timer.elementColor = "linear-gradient(to bottom right, #24FE41, #FDFC47)";

        //When work & play time are over, reset pomodoro
        }else {
          remainingSec = 0;
          timer.message = "Another Pomodoro?";
          timer.percent = 0;
          timer.bgColor = "#7FDBFF";
          timer.fgColor = "#24FE41";
          timer.elementColor = "linear-gradient(to bottom right, #7FDBFF, #0074D9)";
        }


        //  Input fields needed for cicliful & user display elements
        //  Circliful draws radial progress bar
        timer.minutes = Math.floor(remainingSec/60);
        timer.seconds = remainingSec - timer.minutes*60;
        (timer.seconds<10 ? timer.ss = "0"+timer.seconds.toString() : timer.ss=timer.seconds.toString());
        timer.mmss = timer.minutes.toString() + ":" + timer.ss;

        //Update time & progress bar until both work & play time runs out
        $("#circle-1").attr("data-text", timer.mmss);
        $("#circle-1").attr("data-part", timer.percent);
        $("#circle-1").attr("data-info", timer.message);
        //Change color of radial progress bar (depending on work or play)
        $("#circle-1").attr("data-bgcolor", timer.bgColor);
        $("#circle-1").attr("data-fgcolor", timer.fgColor);

      //Set HTML background color at start of work time, start of play & at end
        if(elapsedSec<endSec){
          if(elapsedSec===1){$("body").css("background", "linear-gradient(to bottom right, #00dbde, #fc00ff");}
          if(elapsedSec===workSec){$("body").css("background", "linear-gradient(to bottom right, #FDFC47, #24FE41");}
          console.log(remainingSec, timer.mmss, timer.minutes, timer.seconds, timer.percent);
        } else {
          //Need to clear setInterval so timer stops running at end of work and play
          clearInterval(clock);
          $("body").css("background", "linear-gradient(to bottom right, #7FDBFF, #0074D9");
          console.log("done ", remainingSec, timer.mmss, timer.minutes, timer.seconds, timer.percent);
        }

      //Update & redraw radial progress bar each second.  Search "github circliful" for more information
        $('#circle-1').empty().removeData().attr('data-part', timer.percent).circliful();

  }, 200);  //End "clock" / setInterval

} // End pomodoro function

}); // End $(document).ready
