// Global variables
var lastScrollY = 0;
var fading = false;
var menunav = document.getElementById("menunav")
menunav.style.opacity = "1.0"

function fadeOutOpacity(element) {
    fading = true;
    var op = 1.0;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.0) {
            // Timer ends
            clearInterval(timer);
            fading = false;
            element.style.opacity = "0.0"
            menunav.style.backgroundColor = "rgba(0, 0, 0, 1)"
            return;
        }
        element.style.opacity = op.toString();
        op -= 0.1;
    }, 50);
}

function fadeInOpacity(element) {
    fading = true;
    var op = 0.0;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1.0) {
            // Timer ends
            clearInterval(timer);
            fading = false;
            element.style.opacity = "1.0"
            return;
        }
        element.style.opacity = op.toString();
        op += 0.1;
    }, 50);
}

function fadeOutBkgColor(element) {
    fading = true;
    var op = 1.0;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.0) {
            // Timer ends
            clearInterval(timer);
            fading = false;
            element.style.backgroundColor = "rgba(0, 0, 0, 0)"
            return;
        }
        element.style.backgroundColor = "rgba(0, 0, 0," + op.toString() + ")"
        op -= 0.1;
    }, 50);
}

window.onscroll = function() {

  if (lastScrollY - window.scrollY < 0) {
      if (!fading && menunav.style.opacity === "1") {
          fadeOutOpacity(menunav)
      }
  } else if (lastScrollY - window.scrollY > 0) {
      if (!fading && menunav.style.opacity === "0") {
          fadeInOpacity(menunav)
      }
  }

  if (window.scrollY === 0 && menunav.style.backgroundColor === 'rgb(0, 0, 0)') {
      fadeOutBkgColor(menunav);
  }

  lastScrollY = window.scrollY;
};


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var casc = {lat: 40.078505, lng: -2.129829};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: casc});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: casc, map: map});
}


//Aqui desarrollo la funcion de las galletas
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {

  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}


function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
