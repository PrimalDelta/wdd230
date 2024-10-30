async function fetchMembers() {
    const membersUrl = 'https://primaldelta.github.io/wdd230/chamber/data/members.json';

    try {
        const response = await fetch(membersUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const membersData = await response.json();
        console.log('Members data:', membersData);

        const spotlightContainer = document.getElementById('spotlight-container');
        spotlightContainer.innerHTML = ''; // Clear any existing content

        const spotlightMembers = membersData.filter(member => member.membershipLevel.toLowerCase() === 'silver' || member.membershipLevel.toLowerCase() === 'gold');
        console.log('Spotlight members:', spotlightMembers);

        spotlightMembers.slice(0, 2).forEach(member => {
            const memberArticle = document.createElement('article');
            memberArticle.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.description}</p>
                <img src="${member.image}" alt="${member.name}">
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            `;
            spotlightContainer.appendChild(memberArticle);
        });

    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchMembers);