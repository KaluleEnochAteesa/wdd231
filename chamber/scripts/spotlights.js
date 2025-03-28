const members = [
    {
        "name": "Idaho Websites",
        "address": "2115 S Vista Avenue, Boise ID 83705",
        "phone": "(208) 342-9386",
        "website": "https://idahowebsites.com/",
        "image": "images/idaho.webp"
    },
    {
        "name": "Surge Web Design",
        "address": "4072 E Arch Drive, Meridian ID 83646",
        "phone": "(208) 631-0640",
        "website": "https://www.surgewebdesign.com/",
        "image": "images/surge.webp"
    },
    {
        "name": "Graphic Zen",
        "address": "1788 E Summerplace Court, Meridian ID 83646",
        "phone": "(208) 631-4984",
        "website": "https://graphiczen.com/",
        "image": "images/zen.webp"
    },
    {
        "name": "Rocket Web Development",
        "address": "3103 W Bannock Street, Boise ID 83702",
        "phone": "(208) 555-1234",
        "website": "https://rocketwebdev.com/",
        "image": "images/rocket.webp"
    },
    {
        "name": "Boise Creative Studio",
        "address": "5122 N Glenwood Street, Boise ID 83714",
        "phone": "(208) 777-4567",
        "website": "https://boisecreativestudio.com/",
        "image": "images/boise.webp"
    },
    {
        "name": "Zenith Web Solutions",
        "address": "8650 N Fairview Avenue, Boise ID 83704",
        "phone": "(208) 888-9876",
        "website": "https://zenithwebsolutions.com/",
        "image": "images/zenith.webp"
    },
    {
        "name": "Elevate Designs",
        "address": "4001 W Overland Road, Boise ID 83705",
        "phone": "(208) 321-6543",
        "website": "https://elevatedesigns.com/",
        "image": "images/elevate.webp"
    },
    {
        "name": "Aspire Digital Studio",
        "address": "2450 S Apple Street, Boise ID 83706",
        "phone": "(208) 999-5555",
        "website": "https://aspiredigitalstudio.com/",
        "image": "images/aspire.webp"
    }
];

function getSpotlights() {
    const container = document.getElementById('spotlight-container');

    // Randomly select 2 members from the array
    const selectedMembers = members.sort(() => Math.random() - 0.5).slice(0, 2);

    // Render the spotlight cards
    container.innerHTML = selectedMembers.map(member => `
        <div class="spotlight-card">
            <img src="${member.image}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        </div>
    `).join('');
}

// Call the function to populate the spotlights on page load
getSpotlights();
