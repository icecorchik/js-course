
function discountPercent(sum) {

    if (sum >= 10000) {
        return 10;
    } else if (sum >= 5000) {
        return 5;
    }
    return 0;
}

console.log('Скидка для заказа 12000 ₽:', discountPercent(12000), '%');
console.log('Скидка для заказа 5000 ₽:', discountPercent(5000), '%');
const cartPrices = [1250, 790, 430];

const cartQty = ['2', '1', '3'];
function averageUnitPrice(prices, qty) {

    let totalSum = 0;
    let totalItems = 0;

    for (let i = 0; i < prices.length; i++) {
        totalSum += prices[i] * qty[i];
        totalItems += Number(qty[i]);
    }
    return Math.round(totalSum / totalItems);
}

console.log('Средняя цена единицы товара:',
    averageUnitPrice(cartPrices, cartQty), '₽');

const products = ['Клавиатура', 'Мышь', 'Монитор', 'Коврик', 'Наушники'];
const stock = [12, -1, 4, 0, 7];

function firstOutOfStock(names, counts) {
    let i = 0;
    while (i < counts.length) {
        if (counts[i] === 0) {
            return names[i];
        }
        i++;
    }
    return 'все товары в наличии';
}

console.log('Первый товар, которого нет на складе:',
    firstOutOfStock(products, stock));



    
//позднее добавление коммита