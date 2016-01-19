$(document).ready(function() {
  //Ensures Smooth Page Transitions
  $("body").css("display", "none");
  //Loads the NavBar
  $("#navbar").load("navbar.html");
  //Fades the page in
  $("body").fadeIn(300);
  console.log("Loaded navbar successfully!");
  $.getScript("utility.js")
    .done(function() {
      console.log("Loaded utility.js successfully!")
    })
    .fail(function() {
      console.log("Error loading utility.js!");
    });
});
