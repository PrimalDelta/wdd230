async function fetchMembers() {
    const membersUrl = '../data/members.json';

    try {
        const response = await fetch(membersUrl);
        const membersData = await response.json();

        const spotlightContainer = document.getElementById('spotlight-container');
        spotlightContainer.innerHTML = ''; // Clear any existing content

        const spotlightMembers = membersData.filter(member => member.membershipLevel === 'silver' || member.membershipLevel === 'gold');

        spotlightMembers.slice(0, 3).forEach(member => {
            const memberArticle = document.createElement('article');
            memberArticle.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.description}</p>
            `;
            spotlightContainer.appendChild(memberArticle);
        });

    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchMembers);