$(document).ready(function(){
//select square class
//add event listener so on click we run the squareflip function

//squareflip function will toggle image

// $(".square").on("click", squareflip);
//   function squareflip(){
//     console.log("I was clicked");
//
//     console.log($(event.target)) //references the element being clicked on.
//     $(event.target).toggle()
//
//
//
//   }
// $("photo").on("click",)
var show = true;

$("table").on("click", function(){
//   (function(e){
//   $("img").toggleClass("photo");
//
// }())
$(event.target).children().eq(0).toggleClass("photo")




  console.log("I was clicked on photo")
})

/*$(".square").on("click", function(){
  $(event.target).children().show()
  console.log("I was clicked on square")
})*/

}); //close document.ready
