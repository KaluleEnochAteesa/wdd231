document.addEventListener("DOMContentLoaded", () => {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const display = document.querySelector("#directory");
    const footerDate = document.querySelector("#mod-date");

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    function displayMembers(members) {
        let html = "";
        members.forEach(member => {
            html += `
                <section>
                    <img src="${member.image}" alt="${member.name}" width="100px">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </section>`;
        });
        display.innerHTML = html;
    }

    gridButton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listButton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
    });

    // Display current year and last modified date
    footerDate.textContent = `Last updated: ${document.lastModified}`;
    fetchMembers();
});
