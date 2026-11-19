function render(state) {
    const app = document.getElementById('app');
    const total = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const title = document.createElement('h2');
    title.textContent = 'Корзина';
    const list = document.createElement('ul');
    for (const item of state.items) {
        const li = document.createElement('li');
        li.textContent = `${item.name} — ${item.qty} шт. × ${item.price} ₽`;
        list.append(li);
    }
    const summary = document.createElement('p');
    summary.textContent = `Товаров: ${state.items.reduce((sum, item) => sum + item.qty, 0)}, сумма: ${total} ₽`;
    app.replaceChildren(title, list, summary);
    console.log('render: позиций', state.items.length, 'сумма', total);
}

function reactive(initial, onChange) {
    return new Proxy(initial, {
        set(target, key, value) {
            target[key] = value;
            onChange(target);
            return true;
        },
    });
}

const state = reactive({ items: [] }, render);
render(state);
state.items = [...state.items, { name: 'Мышь', price: 790, qty: 2 }];
state.items = [...state.items, { name: 'Коврик', price: 350, qty: 1 }];

state.items.push({ name: 'Кабель', price: 200, qty: 1 });
console.log('После push, длина массива:', state.items.length);
state.items = [...state.items];
