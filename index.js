// Function to redirect to another page
function goToPage(page) {
  window.location.href = page;
}

// Function to update date and time
function updateDateTime() {
  const now = new Date();
  const options = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  };
  const formattedDateTime = now.toLocaleDateString('en-US', options);
  document.getElementById('dateTime').innerText = formattedDateTime;
}

// Update date and time every second
setInterval(updateDateTime, 1000);
window.onload = updateDateTime; 

//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  // Hide all slides initially
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("fade");
  }

  // Show the current slide
  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("fade");

  // Move to the next slide
  slideIndex++;

  // If we reach the last slide, stop at the last slide and do not loop
  if (slideIndex >= slides.length) {
    slideIndex = slides.length - 1; 
    return; // 
  }

  // Continue changing image every 3 seconds, but stop at the last slide
  setTimeout(showSlides, 5000);
}