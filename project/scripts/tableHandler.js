document.addEventListener('DOMContentLoaded', function() {
    const remedies = JSON.parse(localStorage.getItem('remedies')) || [];

    const tableBody = document.querySelector('#remedies-table tbody');

    remedies.forEach(function(remedy) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${remedy.remedyName}</td>
            <td>${remedy.ingredients}</td>
            <td>${remedy.preparation}</td>
            <td>${remedy.ailment}</td>
            <td>${remedy.developer}</td>
        `;

        tableBody.appendChild(row);
    });
});
