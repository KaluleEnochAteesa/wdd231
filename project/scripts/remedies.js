document.addEventListener('DOMContentLoaded', function() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = document.lastModified;
    }

    // Check for existing remedies in localStorage
    let remedies = JSON.parse(localStorage.getItem('remedies'));

    if (!remedies) {
        // If there are no remedies, initialize with default remedies
        remedies = [
            {
                remedyName: "Herbal Tea for Cold",
                ingredients: "Ginger, Lemon, Honey, Hot Water",
                preparation: "Boil water, add sliced ginger, lemon juice, and honey. Stir well and let it sit for 5 minutes.",
                ailment: "Cold and Cough",
                developer: "Tea Chef - Shifu Xu",
                approvalStatus: "Pending",
                royalties: false
            },
            {
                remedyName: "Aloe Vera Gel for Burns",
                ingredients: "Fresh Aloe Vera Leaves",
                preparation: "Extract the gel from fresh aloe vera leaves. Apply the gel to the affected area.",
                ailment: "Burns and Skin Irritations",
                developer: "Skin technician - Margeret Sacha",
                approvalStatus: "Approved",
                royalties: true
            },
            {
                remedyName: "Turmeric Paste for Inflammation",
                ingredients: "Turmeric Powder, Water",
                preparation: "Mix turmeric powder with water to form a paste. Apply the paste to the inflamed area.",
                ailment: "Inflammation and Pain Relief",
                developer: "Jerry specialist - Bumpy Johnson",
                approvalStatus: "Pending",
                royalties: false
            }
        ];

        // Save the default remedies to localStorage
        localStorage.setItem('remedies', JSON.stringify(remedies));
    }

    const tableBody = document.querySelector('#remedies-table tbody');

    remedies.forEach(function(remedy) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td data-label="Remedy Name">${remedy.remedyName}</td>
            <td data-label="Ingredients">${remedy.ingredients}</td>
            <td data-label="Preparation Method">${remedy.preparation}</td>
            <td data-label="Ailment Healed">${remedy.ailment}</td>
            <td data-label="Developer's Details">${remedy.developer}</td>
            <td data-label="Scientific Approval">${remedy.approvalStatus}</td>
            <td data-label="Receiving Royalties">${remedy.royalties ? "Yes" : "No"}</td>
        `;

        tableBody.appendChild(row);
    });

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
