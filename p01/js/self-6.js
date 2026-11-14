
const prices = [990, 1250, 430, 2100, 760, 1500, 850, 320];
let sum = 0;
let max = prices[0];

for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    if (prices[i] > max) {
        max = prices[i];
    }
}

const average = sum / prices.length;

console.log('Сумма:', sum);
console.log('Максимальная цена:', max);
console.log('Средняя цена:', average);
console.log('Цены дороже средней:');

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > average) {
        console.log(prices[i]);
    }
}
let firstIndex = -1;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 1000) {
        firstIndex = i;
        break;
    }
}
console.log('Индекс первой цены выше 1000:', firstIndex);



//позднее добавление коммита