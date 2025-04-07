// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data
    fetch('data/items.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('cards-container'); // Target the container
            data.forEach(item => {
                // Create a card for each item
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h2>${item.name}</h2>
                    <figure>
                        <img src="images/${item.image}" alt="${item.name}" loading="lazy">
                        <figcaption>${item.description}</figcaption>
                    </figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button>Learn More</button>
                `;
                container.appendChild(card); // Add the card to the container
            });
        })
        .catch(error => console.error('Error loading JSON:', error));

    // Visitor message logic using localStorage
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const sidebarMessage = document.getElementById('sidebar-message');

    if (!lastVisit) {
        sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const difference = now - lastVisit;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        if (days < 1) {
            sidebarMessage.textContent = "Back so soon! Awesome!";
        } else {
            sidebarMessage.textContent = `You last visited ${days} ${days === 1 ? 'day' : 'days'} ago.`;
        }
    }

    // Update the last visit date
    localStorage.setItem('lastVisit', now);
});
