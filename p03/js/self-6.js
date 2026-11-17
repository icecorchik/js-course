'use strict';
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Object.defineProperty(Product.prototype, 'price', {
    get() {
        return this._price;
    },
    set(value) {
        if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
            throw new RangeError('Цена должна быть неотрицательным конечным числом');
        }
        this._price = value;
    },
    enumerable: true,
    configurable: true
});


Object.defineProperty(Product.prototype, 'formattedPrice', {
    get() {
        return `${this.price.toFixed(2)} ₽`;
    },
    enumerable: true,
    configurable: true
});
const mouse = new Product('Мышь', 790);

console.log('Цена:', mouse.price);
console.log('Форматированная цена:', mouse.formattedPrice);
mouse.price = 850;
console.log('После изменения:', mouse.formattedPrice);
try {
    mouse.price = -10;
} catch (error) {
    console.log('Ошибка:', error.name, error.message);
}