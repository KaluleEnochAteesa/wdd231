document.getElementById('remedy-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const remedyName = document.getElementById('remedy-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const preparation = document.getElementById('preparation').value;
    const ailment = document.getElementById('ailment').value;
    const developer = document.getElementById('developer').value;
    const approvalStatus = document.getElementById('approval-status').value;
    const royalties = document.getElementById('royalties').checked;

    const remedy = {
        remedyName,
        ingredients,
        preparation,
        ailment,
        developer,
        approvalStatus,
        royalties
    };

    let remedies = JSON.parse(localStorage.getItem('remedies')) || [];
    remedies.push(remedy);
    localStorage.setItem('remedies', JSON.stringify(remedies));

    window.location.href = 'remedies.html';
});