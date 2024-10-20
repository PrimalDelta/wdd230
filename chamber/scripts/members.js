document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.querySelector('.members-container');
    const toggleViewButton = document.querySelector('#toggle-view');
  
    fetch('../chamber/data/members.json')
      .then(response => response.json())
      .then(data => {
        displayMembers(data, 'grid');
      });
  
    toggleViewButton.addEventListener('click', () => {
      const currentView = membersContainer.classList.contains('grid-view') ? 'grid' : 'list';
      const newView = currentView === 'grid' ? 'list' : 'grid';
      displayMembers(data, newView);
    });
  
    function displayMembers(members, view) {
      membersContainer.innerHTML = '';
      membersContainer.classList.toggle('grid-view', view === 'grid');
      membersContainer.classList.toggle('list-view', view === 'list');
  
      members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
          <img src="../chamber/images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">${member.website}</a>
          <p>${member.membershipLevel}</p>
          <p>${member.description}</p>
        `;
        membersContainer.appendChild(memberCard);
      });
    }
  });