function renderLine({
    name,
    price,
    dimensions: {
        width = 0
    } = {}
}) {
    return `${name}: ${price} ₽, ширина ${width} см`;
}
const keyboard = {
    name: 'Клавиатура',
    price: 1250,
    dimensions: {
        width: 44,
        height: 3
    }
};
const cable = {
    name: 'Кабель',
    price: 300
};
console.log(renderLine(keyboard));
console.log(renderLine(cable));

const product = {
    name: 'Мышь'
};
const email = product?.supplier?.contact?.email ?? 'контактный email не указан';
console.log(email);