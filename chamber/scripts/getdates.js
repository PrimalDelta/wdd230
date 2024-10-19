document.addEventListener("DOMContentLoaded", function(event) { 
    var lastMod = new Date(document.lastModified);
    var formattedDate = lastMod.toLocaleDateString("en-US") + " " + lastMod.toLocaleTimeString("en-US");
    document.getElementById('last-modified-date').textContent = formattedDate;
});