// JavaScript to show a specific grid overlay
function showOverlay(gridId) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById(gridId).style.display = "block";
}

// JavaScript to hide the overlay and all grid containers
function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
  document.querySelectorAll(".grid-container").forEach(function(grid) {
    grid.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Event listeners for the button clicks to show specific grids
  document.getElementById("sortifyInfo").addEventListener("click", function() {
    showOverlay("sortifyGrid");
  });
  document.getElementById("cueConnectInfo").addEventListener("click", function() {
    showOverlay("cueConnectGrid");
  });
  document.getElementById("timePulseInfo").addEventListener("click", function() {
    showOverlay("timePulseGrid");
  });

  // Event listener for the close button to hide the overlay and grids
  document.getElementById("closeOverlayBtn").addEventListener("click", hideOverlay);
});
