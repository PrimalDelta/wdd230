// Function to set the current year and the last modified date
function setDateInformation() {
    const currentYearSpan = document.querySelector('#currentYear');
    const lastModifiedParagraph = document.querySelector('#lastModified');

    // Set the current year
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = `© ${currentYear}`;

    // Set the last modified date from the document object
    lastModifiedParagraph.textContent = `Last Updated: ${document.lastModified}`;
}

// Call the function to set the date information
setDateInformation();