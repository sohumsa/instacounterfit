// Get all the images in the gallery track
const images = document.querySelectorAll('.gallery-track img');

// Function to check which image is in the center
function checkCenterImage() {
  const center = window.innerWidth / 2;
  
  images.forEach((img, index) => {
    const imgCenter = img.offsetLeft + img.offsetWidth / 2;
    if (Math.abs(center - imgCenter) < img.offsetWidth / 2) {
      img.style.filter = "grayscale(0%)";  // Center image is full color
      img.style.transform = "scale(1.1)"; // Center image scales up
    } else {
      img.style.filter = "grayscale(90%)"; // Non-center images are grayscale
      img.style.transform = "scale(0.95)"; // Non-center images shrink slightly
    }
  });
}

// Call the checkCenterImage function on load and on scroll/resize
window.addEventListener('load', checkCenterImage);
window.addEventListener('scroll', checkCenterImage);
window.addEventListener('resize', checkCenterImage);
