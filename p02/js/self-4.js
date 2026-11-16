function createCart() {
    const cartItems = [];
    return {
        add(item) {
            cartItems.push({ ...item });
        },
        remove(name) {
            const index = cartItems.findIndex(
                item => item.name === name
            );
            if (index === -1) {
                return false;
            }
            cartItems.splice(index, 1);
            return true;
        },
        total() {
            let sum = 0;
            for (const item of cartItems) {
                sum += item.price;
            }
            return sum;
        },
        items() {
            return cartItems.map(item => ({ ...item }));
        }

    };
}








const cart = createCart();


cart.add({
    name: 'Клавиатура',
    price: 1250
});

cart.add({
    name: 'Мышь',
    price: 790
});

cart.add({
    name: 'Кабель',
    price: 300
});






console.log('Товары:', cart.items());

console.log('Количество товаров:', cart.items().length);

console.log('Общая стоимость:', cart.total());

console.log('Удаление мыши:', cart.remove('Мышь'));

console.log('После удаления:', cart.items());

console.log('Новая стоимость:', cart.total());

const copiedItems = cart.items();

copiedItems.pop();

copiedItems[0].price = 0;

console.log('Изменённая копия:', copiedItems);

console.log('Настоящая корзина:', cart.items());

console.log('Настоящая стоимость:', cart.total());