





//объявление - Для основных функций программы, которые удобно вызывать по имени
function applyDiscount(price, percent = 0) {
    return price - price * percent / 100;
}

function withVat(price, rate = 20) {
    return price + price * rate / 100;
}

function formatPrice(value) {
    return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value) + ' ₽';
}












//функциональное выражение - Когда функцию нужно сохранить в переменную или передать как значение
const applyDiscountExp = function (price, percent = 0) {
    return price - price * percent / 100;
};

const withVatExp = function (price, rate = 20) {
    return price + price * rate / 100;
};

const formatPriceExp = function (value) {
    return new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value) + ' ₽';
};








//стрелочная функция - Для коротких функций, обработчиков событий и callback
const applyDiscountAr = (price, percent = 0) =>
    price - price * percent / 100;

const withVatAr = (price, rate = 20) =>
    price + price * rate / 100;

const formatPriceAr = (value) =>
    new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value) + ' ₽';





console.log('об');

console.log(applyDiscountDeclaration(1000, 15));
console.log(withVatDeclaration(1000));
console.log(formatPriceDeclaration(1250.5));


console.log('функ выр');

console.log(applyDiscountExpression(1000, 15));
console.log(withVatExpression(1000));
console.log(formatPriceExpression(1250.5));


console.log('стрел функ');

console.log(applyDiscountArrow(1000, 15));
console.log(withVatArrow(1000));
console.log(formatPriceArrow(1250.5));