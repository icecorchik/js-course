const products = [
    { id: 1, name: 'Клавиатура', price: 1250 },
    { id: 2, name: 'Мышь', price: 790 },
    { id: 3, name: 'Коврик', price: 430 },
];

const cart = new Map();
const list = document.getElementById('list');
const countElement = document.getElementById('count');
const totalElement = document.getElementById('total');
const clearButton = document.getElementById('clear');

function createCard(product) {
    const li = document.createElement('li');
    li.className = 'product';
    li.dataset.id = product.id;

    const price = document.createElement('span');
    price.className = 'price';
    price.textContent = `${product.price} ₽`;

    const minus = document.createElement('button');
    minus.className = 'minus';
    minus.type = 'button';
    minus.textContent = '−';
    minus.disabled = true;

    const quantity = document.createElement('b');
    quantity.className = 'qty';
    quantity.textContent = '0';

    const plus = document.createElement('button');
    plus.className = 'plus';
    plus.type = 'button';
    plus.textContent = '+';

    const remove = document.createElement('button');
    remove.className = 'delete';
    remove.type = 'button';
    remove.textContent = 'Удалить';

    li.append(document.createTextNode(`${product.name} `), price, minus, quantity, plus, remove);
    return li;
}

function updateCard(li, id) {
    const qty = cart.get(id) ?? 0;
    li.querySelector('.qty').textContent = qty;
    li.querySelector('.minus').disabled = qty === 0;
}

function updateSummary() {
    let count = 0;
    let total = 0;

    for (const [id, qty] of cart) {
        count += qty;
        const product = products.find((item) => item.id === id);
        if (product) total += product.price * qty;
    }

    countElement.textContent = count;
    totalElement.textContent = total;
}

for (const product of products) {
    list.append(createCard(product));
}

list.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    const li = button.closest('li');
    if (!li) return;

    const id = Number(li.dataset.id);
    const qty = cart.get(id) ?? 0;

    if (button.classList.contains('plus')) cart.set(id, qty + 1);
    if (button.classList.contains('minus') && qty > 0) cart.set(id, qty - 1);
    if (button.classList.contains('delete')) cart.delete(id);

    updateCard(li, id);
    updateSummary();
});

clearButton.addEventListener('click', () => {
    cart.clear();
    for (const li of list.querySelectorAll('li')) {
        updateCard(li, Number(li.dataset.id));
    }
    updateSummary();
});

updateSummary();
