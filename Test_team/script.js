const parts = [

    {
        name: "AMD Ryzen 9 9950 X3D",
        category: "CPU",
        price: "899.99",
        brand: "AMD",
        image: "images/ryzen-9-9950-x3d.jpg"
    },
    
    {
        name: "NVIDA RTX 5090",
        category: "GPU",
        price: "4599.99",
        brand: "NVIDIA",
        image: "images/rtx-5090.jpg"
    },

    {
        name: "Asus ROG CROSSHAIR X870E GLACIAL EATX",
        category: "Motherboard",
        price: "1199.99",
        brand: "Asus",
        image: "images/asus-rog-crosshair-x870e-glacial-eatx-am5.jpg"
    },

    {
        name: "G.SKILL Trident x5 256GB (4 x 64GB) DDR5-6000",
        category: "RAM",
        price: "5979.99",
        brand: "G.SKILL",
        image: "images/gskill-trident-x5.jpg"
    },

    {
        name: "Samsung 9100 PRO 8 TB",
        category: "Storage",
        price: "2423.01",
        brand: "Samsung",
        image: "images/samsung-9100-pro-8tb.jpg"
    },

    {
        name: "HYTE Y70 Touch Infinte",
        category: "Case",
        price: "369.99",
        brand: "HYTE",
        image: "images/hyte-y70-touch-infinite.jpg"
    },
    
    
    {
        name: "AMD Ryzen 5 7600X",
        category: "CPU",
        price: "163.00",
        brand: "AMD",
        image: "images/ryzen-5-7600x.jpg"
    },

    {
        name: "NVIDIA RTX 3060",
        category: "GPU",
        price: "349.99",
        brand: "NVIDIA",
        image: "images/rtx-3060.jpg"
    },

    {
        name: "NVIDIA GTX 1660 Super",
        category: "GPU",
        price: "169.00",
        brand: "NVIDIA",
        image: "images/gtx-1660-super.jpg"
    },

    {
        name: "Corsair Vengeance RGB 32 GB",
        category: "RAM",
        price: "499.99",
        brand: "Corsair",
        image: "images/corsair-vengeance-rgb-32gb.jpg"
    },

    {
        name: "Corsair 4000D Airflow",
        category: "Case",
        price: "0.00",
        brand: "Corsair",
        image: "images/corsair-4000d-airflow.jpg"
    },

    {
        name: "Lian Li O11 VISION COMPACT",
        category: "Case",
        price: "149.99",
        brand: "Lian Li",
        image: "images/lian-li-o11-vision-compact.jpg"
    },

    {
        name: "Intel Core i7-14700K",
        category: "CPU",
        price: "379.99",
        brand: "Intel",
        image: "images/intel-core-i7-14700k.jpg"
    },

    {
        name: "AMD Ryzen 7 5700X",
        category: "CPU",
        price: "254.99",
        brand: "AMD",
        image: "images/amd-ryzen-7-5700x.jpg"
    },

    {
        name: "Kingston FURY Beast RGB 32 GB",
        category: "RAM",
        price: "539.00",
        brand: "Kingston",
        image: "images/kingston-fury-beast-rgb-32gb.jpg"
    },

    {
        name: "Kingston FURY Beast RGB 16 GB",
        category: "RAM",
        price: "259.99",
        brand: "Kingston",
        image: "images/kingston-fury-beast-rgb-16gb.jpg"
    },

    {
        name: "AMD Radeon RX 9070",
        category: "GPU",
        price: "669.99",
        brand: "AMD",
        image: "images/amd-radeon-rx-9070.jpg"
    },

    {
        name: "Samsung 990 Pro 2 TB",
        category: "Storage",
        price: "0.00",
        brand: "Samsung",
        image: "images/samsung-990-pro-2tb.jpg"
    },

    {
        name: "Crucial P310 1TB",
        category: "Storage",
        price: "209.99",
        brand: "Crucial",
        image: "images/crucial-p310.jpg"
    },

    {
        name: "Samsung 990 Pro 1 TB",
        category: "Storage",
        price: "239.99",
        brand: "Samsung",
        image: "images/samsung-990-pro-1tb.jpg"
    },

    {
        name: "MSI MAG B850 TOMAHAWK MAX WIFI",
        category: "Motherboard",
        price: "209.99",
        brand: "MSI",
        image: "images/msi-mag-b850-tomahawk-wifi.jpg"
    },

    {
        name: "Asus PRIME B550M-A WIFI II",
        category: "Motherboard",
        price: "117.99",
        brand: "Asus",
        image: "images/asus-prime-b550m-a-wifi.jpg"
    }

];


