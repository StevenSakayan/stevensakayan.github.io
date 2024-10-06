/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos + 15) {
    document.getElementById("navbar").style.top = "6px";
  }
  if (prevScrollpos < currentScrollPos - 15) {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
};