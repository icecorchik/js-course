
const priceKop = 676705;

const discount = 15;

const discountedPrice = Math.round(
    priceKop * (100 - discount) / 100
);

const totalPrice = discountedPrice * 3;

const result = (totalPrice / 100).toFixed(2);

console.log('Стоимость трёх товаров:', result, 'руб.');

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
