//This Script sets up some global methods and intitializes the loading of the navigation bar.

//Sets a cookie. cname is the cookie name, cvalue the cookie value and exdays the expiration date in days.
//Please dont eat spoilt cookies!
function setCookie(cname, cvalue, exdays) {
  exdays = exdays || 365;
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function initCookie(cname, cvalue, exdays) {
  if (getCookie(cname) == "" || getCookie(cname) == "undefned") {
    setCookie(cname, cvalue, exdays);
  }
}

//Gets a cookie value of the given cookie name. Returns "", if the cookie is nonexistent (SOMEONE ATE IT!! >:c)
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0 && c.substring(name.length, c.length) != "undefined") return c.substring(name.length, c.length);
  }
  return "";
}

//Prints out all cookies and their values into the console.
function showAllCookies() {
  var ca = document.cookie.split(';');
  console.log("ALL COOKIES")
  console.log("---------------------")
  for (var i = 0; i < ca.length; i++) {
    console.log(ca[i]);
  }
  console.log("---------------------")
}

//This is the equivalent of PHP's "$_GET[]" method. Awesome!
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}

function UrlExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status != 404;
}

function loadDocument(documentPath, synchronus) {
  data = null;
  $.ajax({
    url: documentPath,
    async: !!synchronus,
    success: function(csvd) {
      data = csvd;
    },
  });
  return data;
}

initCookie("animations", "true");
initCookie("fadeInTime", "1000");
initCookie("fadeOutTime", 500);
initCookie("wellreference", "10230");
initCookie("welltype", "96");

$(document).ready(function() {
  //Ensures Smooth Page Transitions
  $("body").hide(0);
  //Loads the NavBar
  $("#navbar").load("navbar.html");
  //console.log("navbar.html successfully loaded.");
  //Finally fades the body in
  //console.log(getCookie("fadeInTime"));
  $("body").delay(300).fadeIn(parseInt(getCookie("fadeInTime")))
});
