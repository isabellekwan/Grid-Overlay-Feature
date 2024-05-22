// JavaScript to toggle overlay visibility
function toggleOverlay() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  var gridContainer = document.querySelector(".grid-container");
  gridContainer.style.display = overlay.style.display;
}

// JavaScript to hide the overlay and grid container
function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
  document.querySelector(".grid-container").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  // Event listener for the button click to show the grid and overlay
  document.getElementById("showGridBtn").addEventListener("click", toggleOverlay);

  // Event listener for the close button to hide the grid and overlay
  document.getElementById("closeOverlayBtn").addEventListener("click", hideOverlay);
});
