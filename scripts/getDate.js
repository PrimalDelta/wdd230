window.onload = function() { 
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);


    document.getElementById('lastModified').innerText = " Last modified: " + formattedDate;
};