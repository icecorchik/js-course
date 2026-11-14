const shopName = 'Мини-магазин'; //глобальная

function printHeader() {
    const title = 'Каталог'; //локальная
    console.log(shopName, '|', title);
}
printHeader();


const stock = 3;
if (stock > 0) {
    const message = "eсть в наличии";
    console.log('внутри блока:', message);
}
console.log('снаружи блока', typeof message);


const discount = 5;

function vipPrice(price) {
    const discount = 20;           //Заменяет Внешнюю
    return price - price * discount / 100;
}
console.log ('VIP-цена:', vipPrice(1000),'внешняя скидка:', discount);


let visits = 0;
function registerVisit() {
    visits++;    //нет своей visits, меняеться внешняя
}
registerVisit();
registerVisit();
console.log('визитов:', visits);
