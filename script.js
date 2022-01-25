document.addEventListener("DOMContentLoaded", function () {
  var parent = document.querySelector(".splitview"),
    topPanel = parent.querySelector(".top"),
    handle = parent.querySelector(".handle"),
    skewHack = 0,
    delta = 0;
  if (parent.className.indexOf("skewed") != -1) {
    skewHack = 1000;
  }
  parent.addEventListener("mousemove", function (event) {
    // Get the delta between the mouse and position and center point.
    delta = (event.clientX - window.innerWidth / 2) * 0.5;

    // Move the handel.
    handle.style.left = event.clientX + delta + "px";

    // adjust the top panel width.
    topPanel.style.width = event.clientX + skewHack + delta + "px";
  });
});
