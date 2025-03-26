const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets); // Pass the array of prophets
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements for card
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // Populate elements with data
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} – ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements to card
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Append card to container
    cards.appendChild(card);
  });
}

// Initialize data fetching
getProphetData();
