$(document).ready(function() {
  $("#navbar").load("navbar.html");
  console.log("Loaded navbar successfully!");
  $.getScript("utility.js")
    .done(function() {
      console.log("Loaded utility.js successfully!")
    })
    .fail(function() {
      console.log("Error loading utility.js!");
    });
});
