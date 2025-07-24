let currentIndex = 0;

function slide(direction) {
  const slider = document.getElementById("slider");
  const cards = slider.querySelectorAll(".card");
  const cardWidth = cards[0].offsetWidth + 20; // includes margin/gap
  currentIndex += direction;

  // Limit sliding bounds
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > cards.length - 3) currentIndex = cards.length - 3;

  // ✅ Use backticks for template literal
  slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;

}

const requestPopup = document.getElementById("requestItems");

  // Show modal on button click
  document.querySelector(".request-button").addEventListener("click", () => {
    requestPopup.style.display = "block";
  });

  // Hide on close button click
  function closeModal() {
    requestPopup.style.display = "none";
  }

  // Hide on outside click
  window.addEventListener("click", function (e) {
    if (e.target === requestPopup) {
      requestPopup.style.display = "none";
    }
  });

  // Function to play the video
function playVid() {
  var video = document.getElementById("myVideo");
  var playButton = document.getElementById("playimg");
  
  // Play the video
  video.play();
  
  // Hide the play button when the video is playing
  playButton.style.display = "none"; 
}

// Function to pause the video
function pauseVid() {
  var video = document.getElementById("myVideo");
  var playButton = document.getElementById("playimg");
  
  // Pause the video
  video.pause();
  
  // Show the play button when the video is paused
  playButton.style.display = "block";
}