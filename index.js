const mediaContainer = document.getElementById('media-container');
const title = document.getElementById('title');

function updateBackground() {
  if (window.matchMedia('(min-width: 1400px)').matches) {
    // Viewport width is greater than or equal to 1400px
    mediaContainer.style.display = 'block';
    title.style.backgroundImage = 'none';
  } else {
    // Viewport width is less than 1400px
    mediaContainer.style.display = 'none';
    title.style.backgroundImage = "url('images/earth-at-night.webp')";
  }
}

// Run the updateBackground function on page load
updateBackground();

// Run the updateBackground function whenever the viewport size changes
window.addEventListener('resize', updateBackground);
