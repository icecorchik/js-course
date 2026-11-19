let state = {
    products: [
        { id: 1, name: 'Клавиатура', price: 1250 },
        { id: 2, name: 'Мышь', price: 790 },
        { id: 3, name: 'Коврик', price: 430 },
    ],
    cart: {},
    search: '',
    sort: 'asc',
};

const cards = new Map();
let created = 0;
let updated = 0;
const list = document.getElementById('list');

function createCard(product) {
    const li = document.createElement('li');
    li.className = 'product';
    li.dataset.id = product.id;

    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = `${product.name} ${product.price} ₽`;

    const minus = document.createElement('button');
    minus.className = 'minus';
    minus.type = 'button';
    minus.textContent = '−';
    minus.disabled = true;

    const qty = document.createElement('b');
    qty.className = 'qty';
    qty.textContent = '0';

    const plus = document.createElement('button');
    plus.className = 'plus';
    plus.type = 'button';
    plus.textContent = '+';

    const remove = document.createElement('button');
    remove.className = 'delete';
    remove.type = 'button';
    remove.textContent = 'Удалить';

    li.append(name, minus, qty, plus, remove);
    created++;
    return li;
}

function updateCard(li, qty) {
    const qtyElement = li.querySelector('.qty');
    if (qtyElement.textContent !== String(qty)) {
        qtyElement.textContent = qty;
        li.querySelector('.minus').disabled = qty === 0;
        updated++;
    }
}

function render(s) {
    const visible = s.products.filter((product) =>
        product.name.toLowerCase().includes(s.search.toLowerCase())
    );
    visible.sort((a, b) => s.sort === 'asc' ? a.price - b.price : b.price - a.price);
    const visibleIds = new Set(visible.map((product) => product.id));

    for (const [id, li] of cards) {
        if (!visibleIds.has(id)) {
            li.remove();
            cards.delete(id);
        }
    }

    visible.forEach((product, index) => {
        let li = cards.get(product.id);
        if (!li) {
            li = createCard(product);
            cards.set(product.id, li);
        }

        updateCard(li, s.cart[product.id] ?? 0);
        if (list.children[index] !== li) {
            list.insertBefore(li, list.children[index] ?? null);
        }
    });

    const count = Object.values(s.cart).reduce((sum, qty) => sum + qty, 0);
    const total = s.products.reduce((sum, product) =>
        sum + product.price * (s.cart[product.id] ?? 0), 0
    );
    document.getElementById('count').textContent = count;
    document.getElementById('total').textContent = total;
    console.log(`render: создано ${created}, обновлено ${updated}`);
}

function setState(patch) {
    state = { ...state, ...patch };
    render(state);
}

list.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    const li = event.target.closest('li');
    if (!button || !li) return;

    const id = Number(li.dataset.id);
    const qty = state.cart[id] ?? 0;
    const nextCart = { ...state.cart };

    if (button.classList.contains('plus')) nextCart[id] = qty + 1;
    if (button.classList.contains('minus')) nextCart[id] = Math.max(0, qty - 1);
    if (button.classList.contains('delete')) delete nextCart[id];

    setState({ cart: nextCart });
});

document.getElementById('search').addEventListener('input', (event) => {
    setState({ search: event.target.value });
});

document.getElementById('sort').addEventListener('click', () => {
    setState({ sort: state.sort === 'asc' ? 'desc' : 'asc' });
});

render(state);
