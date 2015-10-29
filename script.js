$(document).ready(function(){
  clickcounter = 0
$(".square").on("click", function(){
  clickcounter++
  console.log(clickcounter)
  console.log($(this).find("img").css("display"))
  $(this).find("img").toggle();
  console.log($(this).find("img").css("display"))
  if (clickcounter % 2 == 0 ){
    console.log("if conditional worked")
    //run checkmatch function
    checkMatch()
  }
  });
  //if (click % 2 == 0 ){


    //run checkmatch function if clicked in multiples of two
    //checkmatch will given the two cards clicked compare the image source attribute if they match perm keep face up, otherwise flip them both back over.
    //checkwinner function will alert that you won if all the cards are face up
    //event.target should be pushed in an array
  //}


    function checkMatch(){
      var flippedImages = $("img:visible")
      console.log(flippedImages)
      var firstImage = flippedImages[0]
      var secondImage = flippedImages[1]
      if (firstImage.src == secondImage.src){
        $(firstImage).css("display","inline")
        //this is a match
        //squares should stay shown
        //display:inline
      } else {
        //not a match
        //squares should say hidden.
        //display should be none

      }
    }



    var seconds = 0

    var timerId;

    var startButton = document.getElementById("reset")
    function updateTime(){
    seconds++
    document.getElementById("reset").innerHTML=seconds
    }
    startButton.addEventListener("click", function(){
      updateTime()
      timerId = setInterval(updateTime,1000)
    })

});
//when the counter if it equals 2 that's when checks if it's a correct match or nah


//create a click counter
//the counter will count the number of clicks and only allow

/*$(".square").on('click', function() {
    //var click = +$(this).data('clicks') || 0;
    if (click % 2 == 0) {
        $(this).children().show();
    }else{
        $(this).children().hide();
    };
    $(this).data('clicks',click+1);
  });
  */

/*var A = 'nike1.jpg';
var B = 'nike2.jpg';
var C = 'nike3.jpg';
var D = 'nike4.jpg';
var E = 'nike5.jpg';
var F = 'nike6.jpg';
var G = 'nike7.jpg';
var H = 'nike8.jpg';
var I = 'nike9.jpg';
var J = 'nike10.jpg';
var K = 'nike11.jpg';
var L = 'nike12.jpg';*/
