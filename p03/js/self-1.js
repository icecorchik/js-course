'use strict';

const product = {
    name: 'Клавиатура',
    price: 1250,

    dimensions: {
        width: 44,
        height: 3,
        depth: 13
    },

    tags: ['usb', 'rgb', 'wireless'],

    describe() {
        return `${this.name}: ${this.price} ₽. Размеры: ${this.dimensions.width} × ${this.dimensions.height} × ${this.dimensions.depth} см. Теги: ${this.tags.join(', ')}`;
    }
};

console.log(product.describe());

const detachedDescribe = product.describe;

try {
    console.log(detachedDescribe());
} catch (error) {
    console.log('Ошибка при вызове без объекта:', error.name);
}

const boundDescribe = product.describe.bind(product);

console.log(boundDescribe());