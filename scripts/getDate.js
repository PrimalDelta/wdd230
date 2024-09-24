window.onload = function() { // Ensure the DOM is fully loaded before running the script
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

    // Set the inner text of the <p> element with the ID "lastModified"
    document.getElementById('lastModified').innerText = " Last modified: " + formattedDate;
};