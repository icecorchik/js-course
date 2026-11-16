function increaseQty(item) {

    item.qty = item.qty + 1;

}

function increaseNumber(n) {

    n = n + 1;

    return n;

}

const product = {
    name: 'Мышь',
    qty: 1
};
let number = 1;
increaseQty(product);
number = increaseNumber(number);


console.log('Объект после изменения:', product);
console.log('Число после изменения:', number);


function increaseQtyCopy(item) {

    return {
        ...item,
        qty: item.qty + 1
    };

}

const originalProduct = {
    name: 'Клавиатура',
    qty: 1
};
const newProduct = increaseQtyCopy(originalProduct);


console.log('Исходный объект:', originalProduct);
console.log('Новый объект:', newProduct);
console.log('Это один объект?', originalProduct === newProduct);