$(document).ready(function() {
  //Ensures Smooth Page Transitions
//  $("body").css("display", "none");
$("body").hide(0);
  //Loads the NavBar
  $("body").delay(300).fadeIn(700);
  $("#navbar").load("navbar.html");
  console.log("Loaded navbar successfully!");

});