const componentList =
    document.querySelector("#component-list");

const componentsHeading =
    document.querySelector("#pc-builder-heading");

const componentCount =
    document.querySelector("#component-count");

const searchInput =
    document.querySelector("#search");

const categoryFilter =
    document.querySelector("#category-filter");

const resetButton =
    document.querySelector("#reset-filters");



function createComponentCard(component) {

    const article =
        document.createElement("article");

    article.classList.add("component-card");

    const name =
        document.createElement("h3");

    name.textContent =
        component.name;


    const category =
        document.createElement("p");

    category.textContent =
        `Category: ${component.category}`;


    const price =
        document.createElement("p");

    price.textContent =
        `Price: $${component.price}`;

    const brand =
        document.createElement("p");

    brand.textContent =
        `Brand: ${component.brand}`;


    const button =
        document.createElement("button");

    button.textContent =
        "View Component";

        
    const image =
        document.createElement("img")

    image.src =
        component.image

    image.alt = 
        component.name


    // Listen for a click on this card's button.
    button.addEventListener(
        "click",
        function() {

            alert(
                `${component.name}\n\n` +
                `Category: ${component.category}\n` +
                `Price: $${component.price}\n` +
                `Brand: ${component.brand}`
            );

        }
    );

    article.appendChild(image);
    article.appendChild(name);
    article.appendChild(category);
    article.appendChild(price);
    article.appendChild(brand);
    article.appendChild(button);

    return article;
}

function displayComponents(parts) {

    // Remove the previous cards before rendering again.
    componentList.innerHTML = "";


    // Correct singular/plural wording.
    const componentWord =
        parts.length === 1
            ? "component"
            : "components";

    componentCount.textContent =
        `${parts.length} ${componentWord} found`;


    // If there are no matching components,
    // give the user a helpful message.
    if (parts.length === 0) {

        const message =
            document.createElement("p");

        message.classList.add("no-results");

        message.textContent =
            "No components match your search.";

        componentList.appendChild(message);

        return;
    }


    // Create and display a card for every component.
    parts.forEach(
        function(component) {

            const card =
                createComponentCard(component);

            componentList.appendChild(card);

        }
    );
}


// --------------------------------
// FILTER COMPONENTS
// --------------------------------

function filterComponents() {

    // Read current search text.
    // Lowercase it so matching is case-insensitive.
    // trim() removes extra spaces.
    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    // Read the selected category.
    const selectedCategory =
        categoryFilter.value;


    // Useful while learning/debugging.
    console.log("Search:", searchText);
    console.log("Category:", selectedCategory);


    // filter() returns a NEW array.
    const matchingComponents =
        parts.filter(
            function(component) {

                // SEARCH CONDITION
                //
                // Match name, category, brand
                const matchesSearch =

                    component.name
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    component.category
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    component.brand
                        .toLowerCase()
                        .includes(searchText);


                // CATEGORY CONDITION
                //
                // "all" accepts every category.
                const matchesCategory =

                    selectedCategory === "all"

                    ||

                    component.category ===
                    selectedCategory;


                // Both conditions must be true.
                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    console.log(
        "Matching components:",
        matchingComponents
    );


    // Re-render only the matching components.
    displayComponents(matchingComponents);
}


// --------------------------------
// EVENT LISTENERS
// --------------------------------

// "input" fires as the user types.
searchInput.addEventListener(
    "input",
    filterComponents
);


// "change" fires when a different
// category is selected.
categoryFilter.addEventListener(
    "change",
    filterComponents
);


// Reset the controls and display all components.
resetButton.addEventListener(
    "click",
    function() {

        searchInput.value = "";

        categoryFilter.value = "all";

        displayComponents(parts);

        searchInput.focus();
    }
);


// --------------------------------
// APPLICATION STARTUP
// --------------------------------

componentsHeading.textContent =
    "Available Components";


// Show every component when the page first loads.
displayComponents(parts);
