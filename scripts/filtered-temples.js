document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('open');
    nav.classList.toggle('open');
});

const temples = [
    {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
    templeName: "Yigo Guam Temple",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
    templeName: "Washington D.C. Temple",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
    templeName: "Lima Perú Temple",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
    templeName: "Mexico City Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Temple",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
    },
    {
        templeName: "Córdoba Argentina Temple",
        location: "Cordoba, Argentina",
        dedicated: "2015, May, 17",
        area: 34369,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093-main.jpg"
    },
    {
        templeName: "Mendoza Argentina Temple",
        location: "Mendoza, Argentina",
        dedicated: "2024, September, 22",
        area: 21999,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51739-main.jpg"
    },
];

const templeContainer = document.getElementById('temples-container');

function createElementCard(filteredTemples) {
    templeContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos templos
    filteredTemples.forEach((temple) => {
        const card = document.createElement('figure');
        card.classList.add('figure');

        const cardImage = document.createElement('img')
        cardImage.src = temple.imageUrl;
        cardImage.alt = temple.templeName;
        cardImage.classList.add('img');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = temple.templeName;

        const cardLocation = document.createElement('p');
        cardLocation.textContent = `Location: ${temple.location}`;

        const cardDedicated = document.createElement('p');
        cardDedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const cardArea = document.createElement('p');
        cardArea.textContent = `Size: ${temple.area} square feet`;

        cardBody.append(cardTitle, cardLocation, cardDedicated, cardArea);
        card.append(cardBody, cardImage);

        templeContainer.appendChild(card);

        setTimeout(() => {card.classList.add('visible')}, 10)});
}

createElementCard(temples);

const homeFilter = document.getElementById("filter-1");
const oldFilter = document.getElementById("filter-2");
const newFilter = document.getElementById("filter-3");
const largeFilter = document.getElementById("filter-4");
const smallFilter = document.getElementById("filter-5");

oldFilter.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 2000);
    createElementCard(oldTemples);
});

homeFilter.addEventListener("click", () => {
    createElementCard(temples); // Mostrar todos los templos
});

newFilter.addEventListener("click", () => {
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    createElementCard(newTemples);
});

largeFilter.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 50000);
    createElementCard(largeTemples);
});

smallFilter.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 50000);
    createElementCard(smallTemples);
});

