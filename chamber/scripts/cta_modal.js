// Get the modal
var modal = document.getElementById('cta-modal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Open the modal after a set time (e.g., 5 seconds) when the page loads
window.onload = function() {
  setTimeout(function() {
    modal.style.display = 'block';
  }, 5000); // Time in milliseconds before the modal pops up
}
