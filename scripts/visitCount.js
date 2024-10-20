        // Function to update the visit counter
        function updateVisitCounter() {
            // Get the current visit count from localStorage
            let visitCount = localStorage.getItem('visitCount');
            
            // If no visit count exists, initialize it to 0
            if (!visitCount) {
                visitCount = 0;
            }

            // Increment the visit count
            visitCount++;

            // Save the updated visit count back to localStorage
            localStorage.setItem('visitCount', visitCount);

            // Update the visit counter display
            document.getElementById('visit-counter').innerText = `Page visits: ${visitCount}`;
        }

        // Call the function to update the visit counter on page load
        updateVisitCounter();