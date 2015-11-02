// NHO: ran JS code through Beautify. Why is it easier to maintain clean code?
$(document).ready(function() {
  clickcounter = 0 // NHO: missing var keyword, this is a global variable
  $(".square").on("click", function() {
    clickcounter++
    console.log(clickcounter) // NHO: remove console.logs and debugging lines for submissions
    console.log($(this).find("img").css("display"))
    $(this).find("img").toggle();
    console.log($(this).find("img").css("display"))
    if (clickcounter % 2 == 0) {
      console.log("if conditional worked")
        //run checkmatch function
      checkMatch() // nice!
    }
  });
  // =============== NHO: Remove commented out/unused code =======================

  function checkMatch() {
    var flippedImages = $("img:visible") // NHO: is this selector working the way you want it to?
    console.log(flippedImages)
    var firstImage = flippedImages[0]
    var secondImage = flippedImages[1]
    if (firstImage.src == secondImage.src) { // NHO: this throws an error in the console when no squares are flipped
      $(firstImage).css("display", "inline")
        //this is a match
        //squares should stay shown
        //display:inline
    } else {
      //not a match
      //squares should say hidden.
      //display should be none
      // NHO: Good job breaking down the steps! I encourage you to come back to this and work through the matching functionality!
    }
  }


  // NHO: It's a good idea to get into the habit of organizing or commenting out blocks of related code.
  var seconds = 0

  var timerId;

  var startButton = document.getElementById("reset")

  function updateTime() {
    seconds++
    document.getElementById("reset").innerHTML = seconds
  } // NHO: Let's make sure our code's indentation is consistent.
  startButton.addEventListener("click", function() {
    updateTime()
    timerId = setInterval(updateTime, 1000)
  })

});

// =============== NHO: Remove commented out/unused code =======================
// =============== NHO: See further comments in feedback.md ! ====================
