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