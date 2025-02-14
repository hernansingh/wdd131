const products = [
{
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
},
{
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
},
{
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
},
{
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
},
{
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
}
];

const selectField = document.getElementById("productSelect");

function createProduct(productsNames) {
    productsNames.forEach((product) => {
        const selectOption = document.createElement('option');
        selectOption.value = product.id;
        selectOption.textContent = product.name;
        selectField.appendChild(selectOption);
    });
}

createProduct(products);


let counter = parseInt(localStorage.getItem('reviewCounter')) || 0;
counter += 1;
localStorage.setItem('reviewCounter', counter);

const paragraphOfIntents = document.getElementById("numbers-of-intents")

paragraphOfIntents.innerHTML = counter;


document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;