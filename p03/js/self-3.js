function isEqualCart(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        return false;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i].id !== b[i].id || a[i].qty !== b[i].qty) {
            return false;
        }
    }
    return true;
}




const cart1 = [
    { id: 1, qty: 2 },
    { id: 2, qty: 1 }
];
const cart2 = [
    { id: 1, qty: 2 },
    { id: 2, qty: 1 }
];
const cart3 = [
    { id: 2, qty: 1 },
    { id: 1, qty: 2 }
];
const cart4 = [
    { id: 1, qty: 3 },
    { id: 2, qty: 1 }
];



console.log('Одинаковые корзины:', isEqualCart(cart1, cart2));
console.log('Другой порядок:', isEqualCart(cart1, cart3));
console.log('Другое количество:', isEqualCart(cart1, cart4));