function toggleMenu() {
  var menu = document.getElementById("menuItems");
  var hamburger = document.querySelector(".hamburger");
  
  // Check if the 'active' class is present
  if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      hamburger.innerHTML = "☰"; // Hamburger icon
  } else {
      menu.classList.add("active");
      hamburger.innerHTML = "×"; // 'X' icon
  }
}

document.getElementById('sidebarToggle').addEventListener('click', function() {
  var sidebar = document.getElementById('sidebar');
  if (sidebar.style.right === '0px') {
      sidebar.style.right = '-250px'; // Hide the sidebar off-screen
  } else {
      sidebar.style.right = '0'; // Show the sidebar
  }
});