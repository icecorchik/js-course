const CartModule = (function () {
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
                return cartItems.map(
                    item => ({ ...item })
                );
            }
        };
    }
    return {
        createCart: createCart
    };
})();



const cart = CartModule.createCart();
cart.add({
    name: 'Клавиатура',
    price: 1250
});
cart.add({
    name: 'Мышь',
    price: 790
});


console.log('Товары:', cart.items());
console.log('Стоимость:', cart.total());
console.log('Доступ к внутренней функции:', typeof createCart);
console.log('Доступ к модулю:', typeof CartModule);