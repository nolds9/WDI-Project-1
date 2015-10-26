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
if ($(event.target).children().eq(0).hasClass("photo")){
console.log("I was removed");
$(event.target).children().eq(0).removeClass("photo")
console.log($(event.target).children().eq(0)
);
} else {
  $(event.target).eq(0).addClass("photo")
  console.log("I was added");
  console.log($(event.target).eq(0))

}




  console.log("I was clicked on photo")
})

/*$(".square").on("click", function(){
  $(event.target).children().show()
  console.log("I was clicked on square")
})*/

}); //close document.ready
