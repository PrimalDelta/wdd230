document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("meet-greet-banner");
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (today >= 1 && today <= 3) { // Show banner on Monday (1), Tuesday (2), and Wednesday (3)
        setTimeout(() => {
            banner.style.display = "block";
        }, 5000); // Delay in milliseconds (5000ms = 5 seconds)
    }
});

function closeBanner() {
    const banner = document.getElementById("meet-greet-banner");
    banner.style.display = "none";
}