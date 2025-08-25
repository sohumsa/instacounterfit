const images = document.querySelectorAll('.gallery-track img');

function checkCenterImage() {
  const center = window.innerWidth / 2;
  
  images.forEach((img, index) => {
    const imgCenter = img.offsetLeft + img.offsetWidth / 2;
    if (Math.abs(center - imgCenter) < img.offsetWidth / 2) {
      img.style.filter = "grayscale(0%)";  
      img.style.transform = "scale(1.1)"; 
    } else {
      img.style.filter = "grayscale(90%)"; 
      img.style.transform = "scale(0.95)"; 
    }
  });
}

window.addEventListener('load', checkCenterImage);
window.addEventListener('scroll', checkCenterImage);
window.addEventListener('resize', checkCenterImage);

