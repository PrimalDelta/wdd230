const baseURL = "https://primaldelta.github.io/wdd230/";
const linksURL = "https://primaldelta.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        if (Array.isArray(data.weeks)) {
            displayLinks(data.weeks);
        } else {
            console.error('Expected an array but got:', typeof data.weeks);
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to build out the available activity links
function displayLinks(weeks) {
    console.log('displayLinks called with weeks:', weeks); // Log weeks data
    const learningActivitiesCard = document.querySelector('#learning-activities');
    console.log('learningActivitiesCard:', learningActivitiesCard); // Log the selected element
    
    if (!learningActivitiesCard) {
        console.error('Element with id "learning-activities" not found');
        return;
    }

    weeks.forEach(week => {
        const h3 = document.createElement('h3');
        h3.textContent = week.week;
        h3.style.textAlign = 'center';
        h3.style.color = 'white';
        h3.style.fontSize = '1.2rem';
        h3.style.marginTop = '1rem';
        learningActivitiesCard.appendChild(h3);

        const ul = document.createElement('ul');
        ul.style.listStyleType = 'none';
        ul.style.padding = '0';
        ul.style.margin = '0';

        week.links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.title;
            a.target = "_blank";
            a.style.color = 'black';
            a.style.display = 'block';
            a.style.textAlign = 'center';
            a.style.padding = '1rem';
            a.style.textDecoration = 'none';
            a.style.backgroundColor = 'white';
            a.style.border = '1px solid black';
            a.style.borderRadius = '8px';
            a.style.marginBottom = '8px';
            a.addEventListener('mouseover', () => {
                a.style.outline = '1px solid white';
                a.style.backgroundColor = 'white';
            });
            a.addEventListener('mouseout', () => {
                a.style.outline = 'none';
                a.style.backgroundColor = 'white';
            });
            li.appendChild(a);
            ul.appendChild(li);
        });

        learningActivitiesCard.appendChild(ul);
    });
}

// Call the function to test it
getLinks();