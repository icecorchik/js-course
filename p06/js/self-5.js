const catalog = [
    { id: 101, name: 'Мышь', tags: ['usb', 'wireless'] },
    { id: 205, name: 'Клавиатура', tags: ['usb', 'rgb'] },
    { id: 310, name: 'Наушники', tags: ['wireless', 'bluetooth'] },
];

const cart = new Map();
function addToCart(productId, qty = 1) {
    const currentQty = cart.get(productId) ?? 0;
    cart.set(productId, currentQty + qty);
}

addToCart(101);
addToCart(205, 2);
addToCart(101);
console.log('Корзина:', [...cart]);

for (const [productId, qty] of cart) {
    console.log(`Товар ${productId}: ${qty} шт.`);
}
cart.delete(205);
console.log('Размер:', cart.size, '| Есть 205?', cart.has(205));

const allTags = new Set();
for (const product of catalog) {
    for (const tag of product.tags) {
        allTags.add(tag);
    }
}
console.log('Уникальные теги:', [...allTags]);
