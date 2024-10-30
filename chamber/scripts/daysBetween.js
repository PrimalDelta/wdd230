document.addEventListener("DOMContentLoaded", function() {
    const lastVisitKey = 'lastVisitDate';
    const daysBetweenVisitsElement = document.getElementById('days-between-visits');

    const currentDate = new Date();

    
    const lastVisitDate = localStorage.getItem(lastVisitKey);

    if (lastVisitDate) {
        
        const lastVisit = new Date(lastVisitDate);
        const timeDifference = currentDate - lastVisit;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        
        daysBetweenVisitsElement.textContent = daysDifference;
    } else {
        
        daysBetweenVisitsElement.textContent = 0;
    }

    
    localStorage.setItem(lastVisitKey, currentDate.toISOString());
});