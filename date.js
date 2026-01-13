document.addEventListener("DOMContentLoaded", function() {
    // Automatically fetches the last save date of your file
    const lastMod = new Date(document.lastModified);
    
    // Formats it to a nice readable style
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = lastMod.toLocaleDateString('en-US', options);
    
    // Updates the HTML element
    const lastModElement = document.getElementById('last-modified');
    if (lastModElement) {
        lastModElement.textContent = formattedDate;
    }
});