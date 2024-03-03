function toggleMenu() {
  var menu = document.getElementById("menuItems");
  var hamburger = document.querySelector(".hamburger");
  
  if (menu.style.display === "block") {
      menu.style.display = "none";
      hamburger.innerHTML = "☰"; // Hamburger icon
  } else {
      menu.style.display = "block";
      hamburger.innerHTML = "×"; // 'X' icon
  }
}
