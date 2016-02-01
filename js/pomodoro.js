// Doug Wells's Calculator project
// See if you can find the "easter egg"
// Finding it is as easy as PI

$(document).ready(function(){

  var display = $(".display").text();
  var arr =[];
  var mathButtonPushed = false;
  var i = 0; //image array incrementor
  var imageURL = [
    ['rgba(210,180,140, 0.6)','rgba(210,180,140, 0.3)','url("https://dl.dropboxusercontent.com/s/b3bx1htfwao0lei/man_on_the_mountain.jpg")'],
    ['rgba(186,85,211, 0.6)','rgba(186,85,211, 0.3)','url("https://dl.dropboxusercontent.com/s/ihldzg2u6l0drph/surferGirl.jpg")'],
    ['rgba(0,191,255, 0.4)','rgba(0,191,255, 0.2)','url("https://dl.dropboxusercontent.com/s/s08q7kaodwztwkq/robotStart.jpg")'],
    ['rgba(234,104,17, 0.6)','rgba(234,104,17, 0.3)','url("https://dl.dropboxusercontent.com/s/ve1o0rvptdf8gnq/track.jpg")']
  ];

// When a number button is pushed.  mathButtonPushed lets calculator know to
// start a "new" number vs adding the digit to the end of the number currently displayed

  $(".number").on("click", function(event) {
    if (mathButtonPushed){
      display = $(this).text();
      mathButtonPushed = false;
    } else {
      display = (""+display+$(this).text());
    }
    (isNaN(Number(display)) ? display="Error" : display=display);
    $(".display").text(display);
  });

//When you hit the decimal button.  Only complicated part is preventing
// double decimal points in one number (checked for in "else" statement)
  $(".decimal").on("click", function(event) {
    if (mathButtonPushed || display ==0){
      display = "0.";
      mathButtonPushed = false;
      $(".display").text(display);
    } else {
    (isNaN(Number(display)) ? display="Error" : display=display);
    display = (""+display+$(this).text());
    $(".display").text(display);
  }
  });

  $(".clear").on("click", function(event) {
    display=0;
    $(".display").text(display);
    arr = [];
    mathButtonPushed=true;
  });

  $(".changeSign").on("click", function(event) {
    display = Number(-display);
    (isNaN(display) ? display="Error" : display=display);
    $(".display").text(display);
  });

// Would you like some Easter PI?
  $(".pi").on("click", function(event) {
    (i<imageURL.length ? i=i : i=0);
    $(".display").text("Surprise ...!");
    $("body").css({"background-image": imageURL[i][2]});
    $(".orange-btn").css({"background-color":imageURL[i][0]});
    setTimeout(function () {
      display = Math.PI;
      $(".display").text(Math.PI)
    }, 1000);
    i++;

  });

//Handles math after + - X etc hit (this took some thinking ...)
//Used array so I could come back later and add Reverse Polish Notation (RPN).
  $(".mathOp").on("click", function(event) {
    console.log("before button push "+arr);
    arr.push(Number(display));
    arr.push($(this).text());
    console.log("after button push & pre-loop " +arr);
    if (arr.length>2) {
      (arr[1]=="+" ? display=arr[0]+Number(display) : display = display);
      (arr[1]=="-" ? display=arr[0]-Number(display) : display = display);
      (arr[1]=="x" ? display=arr[0]*Number(display) : display = display);
      (arr[1]=="÷" ? display=arr[0]/Number(display) : display = display);
      arr = [];
      arr.shift();
      arr.push(Number(display));
      arr.push($(this).text());
    }
    (isNaN(display) ? display="Error" : display=display);
    $(".display").text(display);
    mathButtonPushed=true;
    console.log("after loop " +arr);

  });

//Pretty efficient way to handle different math operations.
  $(".equal").on("click", function(event) {
    (arr[1]=="+" ? display=arr[0]+Number(display) : display = display);
    (arr[1]=="-" ? display=arr[0]-Number(display) : display = display);
    (arr[1]=="x" ? display=arr[0]*Number(display) : display = display);
    (arr[1]=="÷" ? display=arr[0]/Number(display) : display = display);
    (isNaN(display) ? display="Error" : display=display);
    $(".display").text(display);
    arr = [];
  });

});
