const menu = document.querySelector('.menu');

// Fetch data from the API
const getData = async () => {
    try {
        const response = await fetch("http://localhost:4000/api/workouts/");
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

// Create card structure for a menu item
const createCard = (menuItem) => {
    const col = document.createElement('div');
    const card = document.createElement('div');

    col.classList.add('cols', 'col-lg-4');
    card.classList.add('card', 'menu-item', 'mb-3');

    card.append(createCardBody(menuItem.title, menuItem.reps, menuItem.load));
    card.append(createCardFooter(menuItem.price));
    col.append(card);

    return col;
};

// Create the card body
const createCardBody = (title, category, description) => {
    const div = document.createElement('div');
    const h5 = document.createElement('h5');
    const h6 = document.createElement('h6');
    const p = document.createElement('p');

    div.classList.add('card-body');
    h5.classList.add('card-title');
    h6.classList.add('card-subtitle', 'mb-2', 'text-body-secondary');
    p.classList.add('card-text', 'fw-light');

    h5.innerText = title; // Corrected variable names
    h6.innerText = category;
    p.innerText = description;

    div.append(h5, h6, p);
    return div;
};

// Create the card footer
const createCardFooter = (price) => {
    const div = document.createElement('div');
    const small = document.createElement('small');

    div.classList.add('card-footer');
    small.classList.add('fw-bold');
    small.innerText = `P${price}.00`;

    div.append(small);
    return div;
};

// Fetch and render menu items
getData().then(result => {
    result.forEach(menuItem => {
        menu.append(createCard(menuItem));
    });
}).catch(err => {
    console.error("Error rendering menu items:", err);
});
