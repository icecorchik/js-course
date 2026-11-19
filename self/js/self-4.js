let state = {
    products: [
        { id: 1, name: 'Клавиатура', price: 1250 },
        { id: 2, name: 'Мышь', price: 790 },
        { id: 3, name: 'Коврик', price: 430 },
    ],
    cart: {},
    search: '',
};

const app = document.getElementById('app');

function el(tag, props = {}, ...children) {
    const node = document.createElement(tag);
    Object.assign(node, props);
    node.append(...children);
    return node;
}

function render(s) {
    const visible = s.products.filter((product) =>
        product.name.toLowerCase().includes(s.search.toLowerCase())
    );
    const count = Object.values(s.cart).reduce((sum, qty) => sum + qty, 0);
    const total = s.products.reduce((sum, product) =>
        sum + product.price * (s.cart[product.id] ?? 0), 0
    );

    const rows = visible.map((product) => {
        const qty = s.cart[product.id] ?? 0;
        const li = el('li', { className: 'product' },
            document.createTextNode(`${product.name} `),
            el('span', { className: 'price' }, `${product.price} ₽`),
            el('button', { className: 'minus', type: 'button', disabled: qty === 0 }, '−'),
            el('b', { className: 'qty' }, String(qty)),
            el('button', { className: 'plus', type: 'button' }, '+'),
            el('button', { className: 'delete', type: 'button' }, 'Удалить')
        );
        li.dataset.id = product.id;
        return li;
    });

    app.replaceChildren(
        el('header', { className: 'header' },
            el('input', { id: 'search', value: s.search, placeholder: 'Поиск' }),
            el('span', { className: 'logo' }, `Корзина: ${count}`),
            el('button', { id: 'clear', type: 'button' }, 'Очистить корзину')
        ),
        el('main', {},
            el('ul', { className: 'products' }, ...rows),
            el('p', {}, `Итого: ${total} ₽`)
        )
    );
}

function setState(patch) {
    state = { ...state, ...patch };
    render(state);
}

app.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    if (button.id === 'clear') {
        setState({ cart: {} });
        return;
    }

    const li = button.closest('li');
    if (!li) return;
    const id = Number(li.dataset.id);
    const qty = state.cart[id] ?? 0;
    const nextCart = { ...state.cart };

    if (button.classList.contains('plus')) nextCart[id] = qty + 1;
    if (button.classList.contains('minus')) nextCart[id] = Math.max(0, qty - 1);
    if (button.classList.contains('delete')) delete nextCart[id];

    setState({ cart: nextCart });
});

app.addEventListener('input', (event) => {
    if (event.target.id === 'search') {
        setState({ search: event.target.value });
    }
});

render(state);
