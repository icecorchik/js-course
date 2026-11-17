function deepFreeze(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    for (const value of Object.values(obj)) {
        deepFreeze(value);
    }
    return Object.freeze(obj);
}
function addToCart(state, item) {
    const nextState = structuredClone(state);
    nextState.cart.push(structuredClone(item));
    return deepFreeze(nextState);
}

const state0 = deepFreeze({
    cart: [],
    filters: {}
});
const state1 = addToCart(state0, {
    id: 1,
    name: 'Мышь',
    qty: 1
});

console.log('Старое состояние:', state0);
console.log('Новое состояние:', state1);
console.log('Старая корзина:', state0.cart.length);
console.log('Новая корзина:', state1.cart.length);
console.log('Ссылки разные?', state0 !== state1);
console.log(
    'Заморожено?',
    Object.isFrozen(state1),
    Object.isFrozen(state1.cart),
    Object.isFrozen(state1.cart[0]),
    Object.isFrozen(state1.filters)
);