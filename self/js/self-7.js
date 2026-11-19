class ProductCard extends HTMLElement {
    static observedAttributes = ['name', 'price', 'qty'];

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        if (oldValue === newValue || !this.isConnected) return;
        this.render();
        this.dispatchEvent(new CustomEvent('product-attribute-change', {
            bubbles: true,
            detail: { attribute, oldValue, newValue },
        }));
    }

    render() {
        const name = this.getAttribute('name') ?? '';
        const price = Number(this.getAttribute('price') ?? 0);
        const qty = Number(this.getAttribute('qty') ?? 0);

        const title = document.createElement('span');
        title.className = 'name';
        title.textContent = `${name} ${price} ₽ `;

        const minus = document.createElement('button');
        minus.className = 'minus';
        minus.type = 'button';
        minus.textContent = '−';
        minus.disabled = qty === 0;

        const quantity = document.createElement('b');
        quantity.className = 'qty';
        quantity.textContent = String(qty);

        const plus = document.createElement('button');
        plus.className = 'plus';
        plus.type = 'button';
        plus.textContent = '+';

        const remove = document.createElement('button');
        remove.className = 'delete';
        remove.type = 'button';
        remove.textContent = 'Удалить';

        this.replaceChildren(title, minus, quantity, plus, remove);
    }
}

customElements.define('product-card', ProductCard);

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

const list = document.getElementById('list');
const cards = new Map();

function createCard(product) {
    const card = document.createElement('product-card');
    card.dataset.id = product.id;
    card.setAttribute('name', product.name);
    card.setAttribute('price', product.price);
    card.setAttribute('qty', '0');
    return card;
}

function render(s) {
    const visible = s.products.filter((product) =>
        product.name.toLowerCase().includes(s.search.toLowerCase())
    );
    visible.sort((a, b) => s.sort === 'asc' ? a.price - b.price : b.price - a.price);
    const visibleIds = new Set(visible.map((product) => product.id));

    for (const [id, card] of cards) {
        if (!visibleIds.has(id)) {
            card.remove();
            cards.delete(id);
        }
    }

    visible.forEach((product, index) => {
        let card = cards.get(product.id);
        if (!card) {
            card = createCard(product);
            cards.set(product.id, card);
        }

        if (list.children[index] !== card) {
            list.insertBefore(card, list.children[index] ?? null);
        }

        const qty = s.cart[product.id] ?? 0;
        if (card.getAttribute('qty') !== String(qty)) {
            card.setAttribute('qty', String(qty));
        }
    });

    const count = Object.values(s.cart).reduce((sum, qty) => sum + qty, 0);
    const total = s.products.reduce((sum, product) =>
        sum + product.price * (s.cart[product.id] ?? 0), 0
    );
    document.getElementById('count').textContent = count;
    document.getElementById('total').textContent = total;
}

list.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    const card = event.target.closest('product-card');
    if (!button || !card) return;

    const id = Number(card.dataset.id);
    const qty = state.cart[id] ?? 0;
    const nextCart = { ...state.cart };

    if (button.classList.contains('plus')) nextCart[id] = qty + 1;
    if (button.classList.contains('minus')) nextCart[id] = Math.max(0, qty - 1);
    if (button.classList.contains('delete')) delete nextCart[id];

    state = { ...state, cart: nextCart };
    render(state);
});

list.addEventListener('product-attribute-change', (event) => {
    console.log('Изменён атрибут:', event.detail.attribute,
        event.detail.oldValue, '→', event.detail.newValue);
});

document.getElementById('search').addEventListener('input', (event) => {
    state = { ...state, search: event.target.value };
    render(state);
});

document.getElementById('sort').addEventListener('click', () => {
    state = { ...state, sort: state.sort === 'asc' ? 'desc' : 'asc' };
    render(state);
});

render(state);
