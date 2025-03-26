const members = [
    { name: 'Business 1', logo: 'logo1.png', phone: '123-456-7890', address: '123 Main St', website: 'http://business1.com', level: 'Gold' },
    { name: 'Business 2', logo: 'logo2.png', phone: '987-654-3210', address: '456 Another St', website: 'http://business2.com', level: 'Silver' },
    { name: 'Business 3', logo: 'logo3.png', phone: '456-789-1230', address: '789 Another St', website: 'http://business3.com', level: 'Bronze' }
];

function getSpotlights() {
    const container = document.getElementById('spotlight-container');
    const goldAndSilver = members.filter(member => member.level === 'Gold' || member.level === 'Silver');
    const spotlights = goldAndSilver.sort(() => 0.5 - Math.random()).slice(0, 2);

    container.innerHTML = spotlights.map(member => `
        <div class="spotlight-card">
            <img src="images/${member.logo}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.level}</p>
        </div>
    `).join('');
}

getSpotlights();
